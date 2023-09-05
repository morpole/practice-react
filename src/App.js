import React from "react";
import './App.css';
// import contactList from "./contacts";
import { useState, useEffect } from 'react';


// const Person = ({name, lastName, age, address}) => {
//   return (
//     <>
//     <h2 className="blue">Name: {name}</h2>
//     <h2>Last Name: {lastName}</h2>
//     <h2>Address: {age}</h2>
//     <h2>Age: {address}</h2>
//     <h2>*********************************</h2>
//     </>
//   )
// }

// const People = () => {
//   return(
//     <>
//     {contactList.map(contacts =>
//       <div className='box'>
//       <h2>Name: {contacts.name}</h2>
//       <p>Last Name: {contacts.lastname}</p>
//       <p>Age: {contacts.age}</p>
//       <p>Address: {contacts.address}</p>
//       <p>Telephone: {contacts.telephone}</p>
//       <p>---------------------------------</p>
//       </div>
//       )}
//       </>
//   )
// }




// const BreedList = () => {
//   const [breeds, setBreeds] = useState([]);
//   const [selectedBreed, setSelectedBreed] = useState('');
//   const [breedImages, setBreedImages] = useState([]);

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/list/all')
//       .then(response => response.json())
//       .then(data => {
//         const breedNames = Object.keys(data.message);
//         setBreeds(breedNames);
//       })
//       .catch(error => console.error('Error fetching breed list:', error));
//   }, []);

//   const handleBreedSelect = breed => {
//     setSelectedBreed(breed);
//     fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
//       .then(response => response.json())
//       .then(data => {
//         setBreedImages(data.message);
//       })
//       .catch(error => console.error('Error fetching breed images:', error));
//   };

//   return (
//     <div>
//       <h1>Dog Breed Browser</h1>
//       <div>
//         <h2>Select a Breed</h2>
//         <select value={selectedBreed} onChange={event => handleBreedSelect(event.target.value)}>
//           <option value="">Select a breed</option>
//           {breeds.map(breed => (
//             <option key={breed} value={breed}>
//               {breed}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedBreed && (
//         <div>
//           <h2>{selectedBreed}</h2>
//           <div>
//             {breedImages.map(imageUrl => (
//               <img style={{ width: "200px", height: "200px" }} key={imageUrl} src={imageUrl} alt={`${selectedBreed} dog`} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// const UseStateBasics = () => {
//   const [greeting, setGreeting] = useState('Rando-ness');
//   const handleChange = () => {
//    setGreeting(greeting === 'Rando-ness' ? 'I changed it!' : 'randoness');
//   }
//   return (
//     <>
//     <h1>{greeting}</h1>
//     <button onClick={handleChange}>Click to Change</button>
//     </>
//   )
// }

// const UseStateArray = () => {
//   const [people, setPeople] = useState(contactList);

//   const removeItem = (id) => {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name, lastname} = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <h4>{lastname}</h4>
//             <button onClick={() => removeItem(id)}>remove</button>
//           </div>
//         );
//       })}
//       <button className='btn' onClick={() => setPeople([])}>
//         clear items
//       </button>
//     </>
//   );
// };

// const url = 'https://api.github.com/users';

// // second argument

// const UseEffectFetchData = () => {
//   const [users, setUsers] = useState([])

//   const getUsers = async () => {
//     const response = await fetch(url);
//     const users = await response.json()
//     setUsers(users);
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);
//   return (
//     <>
//       <h3>github users display </h3>
//       <ul className='users'>
//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h4>{login}</h4>
//                 <a href={html_url}>profile</a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };


// useEffect(() => {
  //   fetch('http://localhost:8000/blogs')
  //     .then(res => {
    //       return res.json();
    //     })
//     .then(data => {
  //       setBlogs(data);
  //     })
  // }, [])
  
  const url = 'https://dog.ceo/api/breeds/image/random/15';
  
  const DogPics = () => {
    const [dogs, setDogs] = useState([]);
  
    useEffect(() => {
      fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.status === "success") {
        setDogs(data.message)
      } else {
        console.error("Failed to fetch dog images.");
      }
      })
      .catch(error => {
        console.error("Error fetching dog images:", error);
      });
    }, [])
  
    return (
          <>
            <h3>dog pics displayer </h3>
            <ul >
              {dogs.map((message, index) => (
                  <li  key={index}>
                    <img className='users img' src={message} alt={'Dog'} />
                  </li>

              ))}
            </ul>
          </>
        );
  
  }
  
  export default function App() {
  return (
    <div className='App'>
    <DogPics/>
    {/* <UseEffectFetchData/> */}
    {/* <BreedList/> */}
    {/* <People/>
    <Person name='Graham' lastName='Morrison' address='55 Waveney Rd'age={30} />
    <UseStateBasics/>
    <h2>**********************************</h2>
    <UseStateArray/> */}
    </div> 
  )
}