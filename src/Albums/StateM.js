import { useState, useEffect } from "react";

const StateM = () => {
    const [data, setData] = useState({ name: "rk", age: 24, Salary: 2000 });

    const updateStateObj = (num) => {
        // let newdata={name:"ramakrishna",age:24,Salary:2000};
        // setData(newdata);

        setData(prev => {
            return {
                ...prev, age: prev.age = num
            }
        })
    }

    return <>

        <p>Age:{data.age}</p>
        <button onClick={updateStateObj}>Update</button>
    </>
};

export default StateM;