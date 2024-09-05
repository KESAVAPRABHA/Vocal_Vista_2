import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import styles from './LoginPageStyles';

const PatientLogin = ({navigation}) => {
    const [formData, setFormData] = useState({
        name: '',
        patientId: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (formData.name === '' || formData.patientId === '' || formData.password === '') {
            setError('All fields are required!');
        } else {
            setError('');
            setLoading(true);
            try {
                const response = await axios.post('http://localhost:5000/api/auth/login', formData);
                console.log(response.data);
                console.log("LoggedIn Successfully");
                navigation.navigate('Dashboard');
            } catch (err) {
                console.error(err.message);
                setError('Login failed. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginMain}>
                <Text style={styles.loginTitle}>Login</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput
                        style={styles.formInput}
                        value={formData.name}
                        onChangeText={(value) => handleChange('name', value)}
                        placeholder="Enter your name"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Patient ID</Text>
                    <TextInput
                        style={styles.formInput}
                        value={formData.patientId}
                        onChangeText={(value) => handleChange('patientId', value)}
                        placeholder="Enter your Patient ID"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                        style={styles.formInput}
                        value={formData.password}
                        onChangeText={(value) => handleChange('password', value)}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
                    <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
                </Pressable>

                <View style={styles.tNavigateLink}>
                    <Pressable onPress={() => { navigation.navigate('DoctorLogin') }}>
                        <Text style={styles.linkText}>Doctor Login!</Text>
                    </Pressable>
                    <Pressable onPress={() => {navigation.navigate('ReceptionistLogin')}}>
                        <Text style={styles.linkText}>Receptionist Login!</Text>
                    </Pressable>
                    <br/>
                    <Pressable onPress={() => { navigation.navigate('SupervisorLogin') }}>
                        <Text style={styles.linkText}>Supervisor Login!</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default PatientLogin;
/*import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import styles from './LoginPageStyles';

const PatientLogin = ({navigation}) => {
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
                <Text style={styles.loginTitle}>Login</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput style={styles.formInput} value={formData.name} onChangeText={(value) => handleChange('name', value)} 
                        placeholder="Enter your name" />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Patient ID</Text>
                    <TextInput style={styles.formInput} value={formData.patientId}
                        onChangeText={(value) => handleChange('patientId', value)} placeholder="Enter your Patient ID" />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} value={formData.password}  onChangeText={(value) => handleChange('password', value)} 
                        placeholder="Enter your password" secureTextEntry />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <Pressable style={styles.loginButton} onPress={()=>{navigation.navigate('Dashboard')}}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <View style={styles.tNavigateLink}>
                    <Pressable onPress={() => {navigation.navigate('DoctorLogin')}}>
                        <Text style={styles.linkText}>Doctor Login!</Text>
                    </Pressable>
                    <Pressable onPress={() => {navigation.navigate('ReceptionistLogin')}}>
                        <Text style={styles.linkText}>Receptionist Login!</Text>
                    </Pressable>
                    <br/>
                    
                    {/*<Pressable onPress={() => {navigation.navigate("Dashboard")}}>
                        <Text style={styles.linkText}>Login</Text>
                    </Pressable>                    }
                    <Pressable onPress={() => {navigation.navigate('SupervisorLogin')}}>
                        <Text style={styles.linkText}>Supervisor Login!</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default PatientLogin;*/