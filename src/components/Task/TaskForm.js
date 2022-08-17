import React from "react";

export default function TaskForm({ handleSubmit }) {
  const [formInput, setFormInput] = React.useState("");
  function handleFormChange(event) {
    setFormInput(event.target.value);
  }
  return (
    <form
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
