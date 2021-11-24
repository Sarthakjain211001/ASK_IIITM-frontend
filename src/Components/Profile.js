import React,{useEffect,useState} from "react";

export default function Profile() {
  const [p,setP] = useState()
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    lname: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    position: "",
    exp: "",
    edu: "",
    skills: "",
    achievements: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setProfile({ ...profile, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { lname, mobile,address,city,state,position,exp,edu,skills,achievements } = profile;
    fetch("/editprofile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         lname, mobile,address,city,state,position,exp,edu,skills,achievements
      }),
    }).then(function (response) {
      console.log(response);
      if (response.status === 422) {
        window.alert("Registration Not Successfull");
      } else {
        window.alert("Registered Successfully");
        
      }
    });
  };
  
  const call = async () =>{
    try{
        const res = await fetch('/display',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            credentials:"include"
        });
        const data = await res.json();
        setP(data);
        console.log(data)
        
        if(! res.status === 200){ 
            const error = new Error(res.error);
            throw error;
        }
     }catch(err){
      console.log(err);
     }
}

 useEffect(()=>{
     call();
    },[])
  return (
    <div>


<div className="container rounded bg-white mt-5 fontlink">
        <div className="row bg-light p-5 mb-5">
          <div
            className="col-md-5 border-right"
            style={{ marginRight: "10rem" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Personal Details</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name : {p&&p.name}</label>
                
              </div>
              <div className="col-md-6">
                <label className="labels">Surname : {p&&p.lname}</label>
                
              </div>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Mobile Number : {p&&p.mobile}</label>
              
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Email ID : {p&&p.email}</label>
              
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Address : {p&&p.address}</label>
              
            </div>
            <br />
            <div className="row ">
              <div className="col-md-6">
                <label className="labels">City : {p&&p.city}</label>
                
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region : {p&&p.state}</label>
                
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-5 border-right">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Professional Details</h4>
            </div>

            <div className="col-md-12">
              <label className="labels">Current position : {p&&p.position}</label>
              
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Previous Work Experience : {p&&p.exp}</label>
              
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Educational details : {p&&p.edu}</label>
              
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Skills : {p&&p.skills}</label>
              
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Achievements/Accomplishments : {p&&p.achievements}</label>
              
            </div>
            <br />
          </div>
          <br />
         
        </div>
      </div>



      <div className="container rounded bg-white mt-5 fontlink">
        <div className="row bg-light p-5 mb-5">
          <h5>Edit Your Profile</h5>
          <div
            className="col-md-5 border-right"
            style={{ marginRight: "10rem" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Personal Details</h4>
            </div>
            <div className="row mt-2">
              {/* <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="first name"
                  id="name"
                  name="name"
            value={profile.name}
            onChange={handleInputs}
                />
              </div> */}
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="last name"
                  id="lname"
                  name="lname"
            value={profile.lname}
            onChange={handleInputs}
                />
              </div>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter phone number"
                id="mobile"
                name="mobile"
            value={profile.mobile}
            onChange={handleInputs}
              />
            </div>
            <br />
            {/* <div className="col-md-12">
              <label className="labels">Email ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter email id"
                id="email"
                name="email"
            value={profile.email}
            onChange={handleInputs}
              />
            </div> */}
            <br />
            <div className="col-md-12">
              <label className="labels">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter address"
                id="address"
                name="address"
            value={profile.address}
            onChange={handleInputs}
              />
            </div>
            <br />
            <div className="row ">
              <div className="col-md-6">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  id="city"
                  name="city"
            value={profile.city}
            onChange={handleInputs}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="state"
                  id="state"
                  name="state"
            value={profile.state}
            onChange={handleInputs}
                />
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-5 border-right">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Professional Details</h4>
            </div>

            <div className="col-md-12">
              <label className="labels">Current position</label>
              <textarea
                className="form-control"
                id="position"
                rows="3"
                placeholder="example: SDE at Amazon(2017-present)"
                name="position"
            value={profile.position}
            onChange={handleInputs}
              ></textarea>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Previous Work Experience</label>
              <textarea
                className="form-control"
                id="exp"
                rows="3"
                placeholder="example: SDE at TCS(2015-2016)"
                name="exp"
            value={profile.exp}
            onChange={handleInputs}
              ></textarea>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Educational details</label>
              <textarea
                className="form-control"
                name="edu"
                rows="3"
                placeholder="enter your education details"
                id="edu"
            value={profile.edu}
            onChange={handleInputs}
              ></textarea>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Skills</label>
              <textarea
                className="form-control"
                id="skills"
                rows="3"
                placeholder="enter your skills"
                name="skills"
            value={profile.skills}
            onChange={handleInputs}
              ></textarea>
            </div>
            <br />

            <div className="col-md-12">
              <label className="labels">Achievements/Accomplishments</label>
              <textarea
                className="form-control"
                id="achievements"
                rows="3"
                placeholder="enter your achievements"
                name="achievements"
            value={profile.achievements}
            onChange={handleInputs}
              ></textarea>
            </div>
            <br />
          </div>
          <br />
          <div className="text-center mb-2">
            <button className="btn btn-primary profile-button" onClick={PostData} type="button">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}