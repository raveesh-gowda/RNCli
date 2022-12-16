import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
// import { useDimensions } from "@react-native-community/hooks";

function WelcomeScreen(props) {
  const {
    navigation: {navigate},
  } = props;

  // console.log(useDimensions());

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sel What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Screen"
          onPress={() => navigate('View')}
          color="#841584"
        />
        <Button
          title="To Do App"
          onPress={() => navigate('ToDo')}
          color="#007AFF"
        />
        <Button
          title="Counter App"
          onPress={() => navigate('Counter')}
          color="#7FC860"
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigate('Login')}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigate('Register')}>
        <Text style={styles.registerText}>Register Here!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    bottom: 300,
  },
  loginButton: {
    width: '100%',
    height: 70,
    marginBottom: 10,
    backgroundColor: '#fc5c65',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  registerButton: {
    width: '100%',
    height: 70,
    marginBottom: 10,
    backgroundColor: '#4ecdc4',
    alignItems: 'center',
    borderRadius: 20,
  },
  registerText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default WelcomeScreen;
