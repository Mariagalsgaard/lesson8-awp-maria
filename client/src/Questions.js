import { Link } from '@reach/router';
import React from 'react';
import AddQuestion from './addQuestion'


function Questions(props) {
  const {data, addQuestion} = props;
  //const filterRecipes = data.filter(recipes => recipes.ingredients >= data.ingredients);
  //<Link to={`/recipe/with/${filterRecipes}`}></Link>

    return (
<>
  <h3>See all the questions here:</h3>
      <ol>
        {
        data.map( question => <li>
          <Link to={`/question/${question.id}`}>{question.description}</Link>
          
          </li> )
        }
      </ol>
    <AddQuestion addQuestion={addQuestion}/>
    </>
    );
  }
  
  export default Questions;