import React from "react";
import './App.css';
// import contactList from "./contacts";
import { useState, useEffect } from 'react';






//Doglist Breed Selector from DogAPI


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


//Basic useState example

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

//**Fetch API Example Github Users**

// const url = 'https://api.github.com/users';


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



  
 


  //   const url = 'https://dog.ceo/api/breeds/image/random/5';

  //   const DoggiePics = () => {
  //     const [dogs, setDogs] = useState([]);

  //     useEffect(()=>{
  //       fetch(url)
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(data => {
  //         if(data.status === 'success'){
  //           setDogs(data.message)
  //         } else {
  //           console.error('Failed to fetch dog images');
  //         }
  //       })
  //       .catch(error => {
  //         console.error("Error fetching dog images:", error);
  //       });
  //     },[])

  //    return (
  //         <>
  //           <h3>dog pics displayer </h3>
  //           <ul >
  //             {dogs.map((message, index) => (
  //                 <li  key={index} className="users img">
  //                   <img className='users img' src={message} alt={'Dog'} />
  //                 </li>

  //             ))}
  //           </ul>
  //         </>
  //       );
  
  // }




  //   return (
  //         <>
  //           <h3>dog pics displayer </h3>
  //           <ul >
  //             {dogs.map((message, index) => (
  //                 <li  key={index} className="users img">
  //                   <img className='users img' src={message} alt={'Dog'} />
  //                 </li>

  //             ))}
  //           </ul>
  //         </>
  //       );
  
  // }
  

 

  // const WorldTime = () => {
  //   const [data, setData] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const url = 'http://worldtimeapi.org/api/timezone/Europe/Dublin';
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error(`HTTP Error! Status: ${response.status}`);
    //       }
    //       const responseData = await response.json();
    //       setData(responseData);
    //     } catch (error) {
    //       console.error('An error occurred:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
   

  //   return (
  //     <div className="App">
  //       <h1>Data from WorldTimeAPI</h1>
  //       <pre>{JSON.stringify(data, null, 1)}</pre>
        
  //     </div>
  //   );
  // };
  


  


const BigFetcher = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const url = 'http://worldtimeapi.org/api/timezone/Europe/Dublin';
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(` HTTP error, status: ${response.status}`)
        }
        const responseData = await response.json();
        setData(responseData); 
      } catch (error) {
        console.error('An error occurred', error)
      }
    };
    getData();
  }, []);
  return (
    <>
    <h2>Timezones:</h2>
    <pre>{JSON.stringify(data, null ,2)}</pre>
    </>
  )
}

export default function App() {
  return (
    <div className='App'>
    {/* <WorldTime/> */}
   <BigFetcher/>
    </div> 
  )}