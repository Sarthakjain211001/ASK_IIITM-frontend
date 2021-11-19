import React from 'react'

export default function AskAQues() {

  return (
    <div className="container my-3">
      <div className="mb-3">
        <h2>Write your Question here :</h2>
        <hr />
        <label for="QuesTitle"><h4>Question Title: </h4></label><br />
        <input className="my-3" type="text" id="QuesTitle" style={{ "width": "100%", "height": "2.5rem" }} placeholder="Question Title" />
        <label for="QuesDesc" className="form-label"><h4>Question Description: </h4></label><br />
        <textarea className="form-control my-3" id="QuesDesc" rows="10" placeholder="Question description"></textarea>
        <form>
          <div className="form-group">
            <label for="QuesFile" ><b>Attach File :</b></label><br /><br />
            <input type="file" className="form-control-file" id="QuesFile" />
          </div>
        </form>
        <br/>
        <button type="button" className="btn btn-primary mx-2">Post the Question</button>
      </div>
    </div>
  )
}

