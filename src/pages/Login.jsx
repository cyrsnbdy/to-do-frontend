import Button from "@/components/ButtonComponents.tsx";
import { useState } from "react";
import CheckboxComponent from "../components/CheckboxComponent";
import InputFields from "../components/InputFields";
import TextComponents from "../components/TextComponents";
import Logo from "../images/to-do.png";

function Login() {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white absolute inset-3.5 rounded-4xl">
        {/* Logo, subtext */}
        <div className="flex flex-col gap-2 justify-center items-center pt-40">
          <span>
            <img src={Logo} alt="" className="w-50.5" />
          </span>
          <span className=" text-[12px] px-20.5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        {/* Login Form */}
        <div className=" flex flex-col gap-2 pt-29">
          <span className="font-bold text-[25px] mx-auto">LOGIN</span>
          <div className="flex flex-col gap-1 ">
            <form
              action=""
              className=" justify-center items-center flex flex-col gap-3.75"
            >
              <InputFields type="email" placeholder="Email" />
              <InputFields type="password" placeholder="Password" />
            </form>

            {/* SignUp Button */}
            <div className="flex flex-col ml-7.5">
              <span className="text-sm">
                Don't have an account? <TextComponents text="Sign-up" />
              </span>
              {/* Remember Me */}
              <CheckboxComponent
                id="terms"
                label="Remember Me?"
                checked={accepted}
                onChange={setAccepted}
              />
            </div>
            <div className="flex flex-col mx-auto">
              {/* LOGIN BUTTON */}
              <Button
                type="submit"
                id="login"
                name="login"
                label="Login"
                className="mt-4 px-30 py-1.5"
              />

              {/* Forgot Password? */}

              <span className="mx-auto">
                <TextComponents text="Forgot Password?" className="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
