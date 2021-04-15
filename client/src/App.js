import React, {useEffect, useState} from "react";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import { Router } from '@reach/router'
import Question from './Question';
import Questions from './Questions';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>My kind of stackoverflow :-)</h1> 

      <AddQuestion />
      <AddAnswer />
{/*
      <Router>
        <Questions path="/" data={questions} addQuestion={addQuestion}> </Questions>
        <Question path="/question/:id" getQuestion={getQuestion} ></Question>
      </Router> 

*/}
    </>
  );
}



export default App;
