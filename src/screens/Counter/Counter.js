import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {decrement, increment, reset} from './counterSlice';

function Counter(props) {
  const {number} = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.text}>Counter: {number}</Text>
      <View>
        <TouchableOpacity
          style={styles.increment}
          onPress={() => {
            dispatch(increment());
          }}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reset}
          onPress={() => {
            dispatch(reset());
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.decrement}
          onPress={() => {
            dispatch(decrement());
          }}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  increment: {
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  reset: {
    backgroundColor: 'yellowgreen',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  decrement: {
    backgroundColor: 'tomato',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Counter;
