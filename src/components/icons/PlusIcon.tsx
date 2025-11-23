import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const PlusIcon = (size:number) => {
    
  return (
    <>
     <FontAwesomeIcon icon={faPlus}  color='#3877e4ff' size={size}/>
    </>
  )
}

export default PlusIcon