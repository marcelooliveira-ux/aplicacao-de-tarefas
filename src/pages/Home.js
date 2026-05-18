import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

function Home() {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Minhas Tarefas</h1>

      <Link to="/add">Adicionar Tarefa</Link>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;