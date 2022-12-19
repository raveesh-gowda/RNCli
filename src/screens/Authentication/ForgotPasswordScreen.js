import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {validateEmail} from '../../utils/validation';

function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const validations = () => {
    if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }
  };

  const forgotPassword = () => {
    validations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        email,
      };

      console.log(formData);

      setEmail('');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password</Text>
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
        <TouchableOpacity style={styles.submitButton} onPress={forgotPassword}>
          <Text style={styles.submitButtonText}>Send Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDB860',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: '#D6CFB1',
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
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ForgotPasswordScreen;
