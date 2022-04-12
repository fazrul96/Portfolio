import React from 'react'
import { Calendar } from "antd";
import './calendar.css';

function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  
const Calendar = () => {
  return (
    <calendar>
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    </calendar>
  )
}

export default Calendar