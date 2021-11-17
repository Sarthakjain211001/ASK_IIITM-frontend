import React,{useState} from "react";

const Newblog = () => {
  const [blog,setBlog] = useState({
    title:"",body:""
  })
  let name,value;
  const handleInputs = (e) =>{
    console.log(e); 
    name = e.target.name;
    value = e.target.value;
    setBlog({...blog,[name]:value});
  }
  const PostData = async(e)=>{
    e.preventDefault();
    const{title,body}=blog;
    fetch('/write',{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title, body
      })
    })
    .then(function(response) {
      console.log(response);
      if (response.status === 422) {
        console.log("error")
      }
      else{
        window.alert("Successful");
      }
  })
  }
  return (
    <div>
      <form className="mx-auto">
        <div className="container shadow p-3 mb-5 bg-white rounded mt-4 pt-4">
          <div class="form-group mt-2 pr-4">
            <label for="exampleFormControlInput1">Blog Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Blog Title"
              name="title"
              value={blog.title}
              onChange={handleInputs}
            />
          </div>
          {/* <div className="form-group my-2 pt-2">
            <label for="exampleFormControlFile1">Blog Media </label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div> */}

          <div className="form-group pt-2 mb-4">
            <label for="exampleFormControlTextarea1">Blog Content</label>
            <textarea
              className="form-control mt-2 pt-2"
              id="exampleFormControlTextarea1"
              rows="15"
              placeholder="Blog Content"
              name="body"
              value={blog.body}
              onChange={handleInputs}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-secondary "onClick={PostData}>
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newblog;










//  <div>
//       <form className="mx-auto">
//         <div className="container shadow p-3 mb-5 bg-white rounded mt-4 pt-4">
//           <div class="form-group mt-2 pr-4">
//             <label for="exampleFormControlInput1">Blog Title</label>
//             <input
//               type="text"
//               class="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Blog Title"
//               name="title"
//               value={blog.title}
//               onChange={handleInputs}
//             />
//           </div>
//           {/* <div className="form-group my-2 pt-2">
//             <label for="exampleFormControlFile1">Blog Media </label>
//             <br />
//             <input
//               type="file"
//               className="form-control-file"
//               id="exampleFormControlFile1"
//             />
//           </div> */}

//           <div className="form-group pt-2 mb-4">
//             <label for="exampleFormControlTextarea1">Blog Content</label>
//             <textarea
//               className="form-control mt-2 pt-2"
//               id="exampleFormControlTextarea1"
//               rows="15"
//               placeholder="Blog Content"
//               name="body"
//               value={blog.body}
//               onChange={handleInputs}
//             ></textarea>
//           </div>
//           <button type="submit" class="btn btn-outline-secondary "onClick={PostData}>
//             Submit Blog
//           </button>
