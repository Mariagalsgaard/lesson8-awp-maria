import React, { useState } from "react";

function AddAnswer(props) {
  const [answerDescription, setAnswerDescription] = useState("");
    
  return (
    <> <h2>What is your answer?</h2>
      <input onChange={(event) => setAnswerDescription(event.target.value)} type="text" placeholder="Your answer" />
      <button type="button" onClick={(event) => props.AddAnswer(answerDescription)}>Submit</button>
    </>
  );
}

export default AddAnswer;