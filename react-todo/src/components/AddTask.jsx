import React, { useState } from "react";

const AddTask = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const [name, value] = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={note.title}
          name="title"
          id="title"
          placeholder="Enter title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          id="content"
          placeholder="Add note"
        ></textarea>
        <button>Add</button>
      </form>
    </>
  );
};

export default AddTask;
