import React from "react";
import { useRef } from "react";
function Form({ onCancel, saveProject }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const dueDate = dueDateRef.current.value;

    saveProject({
      title: title,
      description: desc,
      dueDate: dueDate,
    });
  }

  return (
    <div className="w-2/3 mt-24 h-full">
      <div className="flex justify-end gap-0.3">
        <button className="p-4 bg-white" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="px-6 bg-gray-500 text-white rounded-xl"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      <div className="pl-10 flex flex-col gap-2 mt-2">
        <h2>Title</h2>
        <input
          ref={titleRef}
          type="text"
          className="bg-gray-200 w-full text-black rounded-xs"
        />
        <h2 className="uppercase">Description</h2>
        <textarea
          className="bg-gray-200 w-full text-black rounded-xs h-35"
          ref={descRef}
        ></textarea>

        <h2 className="uppercase">Due Date</h2>
        <input
          type="date"
          className="bg-gray-200 w-full rounded-xs text-black"
          ref={dueDateRef}
        />
      </div>
    </div>
  );
}

export default Form;
