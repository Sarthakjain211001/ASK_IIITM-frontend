import React from 'react'

export default function GiveAnswer() {
    return (
        <div className="container my-3">
            <div className="mb-3">
  <label for="yourAnswer" className="form-label"><h4>Write your answer here :</h4></label>
  <hr/>
  <textarea className="form-control my-5" id="yourAnswer" rows="10"></textarea>
  <form>
  <div className="form-group">
    <label for="exampleFormControlFile1" style={{"":""}}><b>Attach File :</b></label><br/><br/>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
<br/>
  <button type="button" className="btn btn-primary mx-2">Post the answer</button>
</div>
        </div>
    )
}
