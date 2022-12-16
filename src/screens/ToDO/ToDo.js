import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import Tasks from './Tasks';

function ToDo(props) {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const {title} = props;

  const handleAddTask = () => {
    if (task) {
      setTaskItems([...taskItems, {id: Date.now(), task}]);
      setTask('');
    }
  };

  const completeTask = id => {
    const result = taskItems.filter(ele => ele.id !== id);
    setTaskItems(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.items}>
          {taskItems.map(ele => (
            <TouchableOpacity key={ele.id} onPress={() => completeTask(ele.id)}>
              <Tasks text={ele.task} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2BEB5',
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#7F7F7F',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7F7F7F',
    borderWidth: 1,
  },
  addText: {},
});

export default ToDo;
