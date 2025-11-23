import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DoctorCard from '../../components/DoctorCard'

const MyAppointments = () => {
  return (
    <View>
     <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
           <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
          
           <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
          
           <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
          
    </View>
  )
}

export default MyAppointments

const styles = StyleSheet.create({})