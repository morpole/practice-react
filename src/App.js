// import React from "react";
// import './App.css';
// // import contactList from "./contacts";
import { useState, useEffect } from "react";

// // const Person = ({name, lastName, age, address}) => {
// //   return (
// //     <>
// //     <h2 className="blue">Name: {name}</h2>
// //     <h2>Last Name: {lastName}</h2>
// //     <h2>Address: {age}</h2>
// //     <h2>Age: {address}</h2>
// //     <h2>*********************************</h2>
// //     </>
// //   )
// // }

// // const People = () => {
// //   return(
// //     <>
// //     {contactList.map(contacts =>
// //       <div className='box'>
// //       <h2>Name: {contacts.name}</h2>
// //       <p>Last Name: {contacts.lastname}</p>
// //       <p>Age: {contacts.age}</p>
// //       <p>Address: {contacts.address}</p>
// //       <p>Telephone: {contacts.telephone}</p>
// //       <p>---------------------------------</p>
// //       </div>
// //       )}
// //       </>
// //   )
// // }

// // const BreedList = () => {
// //   const [breeds, setBreeds] = useState([]);
// //   const [selectedBreed, setSelectedBreed] = useState('');
// //   const [breedImages, setBreedImages] = useState([]);

// //   useEffect(() => {
// //     fetch('https://dog.ceo/api/breeds/list/all')
// //       .then(response => response.json())
// //       .then(data => {
// //         const breedNames = Object.keys(data.message);
// //         setBreeds(breedNames);
// //       })
// //       .catch(error => console.error('Error fetching breed list:', error));
// //   }, []);

// //   const handleBreedSelect = breed => {
// //     setSelectedBreed(breed);
// //     fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
// //       .then(response => response.json())
// //       .then(data => {
// //         setBreedImages(data.message);
// //       })
// //       .catch(error => console.error('Error fetching breed images:', error));
// //   };

// //   return (
// //     <div>
// //       <h1>Dog Breed Browser</h1>
// //       <div>
// //         <h2>Select a Breed</h2>
// //         <select value={selectedBreed} onChange={event => handleBreedSelect(event.target.value)}>
// //           <option value="">Select a breed</option>
// //           {breeds.map(breed => (
// //             <option key={breed} value={breed}>
// //               {breed}
// //             </option>
// //           ))}
// //         </select>
// //       </div>
// //       {selectedBreed && (
// //         <div>
// //           <h2>{selectedBreed}</h2>
// //           <div>
// //             {breedImages.map(imageUrl => (
// //               <img style={{ width: "200px", height: "200px" }} key={imageUrl} src={imageUrl} alt={`${selectedBreed} dog`} />
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const UseStateBasics = () => {
// //   const [greeting, setGreeting] = useState('Rando-ness');
// //   const handleChange = () => {
// //    setGreeting(greeting === 'Rando-ness' ? 'I changed it!' : 'randoness');
// //   }
// //   return (
// //     <>
// //     <h1>{greeting}</h1>
// //     <button onClick={handleChange}>Click to Change</button>
// //     </>
// //   )
// // }

// // const UseStateArray = () => {
// //   const [people, setPeople] = useState(contactList);

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

// // second argument

//   const getUsers = async () => {
//     try{
//     const response = await fetch(url);

//     const users = await response.json();
//     setUsers(users);
//   } catch (error){
//     console.error('Error fetching data', error);
//   }
//   };

//   useEffect(() => {
//     getUsers();
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

// const url = "https://api.github.com/users";

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
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     setData(responseData);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// };

//   fetchData();
// }, []);

//   return (
//     <div className="App">
//       <h1>Data from WorldTimeAPI</h1>
//       <pre>{JSON.stringify(data, null, 1)}</pre>

//     </div>
//   );
// };

// const BigFetcher = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const getData = async () => {
//       const url = 'http://worldtimeapi.org/api/timezone/Europe/London';
//       try {
//         const res = await fetch(url);
//         if(!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const resData = await res.json();
//         setData(resData);
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     };
//     getData();
//   }, []);
//   return (
//     <>
//     <h2>World International Time</h2>
//     <pre>{JSON.stringify(data, null , 2)}</pre>
//     </>
//   )
// };




const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'e2446794f4df7f85a6913c2be544f039';
  const city = 'dublin,ie';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      {/*add converter or find out how to display these lines of temp in celcius not kelvin */}
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels like:{weatherData.main.feels_like}°C</p>
      {/* ********************************************************** */}
      <img src={weatherData.weather.icon} alt = 'weather icon'/>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};




export default function App() {
  return (
    <div className='App'>
   <Weather/>
    </div> 
  )
}