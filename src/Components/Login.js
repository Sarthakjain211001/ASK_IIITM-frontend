import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(function (response) {
      console.log(response);
      if (response.status === 422) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successfully");
        navigate("/");
      }
    });
  };
  return (
    <div pt-5>
      <div className="form-full border border-white container shadow p-3 mb-5 bg-white rounded">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control mt-2"
              id="email"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            value="login"
            onClick={PostData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
