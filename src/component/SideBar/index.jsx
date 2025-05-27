
import { useState,useEffect } from 'react';
import "./Sidebar.css"
import axios from 'axios';
import Magnifer from '../../Asset/Magnifer.png';  


export const Sidebar = () => {
const [foodSidebar,setFoodsidebar]=useState([]);
const[search ,setSearch] =useState("")
// const foodList=()=>{
// setFoodsidebar(["vegkulcha" ,"nonvegkultcha" ,"kichadi","biriyani" ,"chatorichat" ,"VegStarters"," veg indian main course","tavaParata","vegThali"]);

// }
useEffect(()=>{
axios.get('https://dummyjson.com/recipes')
.then(response => setFoodsidebar (response.data.recipes))
.catch( error=>("Error",error))
},[])

const QueryFilter =foodSidebar.filter((item)=>
  item.name.toLowerCase().includes(search.toLowerCase())
)

return (
<div className='sidebar-wrapper'>

<div className="search-container">
  <input type="text" placeholder="Search Menu" onChange={(e) => setSearch(e.target.value)} ></input>
  <img src ={Magnifer} alt="search" className="search-icon"></img>
</div>
  
        <ul className='sidebar-list'>
           {QueryFilter.map (( Listfood ,index )=>( 
            <li key ={index}>{Listfood.name}</li>
           
           )
           )} 
           {QueryFilter.length === 0 && <li>There is no item</li>}

            </ul> 

    </div>
    
  )
}
