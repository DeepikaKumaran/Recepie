import {useState} from 'react'
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calender.css"



 const CalenderNode = () => {
 const [date ,setDate] =useState(new Date())


 const onClick=()=>{
        setDate(new Date())

    }
  return (
    <div className="calen">
<Calender onClickDay ={onClick}/>

    </div>
  )
}

export default CalenderNode;