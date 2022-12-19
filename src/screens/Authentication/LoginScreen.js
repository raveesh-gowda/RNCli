import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {validateEmail, validatePassword} from '../../utils/validation';

function LoginScreen(props) {
  const {
    navigation: {navigate},
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const validations = () => {
    if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!validatePassword(password)) {
      errors.password =
        'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special';
    }
  };

  const login = () => {
    validations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        email,
        password,
      };

      console.log(formData);

      setEmail('');
      setPassword('');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            name="email"
            style={styles.inputStyle}
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          {formErrors.email && (
            <Text style={styles.errorText}>{formErrors.email}</Text>
          )}
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          {formErrors.password && (
            <Text style={styles.errorText}>{formErrors.password}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={login}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.newUser}>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigate('Register')}>
            New Here? Register
          </Text>
          <Text
            style={styles.forgotPasswordTextStyle}
            onPress={() => navigate('ForgotPassword')}>
            Forgot Password
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99A9EF',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: '#F5EDDC',
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
    marginBottom: 15,
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
  errorText: {
    fontSize: 12,
    color: '#FF0D10',
  },
  submitButton: {
    backgroundColor: '#395B64',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 15,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  newUser: {
    alignItems: 'center',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  forgotPasswordTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});

export default LoginScreen;
