import { useState } from "react";
import "./index.css";
import "./Sidebar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
function App() {
  const [currentView, setCurrentView] = useState("none");
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  function handleCancel() {
    setCurrentView("none");
  }

  function addProject(projectData) {
    setProjects((prevProjects) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
        tasks: [],
      };
      return [...prevProjects, newProject];
    });
    setCurrentView("none");
  }

  function handleSelect(id) {
    setSelectedProjectId(id);
    setCurrentView("edit");
  }

  function addTaskToProject(text) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: [text, ...project.tasks],
          };
        }
        return project;
      });
    });
  }

  function deleteProject(projectId){
    setProjects((prevProjects) => {
        return prevProjects.filter((project) => (project.id !== projectId))
    })
    setCurrentView("none")
  }

  function deleteTask(task) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((taskArg) => taskArg !== task),
          };
        }
        return project;
      });
    });
  }

  const currProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <div className="flex h-screen w-full pt-15 bg-white">
      <Sidebar
        projectsArr={projects}
        selectFunc={handleSelect}
        currentSelectedProject={selectedProjectId}
        onStartAddProject={() => setCurrentView("add")}
      />
      <MainContent
        view={currentView}
        onStartAdd={() => setCurrentView("add")}
        onCancel={handleCancel}
        saveProject={addProject}
        currentProject={currProject}
        addTaskToProject={addTaskToProject}
        projects={projects}
        deleteTask={deleteTask}
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default App;
