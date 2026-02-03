import React from "react";

function Sidebar({
  projectsArr,
  selectFunc,
  currentSelectedProject,
  onStartAddProject,
}) {
  return (
    <aside
      className="w-1/4 
        flex flex-col gap-5 bg-slate-800 text-zinc-200 
        rounded-tr-3xl pt-20 px-10"
    >
      <h2 className="antialiased uppercase font-bold text-stone-200 text-lg lg:text-3xl md:text-xl tracking-wider">
        your projects
      </h2>

      <button
        onClick={onStartAddProject}
        className="antialiased bg-slate-700 p-4 rounded-2xl font-bold tracking-wider hover:bg-slate-500 hover:text-stone-100 
      active:bg-stone-800 active:scale-95 transition-all duration-200 w-2/4"
      >
        + Add Project
      </button>

      <ul className="text-white gap-0.5">
        {projectsArr.map((project) => {
          const isSelected = currentSelectedProject === project.id;
          let cssClass = "p-2 ";

          if (isSelected) {
            cssClass += "bg-gray-700 transition-all duration-200";
          } else {
            cssClass += "bg-slate-800";
          }

          return (
            <li key={project.id} className={cssClass}>
              <button
                onClick={() => selectFunc(project.id)}
                className="w-full text-left"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
