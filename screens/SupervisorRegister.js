import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './LoginPageStyles';

const SupervisorRegister = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        supervisorId: '',
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
        if (formData.name === '' || formData.supervisorId === '' || formData.password === '') {
            setError('All fields are required!');
        } else {
            console.log(formData); // Replace this with your registration logic
            setError('');
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Supervisor Registration</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your name"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Supervisor ID</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your Supervisor ID"
                        value={formData.doctorId}
                        onChangeText={(text) => handleChange('doctorId', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />
                </View>

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SupervisorRegister;
