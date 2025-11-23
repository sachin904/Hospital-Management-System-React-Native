
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
type CalendarIconProps = {
  size?: number,
 
}
const CalendarIcon = (props:CalendarIconProps) => {
  return (
    <>
     <FontAwesomeIcon icon={faCalendar}color='#0c6bfaff' size={props.size}/>
    </>
  )
}

export default CalendarIcon