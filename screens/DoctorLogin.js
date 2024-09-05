import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './LoginPageStyles';
import axios from 'axios';

const DoctorLogin = ({ navigation }) => {
    const [formData, setFormData] = useState({
        DoctorId: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (formData.DoctorId === '' || formData.password === '') {
            setError('All fields are required!');
        } else {
            console.log(formData);
            setError('');
            try {
                const response = await axios.post('http://localhost:5000/doctor/auth/login', formData);
                console.log(response.data);
                console.log("LoggedIn Successfully");
                navigation.navigate('Therepist');
            } catch (err) {
                console.error(err.message);
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Doctor Login</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Doctor ID</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your Doctor ID" 
                        value={formData.DoctorId} onChangeText={(text) => handleChange('DoctorId', text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your password" 
                        secureTextEntry={true} value={formData.password} 
                        onChangeText={(text) => handleChange('password', text)} />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DoctorLogin;