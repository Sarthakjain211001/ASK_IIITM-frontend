import React from 'react'

export default function GiveAnswer() {
    return (
        <div className="container my-3">
            <div class="mb-3">
  <label for="yourAnswer" class="form-label"><h4>Write your answer here :</h4></label>
  <hr/>
  <textarea class="form-control my-5" id="yourAnswer" rows="10"></textarea>
  <form>
  <div class="form-group">
    <label for="exampleFormControlFile1" style={{"":""}}><b>Attach File :</b></label><br/><br/>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
<br/>
  <button type="button" class="btn btn-primary mx-2">Post the answer</button>
</div>
        </div>
    )
}
