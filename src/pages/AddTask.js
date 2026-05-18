import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      text,
    };

    addTask(newTask);
    navigate("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Adicionar Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite a tarefa"
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddTask;