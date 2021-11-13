import React from 'react'

export default function GiveAnswer() {
    return (
        <div className="container my-3">
            <div class="mb-3">
  <label for="yourAnswer" class="form-label"><h4>Write your answer here :</h4></label>
  <hr/>
  <textarea class="form-control my-5" id="yourAnswer" rows="10"></textarea>
  <button type="button" class="btn btn-primary mx-2">Post the answer</button>
</div>
        </div>
    )
}
