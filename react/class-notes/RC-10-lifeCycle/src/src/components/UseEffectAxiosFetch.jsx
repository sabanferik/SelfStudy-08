import React, { useEffect, useState } from "react";
import axios from "axios"
const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([]);

  //!1.yol fetch then yapısı (chain)
  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => setPeople(data));

  // }, [])

  //!2.yol fetch async await

  // const getData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();

  //   setPeople(data);
  // };
  // useEffect(() => {
  //   getData();

  // }, []);

  //!3.yol axios then (chain)

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((veri) => setPeople(veri.data));
  // }, []);

  //!4.yol axios async await

//   const getData = async () => {
//     const res = await axios("https://jsonplaceholder.typicode.com/users");
    
// setPeople(res.data)
    
//   };


  const getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    
setPeople(res.data)
    
  };
  useEffect(() => {
    getData();

  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ name, username, id, phone }) => {
          return (
            <div key={id} className="col-12 col-sm-6 col-md-4">
              {/* https://www.dicebear.com/styles/avataaars/ */}
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                alt=""
              />
              <h5>{name}</h5>
              <h6>{username} </h6>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectAxiosFetch;








// const getUser = () => {
//   fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => setPeople(data.results[0]))
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
  
//   //! ComponentDidMount
//   const timer = setInterval(getUser, 3000);
//   getUser();

//   //! ComponentWillUnMount
//   return () => {
//     clearInterval(timer);
//   };
// }, []);
  

// // optional chaning
//   return (
    
//     <div className="container text-center mt-4">
//       <div className="row">
//         <h1>
//           {people?.name?.first} {people?.name?.last}
//         </h1>
//         <img src={people?.picture?.large} className="rounded-circle" alt="" />
//         <h3>{people?.email}</h3>

//         <h4>{new Date(people?.dob?.date).toLocaleDateString()}</h4>
//         <h5>{people?.phone}</h5>
//         <h6>{people?.location?.city}</h6>
//       </div>
//     </div>
//   );
// };

// export default UseEffectAxiosFetch;
