import React, { useState } from "react";

const AddTask = () => {
  return (
    <>
      <form>
        <input type="text" name="title" id="title" placeholder="Enter title" />
        <textarea name="content" id="content" placeholder="Add note"></textarea>
        <button>Add</button>
      </form>
    </>
  );
};

export default AddTask;
