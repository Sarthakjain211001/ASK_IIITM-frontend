import React from 'react'
import { Link } from 'react-router-dom'
/*import './OppStyle.css'*/


export default function Opportunities() {
    return (
        <div>
            <h3 className="mx-4 OppPageHeading">Opportunities</h3>
            <div className="container">
                <div className="row">
                    <div className="col-8 ViewOppBlock">
                        <div style={{ /*"border": "3px solid black",*/ /*"marginLeft": "4rem",*/ /*"marginRight": "13rem",*/ "marginTop": "3rem", "marginBottom": "3rem" }}>
                            <div className="card OppCard">
                                <div className="card-body">
                                    <h4>Opportunity title</h4>
                                    <p><b>Author : UserName</b></p>
                                    <p style={{ "margin": "0px" }}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                                    <p style={{ "margin": "0px" }}>Location : Bangalore</p>
                                    <p style={{ "margin": "0px" }}>Experience : 0 yrs</p>
                                </div>
                            </div>
                            <div className="card OppCard">
                                <div className="card-body">
                                    <h4>Opportunity title</h4>
                                    <p><b>Author : UserName</b></p>
                                    <p style={{ "margin": "0px" }}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                                    <p style={{ "margin": "0px" }}>Location : Bangalore</p>
                                    <p style={{ "margin": "0px" }}>Experience : 0 yrs</p>
                                </div>
                            </div>
                            <div className="card OppCard">
                                <div className="card-body">
                                    <h4>Opportunity title</h4>
                                    <p><b>Author : UserName</b></p>
                                    <p style={{ "margin": "0px" }}>Description : ddwfs fse sfea fdsfa svd fasv dvf</p>
                                    <p style={{ "margin": "0px" }}>Location : Bangalore</p>
                                    <p style={{ "margin": "0px" }}>Experience : 0 yrs</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 PostOpportunity" >
                        <div>
                            <h5 className="PostOppHeading" >Write your Opportunity here:</h5>

                            <form style={{ "marginLeft": "3rem" }}>
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter title" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="desc">Description</label>
                                    <textarea class="form-control" id="desc" rows="3"></textarea>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="loc">Location</label>
                                    <input type="text" class="form-control" id="loc" aria-describedby="loc" placeholder="Enter Location" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exp">Experience Required</label>
                                    <input type="text" class="form-control" id="exp" aria-describedby="exp" placeholder="Enter the experience required" />
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary">Post</button>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

