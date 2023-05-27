import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import Form from "./form/Form";
import {Route,Routes, useNavigate} from 'react-router-dom'
const gettingData = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    return userData;
  } else {
    return [];
  }
};
function App() {
  const [data, setData] = useState(gettingData());
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [edit, setEdit] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const id = new Date();
  const addHandler = (e) => {
    e.preventDefault();

    const userData = {
      id: id.toISOString(),
      name,
      number,
    };
    setData([...data, userData]);
    setName("");
    setNumber("");
  };

  const updatedHanlder = (e) => {
    const updatedData = data.map((each) => {
      if (edit === each) {
        return {
          id: each.id,
          name,
          number,
        };
      } else {
        return each;
      }
    });
    setData(updatedData);
    setName("");
    setNumber("");
    setEdit(null);
    setShow(false);
    navigate("/table");

  };

  const deleteHandler = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  const editHandler = (e) => {
    setName(e.name);
    setNumber(e.number);
    setEdit(e);
    setShow(true);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              numberHandler={numberHandler}
              nameHandler={nameHandler}
              name={name}
              addHandler={addHandler}
              show={show}
              updatedHanlder={updatedHanlder}
            />
          }
        />

        <Route
          path="/table"
          element={
            <Table
              data={data}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
