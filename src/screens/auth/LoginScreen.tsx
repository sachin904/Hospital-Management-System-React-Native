/* eslint-disable react-native/no-inline-styles */
import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../theme/colors'
import { Link, useNavigation } from '@react-navigation/native';
import { data } from '../../types/data';
import TypeSelector from '../../components/TypeSelector';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';

type LoginNavProp = NativeStackNavigationProp<AppStackParamList, "Auth">;


enum userType{
  Doctor = "Doctor",
  Patient = "Patient",
  Admin = "Admin"
}


const LoginScreen = () => {
  const theme = useColorScheme() === "dark" ? colors.dark : colors.light;
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Data, setData] = useState<data[]>([]);
   const [Type,setUsertype] = useState(userType.Patient);

  const navigation = useNavigation<LoginNavProp>();



  const getApiData = async () => {
    try {
      const url = "http://172.20.64.101:3000/Users";

      const response = await fetch(url);
      const data1 = await response.json();
      setData(data1);
    }
    catch (e) {
      console.error(e);

    }
  }

  useEffect(() => {
    getApiData();

  }, [])

  console.log();

  const loginUser = async () => {
     if( !Username || !password){
        Alert.alert("Fill all the fields!");
        return;
     }

     const ValidUser =  Data.find( (u)=> u.Username===Username && u.password===password && u.userType===Type);

     if(ValidUser){
      Alert.alert("Logged in");
      navigation.navigate("Patient",{ username: ValidUser.Fullname} );

     }
     else{
      Alert.alert("inavlid credentials!");
      return;
     }
  }



  return (

    <View style={styles.container1}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? "height" : "padding"} >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",

        }} >
          <View style={styles.InputBoxContainer}>
            <View style={styles.iconContainer}>
              <Image source={require('../../components/images/Gemini_Generated_Image_hl9cprhl9cprhl9c.png')} style={styles.PlusIcon} />
              <Text style={styles.hospitalText}> Hospital</Text>
            </View>
            <Text style={styles.ManageText}>Management System</Text>
            <Text style={styles.text1}>Welcome Back!</Text>
               <View style={styles.typeContainer}>
                         <TypeSelector text='Doctor' onPress={()=>setUsertype(userType.Doctor)} variant={Type===userType.Doctor ? "Primary":"Secondary"}/>
                         <TypeSelector text="Patient" onPress={()=>setUsertype(userType.Patient)} variant={Type===userType.Patient ? "Primary":"Secondary"}/>
                          <TypeSelector text="Admin" onPress={()=>setUsertype(userType.Admin)} variant={Type===userType.Admin ? "Primary":"Secondary"}/>
                         
                      </View>
            <TextInput textContentType='name' placeholder='Username' style={styles.textInput} value={Username} onChangeText={(text) => setUsername(text)} />
            <TextInput textContentType="newPassword" placeholder='password' style={styles.textInput} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
              <Text style={styles.text2}>Forgot Password?</Text>
              <Link screen="Register" params={{}} >
                <Text style={styles.text2}>Register New Account</Text>
              </Link>
            </View>
            <Pressable style={styles.registerButton} onPress={loginUser}>
              <Text style={{ color: "#ffffff", fontSize: 18 }}>LOGIN</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container1: {
    flex: 1,

    backgroundColor: "#d7e6f4"
  },
  InputBoxContainer: {
    width: 300,
    backgroundColor: "#fbfbfc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    elevation: 20,
    shadowOffset: {
      width: 10,
      height: 20
    }
  },
  iconContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",

  },
  PlusIcon: {
    height: 50,
    width: 50
  },
  hospitalText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10
  },
  ManageText: {
    fontSize: 25,
    fontWeight: "bold",

  },
  textInput: {
    fontSize: 16,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    width: '100%',

  },
  registerButton: {
    backgroundColor: "#5092d6",
    height: 50,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  text1: {
    fontSize: 18,
    color: "#7191b6",
    marginTop: 10,
    fontWeight: "bold"
  },
  text2: {
    color: "#7191b6",
    marginTop: 5

  },
  typeContainer:{
    width:'100%',
    height:50,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
  typeSelector:{
    height:40,
    width:'30%',
    backgroundColor:"#e4e6eaff",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
    },
    text:{
      fontSize:14,
      fontWeight:"bold",
      
    }
})