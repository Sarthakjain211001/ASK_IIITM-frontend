import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",password:"",cpassword:""
    })
    let name,value;
    const handleInputs = (e)=>{
        console.log(e); 
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
  }
  
  const PostData = async(e)=>{
      e.preventDefault();
      const {name, email, password, cpassword} = user;
      fetch('/signup', {
        method:"POST",
        headers: {
         "Content-Type":"application/json"
        },
        body: JSON.stringify({
         name, email, password, cpassword
        })
     })
     .then(function(response) {
         console.log(response);
         if (response.status === 422) {
           window.alert("Invalid Credentials");
         }
         else{
           window.alert("Registered Successfully");
           navigate('/')
         }
     })
        
    }
    return (    
            <div className="form-full">
            <form method='POST'>
            <div className="form-group">
    <label htmlFor="name">name</label>
    <input type="name" name="name" className="form-control" id="name" 
    value={user.name}
    onChange={handleInputs}
    placeholder="enter user-name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">email</label>
    <input type="email"name="email" className="form-control" id="email" aria-describedby="emailHelp"
    value={user.email}
    onChange={handleInputs}
    placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="password">password</label>
    <input type="password"name="password" className="form-control" id="password" 
    value={user.password}
    onChange={handleInputs}
    placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">cpassword</label>
    <input type="cpassword"name="cpassword" className="form-control" id="cpassword" 
    value={user.cpassword}
    onChange={handleInputs}
    placeholder="Re-write Password"/>
  </div>
  <button type="submit" className="btn btn-primary" value="signup" onClick={PostData}>Submit</button>
</form>
            </div>
    )
}

export default Signup
