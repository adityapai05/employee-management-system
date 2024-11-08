import { useEffect, useState } from "react";
import Login from "./components/Authentication/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";

function App() {
  
  const [user, setUser] = useState(null);
  
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  const authData = useContext(AuthContext);
console.log(authData)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      console.log("userData:",userData);
    }
  },[])
  
  const handleLogin = (email, password) => {
    if (email === "demo@eg.com" && password === "p123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}));
    } 
    else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data:employee}));
      }
    } 
    else alert("Invalid Credentials");
  };
  
  console.log("App: ",{loggedInUserData})
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData}/>
      ) : (user == "employee" ? 
        <EmployeeDashboard data={loggedInUserData} />
       : null)}
    </>
  );
}

export default App;
