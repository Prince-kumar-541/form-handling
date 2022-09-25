import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import React from "react";
import './App.css';
import PersonData from "./PersonData";


function App() {

  const [personInfo, setPersonInfo] = useState('');

  const personData = (person) => {
    const person1 = {
      ...person,
      id: Math.random(),
    }
    console.log(person1);

    setPersonInfo(person1);
  }
  return (
    
  );
}

export default App;
