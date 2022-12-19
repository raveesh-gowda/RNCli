import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Text, RadioButton} from 'react-native-paper';

function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    const formData = {
      name,
      age: Number(age),
      gender,
      occupation,
      email,
      password,
    };
    console.log(formData);
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
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <Text variant="headlineMedium" style={styles.title}>
            Register Here
          </Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your name"
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your age"
              value={age}
              onChangeText={value => setAge(value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Gender</Text>
            <RadioButton.Group
              onValueChange={newValue => setGender(newValue)}
              value={gender}>
              <RadioButton.Item
                label="Male"
                value="male"
                position="leading"
                labelVariant="labelLarge"
              />
              <RadioButton.Item
                label="Female"
                value="female"
                position="leading"
                labelVariant="labelLarge"
              />
              <RadioButton.Item
                label="Others"
                value="others"
                position="leading"
                labelVariant="labelLarge"
              />
            </RadioButton.Group>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Occupation</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your occupation"
              value={occupation}
              onChangeText={value => setOccupation(value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your email"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.registerButton} onPress={register}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => clearRegisterState()}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAAFEC',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  formContainer: {
    backgroundColor: '#F5E4F7',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 15,
  },
  label: {
    color: '#16213E',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  radioButton: {
    flexDirection: 'row',
  },
  buttonsWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  registerButton: {
    backgroundColor: '#76C176',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#D8948D',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default RegisterScreen;
