import React from "react";
import NoProjectSelected from "./NoProjectSelected";
import Form from "./Form";
import EditComponent from "./EditComponent";

function MainContent({
  view,
  onStartAdd,
  onCancel,
  saveProject,
  currentProject,
  projects,
  addTaskToProject,
  deleteTask,
  deleteProject,
}) {
  return (
    <div className="flex-1">
      {view === "none" && <NoProjectSelected onStartAddProject={onStartAdd} />}
      {view === "add" && <Form onCancel={onCancel} saveProject={saveProject} />}
      {view === "edit" && (
        <EditComponent
          currentProject={currentProject}
          addTaskToProject={addTaskToProject}
          projects={projects}
          deleteTask={deleteTask}
          deleteProject={deleteProject}
        />
      )}
    </div>
  );
}

export default MainContent;
