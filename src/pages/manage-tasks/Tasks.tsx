import Button from "@/components/ButtonComponents";
import Logo from "@/images/to-do.png";
import { useAuthStore } from "@/stores/auth/auth.store";
import { useNavigate } from "react-router-dom";
import CheckTasks from "./components/CheckTasks";

function Tasks() {
  const navigate = useNavigate();
  const { setLogout } = useAuthStore();

  // Decode basicToken to get email for display (optional)
  const basicToken = localStorage.getItem("basicToken");
  let userEmail = "";
  if (basicToken) {
    try {
      const decoded = atob(basicToken); // format: "email:password"
      userEmail = decoded.split(":")[0]; // just take the email
    } catch {
      userEmail = "";
    }
  }

  const handleLogout = async () => {
    try {
      await setLogout(); // clears store state and basicToken
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white absolute inset-3.5 rounded-4xl flex flex-col">
        {/* LOGO AND USER EMAIL */}
        <div className="pt-14 mx-auto flex flex-col gap-11">
          <span className="ml-2">
            <img src={Logo} alt="Logo" className="w-38" />
          </span>
          <span className="">
            <span>Welcome! </span>
            <span className="font-bold">{userEmail || "username"}</span>
          </span>
        </div>

        {/* Add Button */}
        <div className="mx-auto pt-12">
          <Button label="Add Tasks" className="w-65 h-7" />
        </div>

        {/* TASK LIST */}
        <div className="bg-white h-97 overflow-y-auto mt-8 px-6">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 ">
            <CheckTasks />
          </div>
        </div>

        {/* Logout Button */}
        <div className="mx-auto mt-5">
          <Button label="Logout" className="w-65 h-7" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
