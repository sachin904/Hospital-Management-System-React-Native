/* eslint-disable react-native/no-inline-styles */
import { Alert, Image,  KeyboardAvoidingView,  Platform,  Pressable,  ScrollView,  StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../../types/data';
import { useNavigation } from '@react-navigation/native';
import TypeSelector from '../../components/TypeSelector';

enum userType{
  Doctor = "Doctor",
  Patient = "Patient",
  Admin = "Admin"
}
const RegisterScreen = () => {

  const theme = useColorScheme() === "dark" ? colors.dark : colors.light;
  const [Fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [Type,setUsertype] = useState(userType.Patient);

  const navigation = useNavigation();
 

  const registerUser = async () => {
    if (!Fullname || !email || !password || !Username || !confirmPassword) {
      Alert.alert("Please fill all the fields ");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match!");
      return;
    }

    try {
      const url = "http://192.168.137.1:3000/Users";
      const existingUsers = await fetch(url);
      const existingUser: data[] = await existingUsers.json();

      const userExists = existingUser.some((u) => u.Username === Username || u.email === email);

      if (userExists) {
        Alert.alert("User already exists!");
        return;
      }

      const bodyData = {
        id: 1,
        Fullname: Fullname,
        email: email,
        Username: Username,
        password: password,
        userType:Type
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if(response.ok){
           Alert.alert("Success", "Registration successful!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login" as never), // navigate after pressing OK
        },
      ]);
      }
    }
    catch (e) {
        console.error(e);
        Alert.alert("Something went wrong!")
    }
  }

  return (

    <SafeAreaView style={styles.container} >
       <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==="android" ? "height" : "padding" }>
         <ScrollView    keyboardShouldPersistTaps="handled"   contentContainerStyle={{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
      <View style={styles.InputBoxContainer}>
        <View style={styles.iconContainer}>
          <Image source={require('../../components/images/Gemini_Generated_Image_hl9cprhl9cprhl9c.png')} style={styles.PlusIcon} />
          <Text style={styles.hospitalText}> Hospital</Text>
        </View>
        <Text style={styles.ManageText}>Management System</Text>
        <Text style={styles.text}>Create New Account</Text>
         <View style={styles.typeContainer}>
                         <TypeSelector text='Doctor' onPress={()=>setUsertype(userType.Doctor)} variant={Type===userType.Doctor ? "Primary":"Secondary"}/>
                         <TypeSelector text="Patient" onPress={()=>setUsertype(userType.Patient)} variant={Type===userType.Patient ? "Primary":"Secondary"}/>
                          <TypeSelector text="Admin" onPress={()=>setUsertype(userType.Admin)} variant={Type===userType.Admin ? "Primary":"Secondary"}/>
                         
                      </View>
        <TextInput textContentType="name" placeholder='Fullname' style={styles.textInput} value={Fullname} onChangeText={(text) => setFullname(text)} />
        <TextInput textContentType="emailAddress" placeholder='Email' style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder='Username' style={styles.textInput} value={Username} onChangeText={(text) => setUsername(text)} />
        <TextInput textContentType="password" placeholder='password' style={styles.textInput} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
        <TextInput textContentType="password" placeholder='confirm password' style={styles.textInput} value={confirmPassword} onChangeText={(text) => setConfirmpassword(text)} secureTextEntry={true} />
        <Pressable  style={styles.registerButton}>
          <Text style={{ color: "#ffffff", fontSize: 18 }} onPress={registerUser}>Register</Text>
        </Pressable>

      </View>

</ScrollView>
</KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
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
  text: {
    fontSize: 18,
    color: "#7191b6",
    marginTop: 10,

  },
  typeContainer:{
    width:'100%',
    height:50,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  }
});