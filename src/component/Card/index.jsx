import { useState, useEffect } from 'react';
// import img1 from '../../Asset/img1.png';
// import img2 from '../../Asset/img2.png';
// import img3 from '../../Asset/img3.png';
// import img4 from '../../Asset/img4.png';
import './CardList.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CardList = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();


  //   useEffect(() => {
  //     // setImages([
  //     //   { image: img1, description: "Quinoa Chicken Salad" },
  //     //   { image: img2, description: "Avocado Toast" },
  //     //   { image: img3, description: "Berry Smoothie" },
  //     //   { image: img4, description: "Grilled Veggie Bowl" }
  //     // ]);   
  // axios.get('https://dummyjson.com/recipes')
  // .then( response =>{

  // })
  // .catch()

  //   }, []);

  
  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')

      .then(response => setImages(response.data.recipes))

      .catch(error => console.log("Error", error));
  }, []);

  const onPress = (id) => {
    navigate('/description', { state: { id } });
  };


  return (
       
  <div>
  <h2>Choose Days & Meals</h2>

  <div className="card-list">
    {images.map((item) => (
      <div key={item.id} className="card" onClick={() => onPress(item.id)}>
        <img src={item.image} alt={item.description} />

        <h3>{item.name.slice(0, 22)}...</h3>

        <div className="para">
          <p>{item.instructions[0].slice(0, 70)}...</p>
        </div>

        <div className="line"></div>

        <div className="price-section">
          <h3>AED 15.30</h3>
          <button className="add-button">ADD</button>
        </div>
      </div>
    ))}
  </div>
</div>

   
  );
};

export default CardList;
