import Button from "@/components/ButtonComponents";
import Logo from "@/images/to-do.png";
import { useAuthStore } from "@/stores/auth/auth.store";
import { useTaskStore } from "@/stores/tasks/tasks.store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddTaskModal } from "./components/AddTaskModal";
import CheckTasks from "./components/CheckTasks";
import { DeleteTaskModal } from "./components/DeleteModal";
import { EditTaskModal } from "./components/EditModal";
import { ViewTaskModal } from "./components/viewTaskModal";

function Tasks() {
  const navigate = useNavigate();
  const { setLogout } = useAuthStore();
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewTaskText, setViewTaskText] = useState("");
  const [viewTaskCompleted, setViewTaskCompleted] = useState(false);
  const openViewModal = (text: string, completed: boolean) => {
    setViewTaskText(text);
    setViewTaskCompleted(completed);
    setIsViewModalOpen(true);
  };
  const {
    tasks,
    getTasks,
    toggleTaskStatus,
    deleteTask,
    createTask,
    updateTask,
  } = useTaskStore();

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedTaskText, setSelectedTaskText] = useState<string>("");

  // Decode basicToken for user email
  const basicToken = localStorage.getItem("basicToken");
  let userEmail = "";
  if (basicToken) {
    try {
      const decoded = atob(basicToken);
      userEmail = decoded.split(":")[0];
    } catch {
      userEmail = "";
    }
  }

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // Logout
  const handleLogout = async () => {
    try {
      await setLogout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Add Task
  const handleAddTask = async (taskText: string) => {
    const success = await createTask({ task: taskText });
    if (success) setIsAddModalOpen(false);
  };

  // Open Edit Modal
  const openEditModal = (id: string, text: string) => {
    setEditTaskId(id);
    setEditTaskText(text);
    setIsEditModalOpen(true);
  };

  // Handle Edit Task
  const handleEditTask = async (newText: string) => {
    if (!editTaskId) return;

    const success = await updateTask(editTaskId, { task: newText });
    if (success) {
      setIsEditModalOpen(false);
      setEditTaskId(null);
      setEditTaskText("");
    }
  };

  // Open Delete Modal
  const openDeleteModal = (id: string, text: string) => {
    setSelectedTaskId(id);
    setSelectedTaskText(text);
    setIsDeleteModalOpen(true);
  };

  // Handle Delete Task
  const handleDeleteTask = async () => {
    if (!selectedTaskId) return;

    const success = await deleteTask(selectedTaskId);
    if (success) {
      setIsDeleteModalOpen(false);
      setSelectedTaskId(null);
      setSelectedTaskText("");
    }
  };

  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white absolute inset-3.5 rounded-4xl flex flex-col justify-center items-center">
        {/* Logo and User Email */}
        <div className="pt-14 mx-auto flex flex-col justify-center items-center gap-11">
          <span className="ml-2">
            <img src={Logo} alt="Logo" className="w-38" />
          </span>
          <span>
            <span>Welcome! </span>
            <span className="font-bold">{userEmail || "username"}</span>
          </span>
        </div>

        {/* Add Task Button */}
        <div className="mx-auto pt-12">
          <Button
            label="Add Tasks"
            className="w-65 h-7"
            onClick={() => setIsAddModalOpen(true)}
          />
        </div>

        {/* Add Task Modal */}
        <AddTaskModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddTask}
        />

        {/* Task List */}
        <div className="mt-10 overflow-y-auto flex flex-col gap-3 h-120">
          {tasks.map((task) => (
            <CheckTasks
              key={task._id}
              taskText={task.task}
              completed={task.completed}
              onChange={async () => {
                await toggleTaskStatus(task._id);
                await getTasks();
              }}
              onView={() => openViewModal(task.task, task.completed)} //  label opens modal
              onDeleteClick={() => openDeleteModal(task._id, task.task)}
              onEdit={() => openEditModal(task._id, task.task)}
            />
          ))}
        </div>

        {/* Edit Task Modal */}
        {editTaskId && (
          <EditTaskModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            taskId={editTaskId}
            initialText={editTaskText}
            onEdit={handleEditTask} //  connected to store
          />
        )}

        {/* Delete Task Modal */}
        {selectedTaskId && (
          <DeleteTaskModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            taskId={selectedTaskId}
            taskText={selectedTaskText}
            onDelete={handleDeleteTask}
          />
        )}

        {isViewModalOpen && (
          <ViewTaskModal
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
            taskText={viewTaskText}
            completed={viewTaskCompleted}
          />
        )}

        {/* Logout Button */}
        <div className="mx-auto">
          <Button label="Logout" className="w-65 h-7" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
