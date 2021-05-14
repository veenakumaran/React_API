import axios from 'axios';
import React, { useEffect,useState } from 'react';


//****************FETCHING DATA IN FUNCTIONAL COMPONENT*****************//

// *********************using XMLHttpRequest*****************
// const Fetchdata = () => {

//     const [data, setdata] = useState([]);

//     useEffect(() => {

//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
//     request.send()
    
//     request.onload = function()
//     {
//         var response = request.response
//         var parsedData = JSON.parse(response)
//         setdata(parsedData)
//         // console.log(parsedData)
//     }

//     }, []);


//     return (
//         <div>
//             <p> {data.map(item => <li> {item.title} </li>) }</p>
//         </div>
//     );
// }

// *********************using AJAX*****************

// *********************using fetch*****************
// const Fetchdata = () => {

//     const [data, setdata] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//       .then(data => setdata(data))
//     }, []);


//     return (
//         <div>
//             <p> {data.map(item => <li> {item.id} : {item.title} </li>) }</p>
//         </div>
//     );
// }

// ********************using axios*******************
const Fetchdata = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => setdata(response.data))
    },[]);


    return (
        <div>
            <p> {data.map(item => <li> {item.id} : {item.body} </li>) }</p>
        </div>
    );
}


export default Fetchdata;
