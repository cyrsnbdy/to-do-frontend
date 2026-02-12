import Button from "@/components/ButtonComponents";
import Logo from "@/images/to-do.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckTasks from "./components/checkTasks";

function Tasks() {
  const [accepted, setAccepted] = useState(false);
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
            <span className="font-bold">username</span>
          </span>
        </div>

        {/* Add Button*/}

        <div className="mx-auto pt-12">
          <Button label="Add Tasks" className="w-65 h-7" />
        </div>

        {/* TASK LIST */}
        <div
          className="bg-white 
                  max-h-100 overflow-y-auto mt-8 px-6"
        >
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 ">
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
            <CheckTasks></CheckTasks>
          </div>
        </div>

        {/* Logout Button */}

        <div className="mx-auto mt-5">
          <Link to="/login">
            <Button label="Logout" className="w-65 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
