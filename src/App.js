import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Aboutus from "./Components/Aboutus";
import Opportunities from "./Components/Opportunities";
import Profile from "./Components/Profile";
import Qna from "./Components/Qna";
import Question_page from "./Components/Question_page";
import GiveAnswer from "./Components/GiveAnswer";
import Write_a_comment from "./Components/Write_a_comment";
import Comments_for_an_answer from "./Components/Comments_for_an_answer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Blogs from "./Components/Blogs";
import Viewblog from "./Components/viewblog";
import WriteACommentOnBlog from "./Components/writeacommentonblog";
import Blogcomments from "./Components/blogcomments";
import Newblog from "./Components/writeanewblog";
import Logout from "./Components/Logout";
import Error_page from "./Components/Error_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Qna />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/viewblog" element={<Viewblog />} />
        <Route exact path="/logout" element={<Logout />}/>
        <Route
          exact
          path="/viewblog/writeacommentonblog"
          element={<Viewblog writeacommentonblog={<WriteACommentOnBlog />} />}
        />
        <Route
          exact
          path="/viewblog/blogcomments"
          element={<Viewblog blogcomments={<Blogcomments />} />}
        />
        <Route exact path="/writeanewblog" element={<Newblog />} />
        <Route exact path="/question" element={<Question_page />} />
        <Route exact path="/opportunities" element={<Opportunities />} />
        <Route exact path="/myprofile" element={<Profile />} />
        <Route exact path="/giveanswer" element={<GiveAnswer />} />
        <Route
          exact
          path="/question/postComment"
          element={<Question_page postComment={<Write_a_comment />} />}
        />
        <Route
          exact
          path="/question/viewComments"
          element={<Question_page viewComments={<Comments_for_an_answer />} />}
        />
        <Route path="*" element={<Error_page/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Qna />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route exact path="/blogs" element={<Blogs />} />
//         <Route exact path="/viewblog" element={<Viewblog />} />
//         <Route
//           exact
//           path="/viewblog/writeacommentonblog"
//           element={<Viewblog writeacommentonblog={<WriteACommentOnBlog />} />}
//         />
//         <Route
//           exact
//           path="/viewblog/blogcomments"
//           element={<Viewblog blogcomments={<Blogcomments />} />}
//         />
//         <Route exact path="/writeanewblog" element={<Newblog />} />
//         <Route exact path="/question" element={<Question_page />} />
//         <Route exact path="/opportunities" element={<Opportunities />} />
//         <Route exact path="/myprofile" element={<Profile />} />
//         <Route exact path="/giveanswer" element={<GiveAnswer />} />
//         <Route
//           exact
//           path="/question/postComment"
//           element={<Question_page postComment={<Write_a_comment />} />}
//         />
//         <Route
//           exact
//           path="/question/viewComments"
//           element={<Question_page viewComments={<Comments_for_an_answer />} />}
//         />
//       </Routes>
//     </Router>
