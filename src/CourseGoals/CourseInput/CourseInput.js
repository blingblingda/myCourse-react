import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import "./CourseInput.css";

const CourseGoal = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          placeholder="Learn React!"
          onChange={goalInputChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoal;
