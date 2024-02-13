import './App.css';
import {useState} from "react";

function App() {
  const[user,setUser]=useState();
  const[password,setPassword]=useState();
  const[userError,setUserError]=useState(false);
  const[passwordError,setPasswordError]=useState(false);
 
  const handleSubmit=(e)=>{
    if((setUserError(true) && setPasswordError(true)))
      alert("Please Enter Correct Values")
    else
      alert("Login Successful")

    e.preventDefault();
  }

  const handleUser=(e)=>{
    let item=e.target.value;

    if(item.length<3)
      setUserError(true);
    else
      setUserError(false);

    setUser(item);
  }

  const handlePassword=(e)=>{
    let item=e.target.value;

    if(item.length<3)
      setPasswordError(true);
    else
      setPasswordError(false);

    setPassword(item);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Form Validation</h1>
      <div>
        <input type="email" username="email" placeholder="Enter Email" 
        onChange={handleUser}
        value={user}/>
        {userError?"Invalid Entry":""}
      </div>
      <div>
        <input type="text" username="password" placeholder="Enter Password"
        onChange={handlePassword}
        value={password}/>
        {passwordError?"Invalid Entry":""}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
      
    </>
  );
}

export default App;
