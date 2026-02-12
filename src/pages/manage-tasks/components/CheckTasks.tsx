import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

interface CheckTasksProps {
  onChange: (checked: boolean) => void;
}

function CheckTasks({ onChange }: CheckTasksProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange(checked); // send value to parent
  };

  return (
    <div className="flex items-center gap-2 mx-auto">
      <input type="checkbox" onChange={handleChange} />

      <input
        type="text"
        value="Lorem ipsum dolor sit amet consectet."
        readOnly
        className={
          isChecked
            ? "line-through text-gray-400 border border-black rounded-3xl w-65 h-11 text-sm text-center overflow-auto p-2"
            : " border border-black rounded-3xl w-65 h-11 text-sm text-center overflow-auto p-2"
        }
      />

      <button>
        <FaTrash color="#A60C00" />
      </button>

      <button>
        <FaPencil color="#1E319D" />
      </button>
    </div>
  );
}

export default CheckTasks;
