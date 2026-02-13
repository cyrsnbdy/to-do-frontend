import Button from "@/components/ButtonComponents";
import Logo from "@/images/to-do.png";
import CheckTasks from "@/pages/manage-tasks/components/CheckTasks";
import { useAuthStore } from "@/stores/auth/auth.store"; // adjust path
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { user, setLogout, isAuthenticated } = useAuthStore();

  // Get user email from stored data
  const userEmail =
    user?.email || JSON.parse(localStorage.getItem("user") || "{}")?.email;
  const userName =
    user?.name || JSON.parse(localStorage.getItem("user") || "{}")?.name;

  const handleLogout = async () => {
    try {
      await setLogout(userEmail); // Pass the email parameter
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white absolute inset-3.5 rounded-4xl flex flex-col">
        {/* LOGO AND THE USERNAME */}
        <div className="pt-14 mx-auto flex flex-col gap-11">
          <span className="ml-2">
            <img src={Logo} alt="" className="w-38" />
          </span>
          <span className="">
            <span>Welcome! </span>
            <span className="font-bold">{userName || "username"}</span>
          </span>
        </div>

        {/* Add Button*/}
        <div className="mx-auto pt-12">
          <Button label="Add Tasks" className="w-65 h-7" />
        </div>

        {/* TASK LIST */}
        <div className="bg-white max-h-100 overflow-y-auto mt-8 px-6">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 ">
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
            <CheckTasks />
          </div>
        </div>

        {/* Logout Button */}
        <div className="mx-auto mt-5">
          <Button
            label="Logout"
            className="w-65 h-7"
            onClick={handleLogout} // Add onClick handler
          />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
