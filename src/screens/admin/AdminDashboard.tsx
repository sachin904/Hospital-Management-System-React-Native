import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { data } from '../../types/data';

const AdminDashboard = () => {

  const [Data, setData] = useState<data[]>([]);

  const getApiData = async () => {
    try {
      const url = "http://172.20.64.101:3000/Users";
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log("API Data:", json);
    } 
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Users List</Text>

      {/* Map the users data */}
      {Data.length > 0 ? (
        Data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.Fullname}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.username}>Username: {item.Username}</Text>
          </View>
        ))
      ) : (
        <Text style={{ color: "#555" }}>Loading...</Text>
      )}

    </View>
  );
}

export default AdminDashboard;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },

  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  email: {
    fontSize: 14,
    color: "#555"
  },

  username: {
    fontSize: 14,
    color: "#777"
  }
});
