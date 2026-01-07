import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen w-screen p-5 bg-[#0B1B32] text-white flex flex-col justify-center items-center ">
      <div className="border p-14 rounded-2xl border-[#0C969C] ">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col justify-center items-center gap-6 "
        >
          <input
            className="border border-[#0C969C] focus:outline-none rounded-full text-xl px-6 py-3 placeholder:text-neutral-400"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="border focus:outline-none border-[#0C969C] rounded-full text-xl px-6 py-3 placeholder:text-neutral-400"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="active:scale-95 rounded-full text-2xl py-2 px-6 mt-8 w-fit bg-[#0C969C]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
