/* eslint-disable react-native/no-inline-styles */
import { Alert, Button, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserIcon from '../../components/icons/UserIcon'
import DropdownComponent from '../../components/DropdownComponent'
import Calendar from '../../components/icons/CalendarIcon'
import DatePicker from '../../components/DatePicker'
import { colors } from '../../theme/colors'
import DateTimePicker from "@react-native-community/datetimepicker";
import ClockIcon from '../../components/icons/ClockIcon'
import { useNavigation } from '@react-navigation/native'



interface TimeType{
  label:string,
  value:string
}
  const Time :TimeType[] = [
    { label: '10:10', value: '1' },
    { label: '11:10', value: '2' },
    { label: '12:10', value: '3' },
    { label: '1:10', value: '4' },
    { label: '2:10', value: '5' },
    { label: '3:10', value: '6' },
    { label: '5:10', value: '7' },
    { label: '6:10', value: '8' },
  ];


const BookAppointments = () => {
  const [time,setTime] = useState("10:00");
    const [date, setDate] = useState("");
    const [show, setShow] = useState(false);
  
    const navigation= useNavigation();
    const confirmBooking = async ()=>{
      Alert.alert("Booking done!")
      navigation.navigate("MyAppointments" as never);
    }
    const handleChange = (event, selectedDate) => {
        if (Platform.OS === "android") setShow(false);
    
        if (selectedDate) {
          const d = selectedDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
          setDate(d);
        }
      };
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.modal}>
          <View style={styles.title}>
             <UserIcon/>
             <Text style={styles.headingText}>Select User</Text>
          </View>
             <DropdownComponent/>
             <View style={styles.line}/>

              <View style={styles.title}>
              <View >
      {/* Input Box */}
      

    </View>
    <View style={styles.title}>
             <Calendar/>
             <Text style={styles.headingText}>Select Date</Text>
          </View>

          </View>
         <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          placeholder="Select Date"
          value={date}
          editable={false}
          style={{
            borderWidth: 1,
            borderColor: "#aaa",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#fff",
          }}
        />
      </TouchableOpacity>

      {/* Calendar Modal */}
      {show && (
  <DateTimePicker
    value={date ? new Date(date) : new Date()}
    mode="date"
    display={Platform.OS === "ios" ? "inline" : "calendar"}
    onChange={handleChange}
  />
)}

           <View style={styles.line}/>

          <View style={styles.title}>
             <ClockIcon/>
             <Text style={styles.headingText}>Select Time</Text>
          </View>
          <View style={styles.slotContainer} >

            {Time.map((item)=>(
                <Pressable key={item.value} style={[styles.box,time === item.label && {backgroundColor:colors.selected}]} onPress={()=>setTime(item.label) }>
            <Text  style={time === item.label && {color:"#fff"}}>{item.label}</Text>
          </Pressable>
            ))}
                     
         
          </View>

         </View>
         <Pressable style={styles.button} onPress={confirmBooking}>
          <Text style={{color:"#fff",fontSize:22, fontWeight:"bold"}}>Confirm Booking</Text>
         </Pressable>
         
    </SafeAreaView>
  )
}

export default BookAppointments

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    backgroundColor:"#e3e4e4ff"
  },
  modal:{
    padding:10,
    width:"100%",
    elevation:20,
    borderRadius:10,
    backgroundColor:"#fbfbfc",
    shadowColor:"#d0babaff",
    shadowOffset:{
      height:20,
      width:10
    }
  },
  title:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:5
  },
   headingText:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:5,
   
   },
   line:{
    height:3,
    width:"100%",
    backgroundColor:"#e3e4e4ff",
    marginVertical:10
   },
   box:{
    height:35,
    width:70,
    margin:5,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#e3e4e4ff",
    borderWidth:2
   },
   slotContainer:{
    flexWrap:"wrap",
    justifyContent:"space-around",
    flexDirection:"row",
   
   },
   button:{
    backgroundColor:colors.selected,
    padding:10,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    marginHorizontal:20,
    borderRadius:10
   }
})