import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/colors'

import NavigationCard from '../../components/NavigationCard'
import StarIcon from '../../components/icons/StarIcon'
import { useNavigation } from '@react-navigation/native'


const doctorsData = [
  { id:1,name: 'Dr. Anya Sharma', speciality: 'Cardiology', rating: 4.9 },
  { id:2,name: 'Dr. David Chen', speciality: 'Pediatrics', rating: 4.8 },
  { id:3,name: 'Dr. Maria Rodriguez', speciality: 'Dermatology', rating: 4.7 },
  { id:4,name: 'Dr. James Wilson', speciality: 'Orthopedics', rating: 4.5 },
  { id:5,name: 'Dr. Fatima Al-Fayed', speciality: 'Neurology', rating: 5.0 },
  { id:6,name: 'Dr. Kenji Tanaka', speciality: 'Ophthalmology', rating: 4.6 },
  { id:7,name: 'Dr. Sarah Jenkins', speciality: 'General Surgery', rating: 4.4 },
  { id:8,name: 'Dr. Michael Osei', speciality: 'Psychiatry', rating: 4.8 },
];

interface HomeProps {
  username: string;
}

const PatientHomeContent = ({ username }: HomeProps) => {
    
  const navigation = useNavigation();
    
  return (
   <SafeAreaView style={styles.container}>
       <View style={styles.Box1}>
         <View>
            <Text style={styles.text1}>Hello,</Text>
         <Text style={styles.text1}>{username}</Text>
         </View>
          <Image source={require("../../components/images/person1.png")} style={styles.Image} resizeMode="cover" resizeMethod="auto" />
       </View>
       <View style={styles.box2}>
          <NavigationCard icon='calendarPlusIcon' text1="Book" text2="Appointment" onPress={()=>navigation.navigate("BookAppointments" as never)} />
          <NavigationCard icon='Page' text1="My" text2="Appointment"   onPress={()=>navigation.navigate("MyAppointments" as never)}  />
          <NavigationCard icon='calendarPlusIcon' text1="My" text2="Profile"  onPress={()=>navigation.navigate("PatientProfile" as never)}   />
       </View>
       <View style={styles.line}/>
       <View style={styles.box3}>
        <Text style={styles.heading}>Featured Doctors</Text>
          <ScrollView style={styles.DoctorContainer} horizontal={true}>
            {
              doctorsData.map((item)=>(
<View key={item.id} style={styles.DoctorCard}>
                 
                    <Image style={styles.DoctorImage} source={require("../../components/images/image.png")}/>
                 
                  <Text style={{fontSize:16, fontWeight:"bold"}}>{item.name}</Text>
                  <Text style={{fontSize:14,fontWeight:"400"}}>{item.speciality}</Text>
                  
                  <View style={{alignContent:"center"}}>
                     <Text ><StarIcon/> {item.rating} Stars</Text>
                  </View>
                 
             </View>
              ))
            }
             

             
          </ScrollView>
          
       </View>
       
       
   </SafeAreaView>
  )
}

export default PatientHomeContent

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.selected
    },
    Box1:{
        
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
        box2:{
       
        backgroundColor:"#fff",
    borderTopRightRadius:30,
 borderTopLeftRadius:30,
padding:20,
flexDirection:"row",
justifyContent:"space-between"}
,
  box3:{
       height:"100%",
        backgroundColor:"#fbf7f7ff",
        padding:10,
        marginBottom:0
      },
        

  
 Image:{
   height:50,
    width:50,
    borderRadius:100/2,
  

  },
  text1:{
    fontSize:40,
    color:"#fff"
  },
  line:{
    height:3,
    width:"100%",
    backgroundColor:"#e3e4e4ff",
    
   },
   heading:{
    fontSize:25,
    fontWeight:"bold"
   },
   DoctorContainer:{
    
   },
   DoctorImage:{
    height:"70%",
    width:"100%",
    
   },
   DoctorCard:{
    height:250,
    width:150,
    backgroundColor:"#fff",
    padding:10,
    elevation:20,
    shadowColor:"#020202",
    borderRadius:15,
    marginHorizontal:5,
    shadowOffset:{
      height:20,
      width:10,

    }
   }
})