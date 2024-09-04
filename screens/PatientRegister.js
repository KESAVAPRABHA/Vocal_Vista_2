import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import styles from './LoginPageStyles';

const PatientRegister = ({navigation}) => {
    const [formData, setFormData] = useState({
        name: '',
        patientId: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (formData.name === '' || formData.patientId === '' || formData.password === '') {
            setError('All fields are required!');
        } else {
            console.log(formData);
            setError('');
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Register a patient</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput style={styles.formInput} value={formData.name} onChangeText={(value) => handleChange('name', value)} 
                        placeholder="Enter your name" />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Phone Number</Text>
                    <TextInput style={styles.formInput} value={formData.patientId}
                        onChangeText={(value) => handleChange('patientId', value)} placeholder="Enter your Patient ID" />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} value={formData.password}  onChangeText={(value) => handleChange('password', value)} 
                        placeholder="Enter your password" secureTextEntry />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={()=>{navigation.navigate('Receptionist')}}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                <View style={styles.tNavigateLink}>
                   {/*} <Pressable onPress={() => {navigation.navigate('DoctorLogin')}}>
                        <Text style={styles.linkText}>Doctor Login!</Text>
                    </Pressable>*/}
                    {/*<Pressable onPress={() => {navigation.navigate("Dashboard")}}>
                        <Text style={styles.linkText}>Login</Text>
                    </Pressable>*/}
                </View>
            </View>
        </View>
    );
};

export default PatientRegister;