import React from "react";
import "./TaskForm.css"

export default function TaskForm({ handleSubmit }) {
  const [formInput, setFormInput] = React.useState("");
  function handleFormChange(event) {
    setFormInput(event.target.value);
  }
  return (
    <form
    className="task-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (formInput === "") return;
        handleSubmit(event, formInput);
        setFormInput("");
      }}
    >
      <input
        type="text"
        placeholder="Add Task"
        onChange={handleFormChange}
        value={formInput}
      />
      <button type="submit">Add</button>
    </form>
  );
}
