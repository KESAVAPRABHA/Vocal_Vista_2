import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './LoginPageStyles';

const DoctorLogin = ({ navigation }) => {
    const [formData, setFormData] = useState({
        doctorId: '',
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
        if (formData.doctorId === '' || formData.password === '') {
            setError('All fields are required!');
        } else {
            console.log(formData);
            setError('');
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Doctor Login</Text>
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
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={()=>{navigation.navigate('Therepist')}}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DoctorLogin;