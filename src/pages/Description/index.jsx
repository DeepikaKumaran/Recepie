
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './description.css';

export const Description = () => {
    const [details, setDetails] = useState(null);
    const [count,setCount] =useState(0)
    const location = useLocation();
    const { id } = location.state || {};

    console.log(id, "jhguyg");

// const countClickplus=()=>{
//     setCount(count++)
// }
// const countClickminus=()=>{
//     setCount(count--)
// }
    useEffect(() => {
        if (id) {
            axios
                .get(`https://dummyjson.com/recipes/${id}`)
                .then((response) => setDetails(response.data))
                .catch((error) => console.log("error", error));
        }
    }, [id]);

    if (!details) {
        return <p>Loading...</p>;  
    }

    return (
        <div className="details">
           < h1> Recepie Details</h1>
            <div className="image1"><img  src={details.image} alt={details.name} /></div>
            <h1>{details.name}</h1>
            <p>{details.instructions}</p> 
         <div className="button-details">
            <button onClick={() =>setCount(count+1)}>+</button>
            {<h1>{count}</h1>}
        <button onClick={ ()=>setCount(count-1)}>-</button>

         </div> 
        </div>
    );
};
