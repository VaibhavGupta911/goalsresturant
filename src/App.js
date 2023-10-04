import './App.css';
import { useState } from 'react';

function GoalForm(props) {
  const [formData, setFormData] = useState(
    {
      goal: "",
      by: ""
    }
  );

  function updateForn(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }/*formdata was empty but on change updates both goal and by by taking name and value*/

  function submitHandle(e) {
    e.preventDefault();
    props.onAdd(formData);
    {/* When change occure in formdata we 
     run onAdd fun to add data to list */}
    setFormData({ goal: "", by: "" })/*Now Reset */
  }
  return (
    <>
      <h1>My little lemon Resturant goals</h1>
      <form onSubmit={submitHandle} >
        <input type='text' name='goal' placeholder='Enter Goal' value={formData.goal} onChange={updateForn} />{/*here again value from formdata is take respectively goal and by */}
        <input type='text' name='by' placeholder='Enter Date by' value={formData.by} onChange={updateForn} />
        <button disabled={formData.goal === "" || formData.by === ""}>ADD</button>
      </form>
    </>
  );
}

function Listofgoal(allGoals) {
  return (<ul>
    {allGoals.allGoals.map((event) => (
      <li key={event.goal}>
        <span>My Goal is to {event.goal}, by {event.by}</span>
      </li>
    )
    )}
  </ul>);
}

export default function App() {
  const [allGoals, newGoaladd] = useState([]);
  function addGoal(goal) {/*Function addGoal only takes a argument goal which used to add on allGoals UseState*/
   /* console.log(allGoals)*/
    newGoaladd([...allGoals, goal]);//Spread ... operator is used to take all previous values
    // console.log(allGoals)
  }
  return (
    <div className="App">
      <GoalForm onAdd={addGoal} /> {/*we are sending function addGoal as a props inside GoalForm */} 
      <Listofgoal allGoals={allGoals} />
    </div>
  );
};
