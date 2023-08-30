
import './App.css';

import data from './Books.js';

import React, { useState, useEffect } from 'react';

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();

        // Extract the breed names from the data object
        const breedNames = Object.keys(data.message);

        setBreeds(breedNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Dog Breeds</h2>
      <ul>
        {breeds.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};




const Counter = () => {
  const [count, setCount] =  useState(0);
  return(
    <>
    <button onClick={()=>setCount((prevCount)=>prevCount + 1)}>+</button>
    <h2>{count}</h2>
    <button onClick={()=>setCount((prevCount)=>prevCount - 1)}>-</button>
    </>
  )
}

const Person = ({name, lastName, age, address}) => {
  return(
    <>
    <h2>Name: {name}</h2>
    <h2>Last Name: {lastName}</h2>
    <h2>Age: {age}</h2>
    <h2>Address: {address}</h2>
    <p>-------------------------------</p>
    </>
  )
}
  
  const BookList = ({ bookski }) => {
    return (
      <div>
        {bookski.map(book => (
          <div key={book.id}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.authoro}</p>
          </div>
        ))}
      </div>
    );
  }; 



function App() {
  return (
    <div className="App">
      <Counter/>
      <Person name='Graham' lastName='Morrison' age={30} address='55 Waveney Rd'/>
      <Person name='John' lastName='Hastings' age={67} address='505 The Tower Ave'/>
      <BookList bookski={data}/>
      <DogBreeds/>
    </div>
  );
}

export default App;
