import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {TextInput, Text, RadioButton} from 'react-native-paper';

function Register(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    const formData = {
      name,
      age,
      gender,
      occupation,
      email,
      password,
    };
    console.log('data', formData);
  };

  const clearRegisterState = () => {
    setName('');
    setAge('');
    setGender(null);
    setOccupation('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text variant="headlineMedium">Enter all your details here.</Text>
      <TextInput
        mode="outlined"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        mode="outlined"
        label="Age"
        placeholder="Enter your age"
        value={age}
        onChangeText={value => setAge(value)}
      />
      <Text>Gender</Text>
      <RadioButton.Group
        onValueChange={newValue => setGender(newValue)}
        value={gender}>
        <Text>Male</Text>
        <RadioButton value="male" color="blue" />
        <Text>Female</Text>
        <RadioButton value="female" color="blue" />
        <Text>Others</Text>
        <RadioButton value="others" color="blue" />
      </RadioButton.Group>
      <TextInput
        mode="outlined"
        label="Occupation"
        placeholder="Enter your occupation"
        value={occupation}
        onChangeText={value => setOccupation(value)}
      />
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => register()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => clearRegisterState()}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  registerButton: {
    width: 100,
    backgroundColor: '#608BC8',
    alignItems: 'center',
    borderRadius: 20,
    height: 20,
  },
  clearButton: {
    width: 100,
    backgroundColor: '#C86066',
    alignItems: 'center',
    borderRadius: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Register;
