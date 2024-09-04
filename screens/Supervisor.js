import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Supervisor = ({navigation}) => {

    const [patients, setPatients] = useState([
        { id: '1', name: 'John Doe',supervisor:'Dr.supervisor1'},
        { id: '2', name: 'Jane Roe',supervisor:'Dr.supervisor2'},
        { id: '3', name: 'Alice Brown',supervisor:'Dr.supervisor3'},
      ]);

    const renderItem = ({ item }) => (
        <View style={styles.supervisor}>
          <Text>{item.name}</Text>
          <Text>{item.visit}</Text>
          <Text>{item.supervisor}</Text>
          {/*<Text style={styles.cell}>{item.therapist}</Text>*/}
          <TouchableOpacity onPress={() => handleEdit(item.id)}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      );

    return (
        <View>
            <p style={{fontFamily:'Arial'}}>Patient Details</p>
            <Pressable title="Update Patient Report" style={styles.button} onPress={()=>{navigation.navigate('PatientData')}}>Update patient report</Pressable>
            <Pressable title="Patient Dashboard" styele={styles.button}onPress={()=>{navigation.navigate('PatientDataUpdate')}}>Patient Dashboard</Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    headerRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 8,
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      alignItems: 'center',
    },
    headerCell: {
      flex: 1,
      fontWeight: 'bold',
      color: '#333',
    },
    cell: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    button:{
        textAlign:'center',
        backgroundColor:'#00F',
        padding:'2%',
        fontFamily:'Arial',
        borderRadius:'5px',
        margin:'2%',
        color:'white'
    },
    supervisor:{
        margin:'2%',
        backgroundColor:'#EEE',
        borderRadius:'5px',
        shadowColor:'#999',
        shadowRadius:'10px',
        textAlign:'center',
        fontSize:'120%',
        width:'75vw'
    },
    therepist:{
        height:'50vh',
    }
  });

export default Supervisor;