import React from "react";
import { Link } from "react-router-dom";

const Form = ({
  name,
  number,
  addHandler,
  updatedHanlder,
  nameHandler,
  numberHandler,
  show,
}) => {
  return (
    <>
      <form>
        <input value={name} onChange={nameHandler} type="text" />
        <br />
        <input value={number} onChange={numberHandler} type="number" />
        <br />

        {!show ? (
          <button onClick={addHandler}>Add</button>
        ) : (
          <button onClick={updatedHanlder}>Update</button>
        )}
      </form>
    </>
  );
};

export default Form;
