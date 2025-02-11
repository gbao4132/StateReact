import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

const CustomButton = ({ color, onPress }) => {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Button title={color} color="white" onPress={() => onPress(color)} />
    </View>
  );
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State cho background

  const handleButtonPress = (color) => {
    setBackgroundColor(color); 
  };

  const colors = ['green', 'blue', 'brown','yellow', 'red', 'black'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {colors.map((color, index) => (
        <CustomButton key={index} color={color} onPress={handleButtonPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },
});

export default App;
