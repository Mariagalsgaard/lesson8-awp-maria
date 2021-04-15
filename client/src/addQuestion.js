import React, { useState } from "react";

function AddQuestion(props) {
  const [description, setDescription] = useState("");
    
  return (
    <> <h2>What is your question?</h2>
      <input onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Your question"/>
      <button type="button" onClick={(event) => props.AddQuestion(description)}>Submit</button>
    </>
  );
}

export default AddQuestion;