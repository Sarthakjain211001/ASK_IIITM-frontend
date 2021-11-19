import React from 'react'
import Write_a_comment from './Write_a_comment'
import Comments_for_an_answer from './Comments_for_an_answer'
import { Link } from 'react-router-dom'

export default function Question_page(props) {
     
    let LikeToggle = true;
    let LiketoggleFun=()=>{
       LikeToggle ? LikeHandler() : ClearLikeHandler()
       LikeToggle = !LikeToggle;
    }
    let DislikeToggle = true;
    let DisliketoggleFun=()=>{
       DislikeToggle ? DislikeHandler() : ClearDislikeHandler()
       DislikeToggle = !DislikeToggle;
    }
    let btnHandler=()=>{
        window.open("/giveAnswer", '_blank')
       }
       let LikeHandler=()=>{
        document.getElementById("LikeID").className="bi bi-hand-thumbs-up-fill";
        document.getElementById("DislikeID").className="bi bi-hand-thumbs-down";
        document.getElementById("LikeID").style="focus: none";
       }
       let ClearLikeHandler=()=>{
        document.getElementById("LikeID").className="bi bi-hand-thumbs-up";
        document.getElementById("DislikeID").className="bi bi-hand-thumbs-down";
       }
       let DislikeHandler=()=>{
        document.getElementById("LikeID").className="bi bi-hand-thumbs-up";
        document.getElementById("DislikeID").className="bi bi-hand-thumbs-down-fill";
       }
       let ClearDislikeHandler=()=>{
        document.getElementById("LikeID").className="bi bi-hand-thumbs-up";
        document.getElementById("DislikeID").className="bi bi-hand-thumbs-down";
       }
    return (
        <div className="container mx-8 my-3">
            <div>
                <h3 style={{"marginTop":"2rem"}}>Question Title</h3>
                <div>
                    <span className="mx-1  badge  bg-success">Tag 1</span>
                    <span className="mx-1  badge  bg-success">Tag 2</span>
                </div>
                <br />
                <h5><b>Author : UserName</b></h5>
                <p>Question description lorem ipsum fgrdb zgnftrgfndrg nddrs bdzrsbgdzr bdzrsbgdzrs grbzgb ggbgzbg</p>
                <button onClick={btnHandler} type="button" className="btn btn-primary mx-2">Give your answer</button>
            </div>

            <hr style={{ "border": "2px solid blue" }} />
            <div>
                <h5>Answer 1</h5>
                <p><b>Author: Username</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button type="button" onClick={LiketoggleFun} className="btn btn-sm mx-2 Like"><i id="LikeID" className="bi bi-hand-thumbs-up"></i>Like</button>
                <button type="button" onClick={DisliketoggleFun} className="btn btn-sm  mx-2 Dislike"><i id="DislikeID" className="bi bi-hand-thumbs-down"></i>Dislike</button>
                <Link to="/question/postComment"><button type="button" className="btn btn-sm btn-primary mx-2 Comment" style={{ "border-radius": "20px",}}><i className="bi bi-chat-left"></i> Write Comment</button></Link>
                <Link to="/question/viewComments"><button type="button" className="btn btn-sm btn-primary mx-2 viewComments" >View Comments</button></Link>
            </div>
            {/*<Write_a_comment/>*/}
            <div>{props.postComment}</div>
            {/*Include <Comments_for_an_answer/> here*/}
            <div>{props.viewComments}</div>
            <br />
            <hr />
            <div>
                <h5>Answer 2</h5>
                <p><b>Author: Username</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type="button" onClick={LiketoggleFun}  className="btn btn-sm  mx-2 Like"><span className="LikeIcon"><i className="bi bi-hand-thumbs-up"></i></span>Like</button>
                <button type="button" onClick={DisliketoggleFun}  className="btn btn-sm  mx-2 Dislike"><i className="bi bi-hand-thumbs-down"></i>Dislike</button>
                <Link to="/question/postComment"><button type="button" className="btn btn-sm btn-primary mx-2 Comment" style={{ "border-radius": "20px" }}><i className="bi bi-chat-left"></i> Write Comment</button></Link>
                <Link to="/question/viewComments"><button type="button" className="btn btn-sm btn-primary mx-2 viewComments" >View Comments</button></Link>

            </div>
             {/* <Write_a_comment/> */}
             <div>{props.postComment}</div>
             {/* <Comments_for_an_answer/>  */}
             <div>{props.viewComments}</div>
            <br/>
        </div>
    )
}
