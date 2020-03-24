import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Animated,Image,TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

function Add({ navigation }) {
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 50}));
  const [opacity] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 80,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 10,
        duration: 200,
      })
    ]).start();
  }, []);

  return(
    <>
      <KeyboardAvoidingView 
        style={styles.background}
        behavior="padding"
        enabled
      >
        <View style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require('../../assets/react-native-icon.png')}
            
          />
        </View>
        <Animated.View
        style={[
          styles.containerInput,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y,
              }
            ]
          }
        ]}
        
        >
        
          <TextInput 
            style={styles.input}
            placeholder="Github Username"
            autoCorrect={false}
            onChange={() => {}}
          />
          <TextInput 
            style={styles.input}
            placeholder="Tecnologias"
            autoCorrect={false}
            onChange={() => {}}
          />
        <TextInput 
            style={styles.input}
            placeholder="Latitude"
            autoCorrect={false}
            onChange={() => {}}
          />
          <TextInput 
            style={styles.input}
            placeholder="Longitude"
            autoCorrect={false}
            onChange={() => {}}
          />

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => {
            navigation.navigate('Main');
          }}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          {/* <Icon name="keyboard-arrow-right" size={20} color="#000" onPress={() => {
            navigation.navigate('Main');
          }}/> */}
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E6F0',
  },
  containerLogo: {
    flex: 0.5,
    padding: 5,
    justifyContent: 'center', 
  },
  logo: {
    width: 115,
    height: 100,
  },
  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#000',
    fontSize: 14,
    borderRadius: 7,
    padding: 4,
  },
  buttonSubmit: {
    backgroundColor: '#7D40E7',
    width: '90%',
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  },
});

export default Add;