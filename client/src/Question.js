import React from 'react';
import { Link } from "@reach/router";

function Question(props) {
  const {id, getQuestion} = props;
  const question = getQuestion(id);




  if (question === undefined) {
    return <p>Nothing here</p>;
  } else return(
    <>
      <h3>Question: {question.description}</h3>
      <Link to="/">Go back</Link>      

  </>
  ); 
}

export default Recipe;