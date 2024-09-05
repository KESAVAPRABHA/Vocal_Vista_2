import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './LoginPageStyles'; // Assuming you have styles in place
import axios from 'axios';

const ReceptionistRegister = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        receptionistId: '',
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
            formData.receptionistId === '' ||
            formData.password === ''
        ) {
            setError('All fields are required!');
        } else if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
        } else {
            setError('');
            try {
                const response = await axios.post('http://localhost:5000/receptionist/auth/register', formData);
                console.log(response.data);
                setSuccess('Registration Successful!');
                navigation.navigate('ReceptionistLogin');
            } catch (err) {
                console.error(err.message);
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Receptionist Registration</Text>
                
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
                    <Text style={styles.formLabel}>Receptionist ID</Text>
                    <TextInput style={styles.formInput} placeholder="Enter your Receptionist ID" 
                        value={formData.receptionistId} onChangeText={(text) => handleChange('receptionistId', text)} />
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

export default ReceptionistRegister;
