import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email is: ", email);
      console.log("Password is: ", password);
      setEmail("");
      setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center font-bold">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form className="flex flex-col items-center justify-center" onSubmit={e => handleSubmit(e)}>
          <input
            type="email"
            className=" border-2 border-emerald-600 py-3 px-5 text-xl outline-none  bg-transparent rounded-full"
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none  bg-transparent rounded-full mt-3"
            placeholder="Enter password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button
            className=" bg-emerald-600  hover:bg-emerald-900 py-3 px-5 text-xl outline-none  bg-transparent rounded-full mt-7 w-full"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
