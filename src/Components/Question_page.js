import React from 'react'
import { Link } from 'react-router-dom'

export default function Question_page(props) {

    let btnHandler=()=>{
      window.open("/giveAnswer", '_blank')
     }
   
    return (
        <div className="container mx-8 my-3">
            <div>
                <h3>Question Title</h3>
                <div>
                    <span className="mx-1  badge  bg-success">Tag 1</span>
                    <span className="mx-1  badge  bg-success">Tag 2</span>
                </div>
                <br />
                <h5><b>Author : UserName</b></h5>
                <p>Question description lorem ipsum fgrdb zgnftrgfndrg nddrs bdzrsbgdzr bdzrsbgdzrs grbzgb ggbgzbg</p>
                <button onClick={btnHandler} type="button" class="btn btn-primary mx-2">Give your answer</button>
            </div>

            <hr style={{ "border": "2px solid blue" }} />
            <div>
                <h5>Answer 1</h5>
                <p><b>Author: Username</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Like</button>
                <button type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Dislike</button>
                <Link to="/question/postComment"><button onClick="" type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Comment</button></Link>
                <Link to="/question/viewComments"><button type="button" class="btn btn-sm btn-primary mx-2 viewComments" >View Comments</button></Link>
            </div>
            {/*
            <div>{props.postComment}</div>
            <div>{props.viewComments}</div>
            */}
            <br /> 
            <hr />
            <div>
                <h5>Answer 2</h5>
                <p><b>Author: Username</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Like</button>
                <button type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Dislike</button>
                <Link to="/question/postComment"><button type="button" class="btn btn-sm btn-primary mx-2" style={{ "border-radius": "20px" }}>Comment</button></Link>
                <Link to="/question/viewComments"><button type="button" class="btn btn-sm btn-primary mx-2 viewComments" >View Comments</button></Link>

            </div>
            
             {/* <div>{props.postComment}</div>
            
             <div>{props.viewComments}</div> */}
            <br/>
        </div>
    )
}
