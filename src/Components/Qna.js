import React from 'react'
import { Link } from 'react-router-dom'

export default function Qna() {
    return (
        <>
        <div>
            <h3 className="mx-4" style={{"marginTop":"2rem", "marginBottom":"-1rem"}}>Q&A Section</h3>
        </div>


            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {/* <button className="mx-2"><img src="upvote.png" width="20" height="20"></img></button> */}
                 <span>   <h4 style={{"display" : "inline"}}><b> Question title </b></h4> 
                        <p  className="mx-1 badge  bg-success">Tag 1</p>
                        <p className="mx-1 badge  bg-success">Tag 2</p>
                       
                         <p >Author : UserName</p>  
                          </span>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            <br/><br/>
                            <Link
                        className="btn btn-sm btn-primary"
                        role="button"
                        to="question"
                      >
                       Visit
                      </Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <span>   <h4 style={{"display" : "inline"}}><b> Question title </b></h4> 
                        <p  className="mx-1 badge  bg-success">Tag 1</p>
                        <p className="mx-1 badge  bg-success">Tag 2</p>
                       
                         <p >Author : UserName</p>  
                          </span>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            <br/><br/>
                            <Link
                        className="btn btn-sm btn-primary"
                        role="button"
                        to="question"
                      >
                        Visit
                      </Link>
                        </div>
                    </div>
                </div>
                </div>
</>
    )
}
