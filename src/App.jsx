// import { getImageUrl } from './utils.js';
// import style from "./index.module.css";

// function Avatar({person, size}) {
//   return (
//     <img
//       className={style.img}
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({children, color="blue"}) {
//     if (color) {
//       return (
//         <div className={style.card} style={{backgroundColor: color}}>
//           {children}
//         </div>
//       )
//     } 
//     return (
//     <div className={style.card}>
//       {children}
//     </div>
//     )
// }

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? name + ' ✅' : name}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }

// export default function Profile() {
//   return (
//     <>
//     <Card color="red">
//       <Avatar
//         person={{ name: 'Lin Lanying', imageId: 'YfeOqp2'}}
//         size={200}
//       />
//     </Card>
//     <Card>
//       <Avatar
//         person={{ name: 'Lin Lanying', imageId: 'OKS67lh'}}
//         size={200}
//       />
//     </Card>
//     <Card>
//       <Avatar
//         person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
//         size={200}
//       />
//     </Card>
//     </>
//   );
// }

// const people = [
//   {
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
//   }, 
//   {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
//   }, 
//   {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji'
//   }, 
//   {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
//     accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//     imageId: 'IOjWm71'
//   }, 
//   {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'white dwarf star mass calculations',
//     imageId: 'lrWQx8l'
//   }
// ];

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// function Button({onClick, children}) {
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   )
// }

// function FirstButton() {

//   let [firstCounter, setFirstCounter] =useState(0);

//   function firstCallback() {
//     setFirstCounter(firstCounter => firstCounter + 1)
//     setFirstCounter(firstCounter => firstCounter + 1)
//     console.log(`${firstCounter}`);
//   }

//   return (
//     <Button onClick={firstCallback}>
//       1
//     </Button>
//   )
// }

// function SecondButton() {

//   let [secondCounter, setSecondCounter] = useState(0);

//   function secondCallback() {
//     setSecondCounter(secondCounter => secondCounter + 1)
//     setSecondCounter(secondCounter => secondCounter + 1)
//     setSecondCounter(42)
//     console.log(`${secondCounter}`);
//   }

//   return (
//     <Button onClick={secondCallback}>
//       2
//     </Button>
//   )
// }

// export default function GroupOfButtons() {
//   return(
//     <>
//       <FirstButton />
//       <SecondButton />
//     </>
//   )
// }


// // =========== ObjectState

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });
//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }
//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={handleEmailChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }

// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           {id: nextId++, name: name},
//           ...artists,
//         ])
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


