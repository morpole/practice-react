import React from "react";
import './App.css';


const Person = ({name, lastName, age, address}) => {
  return (
    <>
    <h2>Name: {name}</h2>
    <h2>Last Name: {lastName}</h2>
    <h2>Address: {age}</h2>
    <h2>Age: {address}</h2>
    </>
  )
}

export default function App() {
  return (
    <Person className='App' name='Graham' lastName='Morrison' address='55 Waveney Rd'age={30} />
  )
}