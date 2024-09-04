import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Receptionist = ({navigation}) => {

    const [patients, setPatients] = useState([
        { id: '1', name: 'John Doe', visit: '2024-09-01', therapist: 'Dr. Smith' },
        { id: '2', name: 'Jane Roe', visit: '2024-09-05', therapist: 'Dr. Johnson' },
        { id: '3', name: 'Alice Brown', visit: '2024-09-10', therapist: 'Dr. White' },
      ]);

    const renderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.visit}</Text>
          <select><option><p>Dr.Smith</p></option><option><p>Dr.Johnson</p></option></select>
          {/*<Text style={styles.cell}>{item.therapist}</Text>*/}
          <TouchableOpacity onPress={() => handleEdit(item.id)}>
            <Icon name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      );

    return (
        <View>
            <Pressable title="Register a student" style={styles.button} onPress={()=>{navigation.navigate('PatientRegister')}}><p>Register a student</p></Pressable>
            <br/>
            <p style={{fontFamily:'Arial'}}>Allocate Therapist</p>
            <ScrollView>
                <View>
                <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Visit</Text>
        <Text style={styles.headerCell}>Therapist</Text>
      </View>
      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
                </View>
            </ScrollView>
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
    }
  });

export default Receptionist;