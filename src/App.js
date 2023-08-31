import React from "react";
import './App.css';
import contactList from "./contacts";


const Person = ({name, lastName, age, address}) => {
  return (
    <>
    <h2 className="blue">Name: {name}</h2>
    <h2>Last Name: {lastName}</h2>
    <h2>Address: {age}</h2>
    <h2>Age: {address}</h2>
    </>
  )
}

const People = () => {
  return(
    <>
    {contactList.map(contacts =>
      <div className='box'>
      <h2>Name: {contacts.name}</h2>
      <p>Last Name: {contacts.lastname}</p>
      <p>Age: {contacts.age}</p>
      <p>Address: {contacts.address}</p>
      <p>Telephone: {contacts.telephone}</p>
      <p>---------------------------------</p>
      </div>
      )}
      </>
  )
}


export default function App() {
  return (
    <div className='App'>
    <People/>
    <Person name='Graham' lastName='Morrison' address='55 Waveney Rd'age={30} />
    </div> 
  )
}