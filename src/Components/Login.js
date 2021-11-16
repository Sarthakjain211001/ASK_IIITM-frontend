import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",password:""
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
        const {email, password} = user;
        fetch('/login', {
          method:"POST",
          headers: {
           "Content-Type":"application/json"
          },
          body: JSON.stringify({
           email, password
          })
       })
       .then(function(response) {
           console.log(response);
           if (response.status === 422) {
             window.alert("Invalid Credentials");
           }
           else{
             window.alert("Login Successfully");
             navigate('/')
           }
       })
          
      }
    return (
        <div>
            <div className="form-full">
            <form method='POST'>
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
  <button type="submit" className="btn btn-primary" value="login" onClick={PostData}>Submit</button>
</form>
            </div>
        </div>
    )
}

export default Login
