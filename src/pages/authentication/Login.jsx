import Button from "@/components/ButtonComponents.tsx";
import TextComponents from "@/components/TextComponents";
import Logo from "@/images/to-do.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckboxComponent from "./components/CheckboxComponent";
import InputFields from "./components/InputFields";

function Login() {
  const [accepted, setAccepted] = useState(false);

  return (
    <motion.div
      className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white absolute inset-3.5 rounded-4xl">
        {/* Logo, subtext */}
        <div className="flex flex-col gap-2 justify-center items-center pt-40">
          <span>
            <img src={Logo} alt="" className="w-50.5" />
          </span>
          <span className="text-[12px] px-20.5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>

        {/* Login Form */}
        <div className="flex flex-col gap-2 pt-29">
          <span className="font-bold text-[25px] mx-auto">LOGIN</span>

          <div className="flex flex-col gap-1">
            <form className="flex flex-col gap-3.75 justify-center items-center">
              <InputFields type="email" placeholder="Email" />
              <InputFields type="password" placeholder="Password" />
            </form>

            <div className="flex flex-col ml-7.5">
              <span className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup">
                  <TextComponents text="Sign-up" />
                </Link>
              </span>

              <CheckboxComponent
                id="terms"
                label="Remember Me?"
                checked={accepted}
                onChange={setAccepted}
              />
            </div>

            <div className="flex flex-col mx-auto">
              <Link to="/loading">
                <Button
                  type="submit"
                  id="login"
                  name="login"
                  label="Login"
                  className="mt-4 px-30 py-1.5"
                />
              </Link>

              <span className="mx-auto mt-1">
                <Link to="/forgot-password">
                  <TextComponents text="Forgot Password?" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
