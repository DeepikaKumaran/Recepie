import React from 'react'
 import CardList from "../../component/Card"
 import { Sidebar } from '../../component/SideBar'
import "./Home.css";
import CalenderNode from '../../component/Calender';
import { Header } from '../../component/Header';

import { WizardNode } from '../../component/WizardList';
export const Home = () => {
  return (

  
    <div >
      <div className='Header-Wrapper'><Header/></div>
      
    <div className="Home"  >
    <Sidebar/>
     <div className='parent'>
       <div className='Head'>
       <WizardNode/>
       <CalenderNode/>
      </div>
        <CardList/>
      </div>  
    

    
</div>
    </div>
    
  )
}
