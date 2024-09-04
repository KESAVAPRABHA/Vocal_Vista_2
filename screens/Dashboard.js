/*import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/me', {
        headers: { Authorization: token }
      });
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  if (!user) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Welcome, {user.username}</Text>
      <Button title="Logout" onPress={logout} />
</View>);
}   */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const Dashboard = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.report}>Last Report: 15th August 2024</Text>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Fluency Progress</Text>
        <LineChart
          data={data}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>
      <br/>
      <Pressable title="Go to shedule" style={styles.button} onPress={()=>{navigation.navigate('Shedule')}}><p>Go to shedule</p></Pressable>
      <View style={{fontFamily:'Arial'}}><b>Take your Sessions Here</b></View>
      <ScrollView style={{height:'50vh'}}>
        <View style={styles.session}><p>session 1<br/><Pressable style={styles.button} title="Click to continue">Click to continue</Pressable></p></View>
        <View style={styles.session}><p>session 2<br/><Pressable style={styles.button} title="Click to continue">Click to continue</Pressable></p></View>
        <View style={styles.session}><p>session 3<br/><Pressable style={styles.button} title="Click to continue">Click to continue</Pressable></p></View>
        <View style={styles.session}><p>session 4<br/><Pressable style={styles.button} title="Click to continue">Click to continue</Pressable></p></View>
        <View style={styles.session}><p>session 1<br/><Pressable style={styles.button} title="Click to continue">Click to continue</Pressable></p></View>
      </ScrollView>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  report: {
    fontSize: 16,
    color: '#666',
  },
  chartContainer: {
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  session:{
    margin:'2%',
    padding:'2%',
    textAlign:'center',
    fontFamily:'Arial',
    backgroundColor:'#FFF',
    borderRadius:'10px'
  },
  button:{
    textAlign:'center',
    margin:'2%',
    backgroundColor:'rgba(0,0,255,0.7)',
    borderRadius:'5px'
  }
});
export default Dashboard;