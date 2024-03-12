import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function MockApi(props) {

    const [userData, setUserData] = useState([]);

    const addAndFetch = async () => {
        // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const newRes = await res.json();

        // console.log(newRes, "...resfsdf");
        setUserData(newRes);
    }
    const str = "hello friends";
    const arr = str.split(" ");
   
   const newArr = arr.map(a => {
        let remain = a.slice(1)
        return a.charAt(0).toUpperCase() + remain
    })
    // console.log(newArr.join(" "), "array");
   

    useEffect(() => {
        addAndFetch();
    }, [])

    return (
        <div>
            UserData
            {userData?.map(d => <ul id="list">
                <li> {d.name}</li>
            </ul>)}
        </div>
    )
}
export default MockApi;