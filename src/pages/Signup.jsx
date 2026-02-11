import Button from "@/components/ButtonComponents.tsx";
import { useState } from "react";
import CheckboxComponent from "../components/CheckboxComponent";
import InputFields from "../components/InputFields";
import Logo from "../images/to-do.png";

function Login() {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white absolute inset-3.5 rounded-4xl">
        <Button
          label="Back"
          name="back"
          className="mt-10.5 w-25.75 h-7.5 mx-10 text-[14px]"
        />
        {/* Logo, subtext */}
        <div className="flex flex-col gap-2 justify-center items-center pt-30">
          <span>
            <img src={Logo} alt="" className="w-50.5" />
          </span>
        </div>

        {/* Login Form */}
        <div className=" flex flex-col gap-2 justify-center items-center pt-4.75">
          <span className="font-bold text-[25px]">SIGN UP</span>
          <div className="flex flex-col gap-1 justify-center items-center">
            <form action="" className="flex flex-col gap-3.75">
              <InputFields type="text" placeholder="Name" />
              <InputFields type="email" placeholder="Email" />
              <InputFields type="password" placeholder="Password" />
              <InputFields type="password" placeholder="Confirm Password" />
            </form>

            {/* SignUp Button */}

            {/* Remember Me */}
            <div className="my-3">
              <CheckboxComponent
                id="terms"
                label="Terms and conditions"
                checked={accepted}
                onChange={setAccepted}
              />
              {/* LOGIN BUTTON */}
              <Button
                type="submit"
                id="login"
                name="login"
                label="Sign-up"
                className="mt-5 px-30 py-1.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
