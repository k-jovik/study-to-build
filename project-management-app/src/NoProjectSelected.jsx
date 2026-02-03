import React from "react";

function NoProjectSelected({onStartAddProject}) {
  return (
    <div
      className="h-full flex flex-col items-center justify-center text-center flex-1 
        text-3xl overflow-y-auto gap-4"
    >
      <h2 className="font-bold ">No Project Selected</h2>

      <p>Select a project or get started with a new one</p>

      <button
        onClick={onStartAddProject}
        className="p-4 rounded-2xl bg-amber-700 text-gray-100 
        hover:bg-amber-400 transition-all duration-200 active:bg-gray-400"
      >
        Create new project
      </button>
    </div>
  );
}

export default NoProjectSelected;
