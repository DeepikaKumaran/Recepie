
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './description.css';

export const Description = () => {
    const [details, setDetails] = useState(null);

    const location = useLocation();
    const { id } = location.state || {};

    console.log(id, "jhguyg");

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
            <p>Meal Type:{details.mealType}</p>
        </div>
    );
};
