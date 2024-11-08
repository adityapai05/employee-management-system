import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-8 md:p-12 rounded-xl w-full max-w-md mx-4 sm:mx-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">Login</h2>
        <form
          className="flex flex-col items-center justify-center space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full w-full"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full w-full"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="bg-emerald-600 hover:bg-emerald-700 py-3 px-5 text-xl outline-none rounded-full w-full"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;