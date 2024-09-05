import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './LoginPageStyles'; // Assuming you have styles in place
import axios from 'axios';

const DoctorRegister = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        doctorId: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (
            formData.name === '' ||
            formData.doctorId === '' ||
            formData.password === '' 
        ) {
            setError('All fields are required!');
        } else if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
        } else {
            setError('');
            try {
                const response = await axios.post('http://localhost:5000/doctor/auth/register', formData);
                console.log(response.data);
                setSuccess('Registration Successful!');
                navigation.navigate('DoctorLogin');
            } catch (err) {
                console.error(err.message);
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Doctor Registration</Text>
                
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your name"
                        value={formData.name} onChangeText={(text) => handleChange('name', text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your email" 
                        value={formData.email} onChangeText={(text) => handleChange('email', text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Doctor ID</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your Doctor ID" 
                        value={formData.doctorId} onChangeText={(text) => handleChange('doctorId', text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your password" 
                        secureTextEntry={true} value={formData.password} 
                        onChangeText={(text) => handleChange('password', text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Confirm Password</Text>
                    <TextInput style={styles.formInput} placeholder="Confirm your password" 
                        secureTextEntry={true} value={formData.confirmPassword} 
                        onChangeText={(text) => handleChange('confirmPassword', text)} />
                </View>

                {error ? <Text style={styles.error}>{error}</Text> : null}
                {success ? <Text style={styles.success}>{success}</Text> : null}

                <Pressable style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default DoctorRegister;
