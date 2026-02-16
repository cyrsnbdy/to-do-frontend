import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

interface CheckTasksProps {
  taskText: string; // text of the task
  onChange: (checked: boolean) => void; // checkbox change
  onDelete?: () => void; // optional delete callback
  onEdit?: () => void; // optional edit callback
}

function CheckTasks({ taskText, onChange, onDelete, onEdit }: CheckTasksProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <div className="flex items-center gap-2 mx-auto">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />

      <input
        type="text"
        value={taskText}
        readOnly
        className={`border border-black rounded-3xl w-65 h-11 text-sm text-center overflow-auto p-2 ${
          isChecked ? "line-through text-gray-400" : ""
        }`}
      />

      <button onClick={onDelete}>
        <FaTrash color="#A60C00" />
      </button>

      <button onClick={onEdit}>
        <FaPencil color="#1E319D" />
      </button>
    </div>
  );
}

export default CheckTasks;
