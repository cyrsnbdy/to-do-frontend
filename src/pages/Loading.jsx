import Logo from "../images/to-do.png";

function SplashScreen() {
  return (
    <div className="bg-[#1E319D] w-screen h-screen flex flex-col items-center justify-center">
      <div>
        <span>Welcome</span>
        <span>username</span>
        <img
          src={Logo}
          alt=""
          className=" w-55 p-4 pb-6 flex justify-center items-center"
        />
      </div>
      <div className="pb-45">
        <svg className="w-13 h-13 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}

export default SplashScreen;
