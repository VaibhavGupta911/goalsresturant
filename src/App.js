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
  }

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
        <input type='text' name='goal' placeholder='Enter Goal' value={formData.goal} onChange={updateForn} />
        <input type='text' name='by' placeholder='Enter Date by' value={formData.by} onChange={updateForn} />
        <button disabled={formData.goal==""||formData.by==""}>ADD</button>
      </form>
    </>
  );
}

function Listofgoal(props) {
  return (<ul>
    {props.allGoals.map((event) => (
      <li key={event.goal}>
        <span>My Goal is to {event.goal}, by {event.by}</span>
      </li>
    )
    )}
  </ul>);
}

export default function App() {
  const [allGoals, newGoaladd] = useState([]);
  function addGoal(goal) { newGoaladd([...allGoals, goal]); }
  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <Listofgoal allGoals={allGoals} />
    </div>
  );
};
