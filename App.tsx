import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, TouchableHighlightComponent } from 'react-native';
import { RootStackParamList } from  './types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from 'react'
import React from 'react';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'Screen1' component={Screen1}></Stack.Screen>
      <Stack.Screen name='Screen2' component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type Screen1Prop = NativeStackScreenProps<RootStackParamList, 'Screen1'>;
const Screen1: React.FC<Screen1Prop> = (props) => { //props allows you to pass data from one component to another
const [name, setName ] = useState<string>(''); //name variable holds the user input for the name
return(
<View style={styles.container}>
<View style={styles.container2}>
<Text style={styles.text1}>Enter your name:</Text>
<TextInput
style={styles.input}
placeholder='Enter name'
value={name}
onChangeText={setName}>
</TextInput>
<TouchableHighlight
style={styles.button}
//below, we are passing the user input for name to screen2 to show the user a personalised greeting!
onPress={() => props.navigation.navigate('Screen2', {name})}>
<Text style={styles.button}>Save Name</Text>
</TouchableHighlight>
</View>
</View>
);
};

type Screen2Prop = NativeStackScreenProps<RootStackParamList, 'Screen2'>
const Screen2: React.FC<Screen2Prop> = (props) => {
const {name} = props.route.params; //we receive the name parameter from the previous screen through the props.route function
return(
<View style={styles.container3}>
<View style={styles.container4}>
<Text style={styles.text2}>Hi, {name}! </Text>
</View>
</View>
)
}
/***************End of Screen 2 definition ****************/
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#a5e4ff',
alignItems: 'center',
justifyContent: 'flex-start'
},
text1:{
textAlign: 'auto',
fontSize: 30,
fontWeight: "bold",
color: "purple"
},
text2:{
textAlign: 'auto',
fontSize: 30,
fontWeight: "bold",
color: "purple"
},
container2: {
marginTop: 400,
width: 500,
height: 400,
backgroundColor: 'blue',
alignItems: 'center',
justifyContent: 'flex-start',
},
container3: {
flex: 1,
backgroundColor: 'blue',
alignItems: 'center',
justifyContent: 'flex-start'
},
container4: {
marginTop: 300,
width: 500,
height: 400,
backgroundColor: 'blue',
alignItems: 'center',
justifyContent: 'center',
},
button:{
width: 150,
height: 50,
fontSize: 22,
color:"white",
fontWeight: "bold",
backgroundColor: "black",
textAlign: "center",
justifyContent: "center",
alignItems: "center",
marginTop: 50,
borderRadius: 10
},
input: {
width:400,
height: 40,
backgroundColor: 'blue',
paddingHorizontal: 10,
marginVertical: 1,
borderRadius: 5,
color: 'lightpurple',
marginTop: 20,
fontSize: 20,
},

});