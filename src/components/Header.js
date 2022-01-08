import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.Reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h4>
        {task.Name}
        <FaTimes
          style={{ color: "red", marginLeft: "90px" }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
      <p>{task.Day}</p>
    </div>
  );
}