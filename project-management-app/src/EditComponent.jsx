import React from "react";
import { useRef } from "react";

function EditComponent({
  currentProject,
  addTaskToProject,
  projects,
  deleteTask,
  deleteProject,
}) {
  const titleTask = useRef();

  function onAddTask() {
    const title = titleTask.current.value;

    addTaskToProject(title);
  }

  function onDeleteTask() {
    const title = titleTask.current.value;

    deleteTask(title);
  }

  return (
    <div className="flex flex-col w-3/4 p-8">
      <div className="flex flex-col gap-6 pb-8 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold leading-normal m-0 h-auto text-gray-500">
            {currentProject.title}
          </h2>
          <button className="text-stone-300" onClick={() => (deleteProject(currentProject.id))}>
            Delete
          </button>
        </div>
        <p className="text-stone-400">{currentProject.dueDate}</p>
        <p>{currentProject.description}</p>
      </div>

      <div className="flex flex-col gap-6 pt-8">
        <h1 className="text-3xl text-gray-500">Tasks</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="bg-gray-300 rounded-sm "
            ref={titleTask}
          />
          <button onClick={onAddTask}>Add task</button>
        </div>

        <ul className=" bg-gray-200 rounded-md">
          {currentProject.tasks.map((task) => {
            return (
              <li className="flex justify-between p-2">
                {task}
                <button onClick={onDeleteTask}>Clear</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default EditComponent;
