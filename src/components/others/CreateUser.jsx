import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateUser = () => {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match. User not created");
      setFirstName("");
      setLastName("");
      setRole("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      return;
    }
    
    const emailExists = userData.some((user) => user.email === email);

    if (emailExists) {
      alert("Email already exists. Please use a different email.");
      setFirstName("");
      setLastName("");
      setRole("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      return;
    }
    console.log("User Created");
    const id = userData.length > 0 ? userData[userData.length - 1].id + 1 : 1;
    const newUser = {
      id,
      firstName,
      lastName,
      email,
      password,
      role,
      taskCount: {
        active: 0,
        new: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    };
    const data = userData;
    const updatedUserData = [...data, newUser];
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    console.log("updatedUserData:", updatedUserData);
    setUserData(updatedUserData);
    setFirstName("");
    setLastName("");
    setRole("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  return (
    <div>
      <div>
        <div className="p-5 bg-[#1c1c1c] mt-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 rounded">
          <form
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:flex-wrap"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full sm:w-1/2 sm:pl-10">
              <div>
                <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                  First Name
                </h3>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                  type="text"
                  required
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                  Last Name
                </h3>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                  type="text"
                  required
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                  Role
                </h3>

                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="w-full  sm:w-2/5 flex flex-col items-start ">
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Email
              </h3>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-11/12 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="email"
                required
              />
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Password
              </h3>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-11/12 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="password"
                required
              />
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Confirm Password
              </h3>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-11/12 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="password"
                required
              />
            </div>
            <div className="w-full flex flex-row justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded-lg text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-4 xl:w-1/4 lg:w-1/3 md:w-1/3 w-1/2">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
