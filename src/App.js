import React from "react";
import './App.css';
import contactList from "./contacts";
import { useState, useEffect } from 'react';


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




const BreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedNames = Object.keys(data.message);
        setBreeds(breedNames);
      })
      .catch(error => console.error('Error fetching breed list:', error));
  }, []);

  const handleBreedSelect = breed => {
    setSelectedBreed(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
      .then(response => response.json())
      .then(data => {
        setBreedImages(data.message);
      })
      .catch(error => console.error('Error fetching breed images:', error));
  };

  return (
    <div>
      <h1>Dog Breed Browser</h1>
      <div>
        <h2>Select a Breed</h2>
        <select value={selectedBreed} onChange={event => handleBreedSelect(event.target.value)}>
          <option value="">Select a breed</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      {selectedBreed && (
        <div>
          <h2>{selectedBreed}</h2>
          <div>
            {breedImages.map(imageUrl => (
              <img style={{ width: "200px", height: "200px" }} key={imageUrl} src={imageUrl} alt={`${selectedBreed} dog`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};








export default function App() {
  return (
    <div className='App'>
    <BreedList/>
    <People/>
    <Person name='Graham' lastName='Morrison' address='55 Waveney Rd'age={30} />
    </div> 
  )
}