import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, TouchableHighlight, View } from 'react-native';

import { styles } from './Style/GolobalStyle';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.text_span}>Hello !</Text>
      <Text style={styles.text}> 
        Everyone This My First Mobile App 🎉 </Text>
      <Text style={styles.pra}>
         Iam Abid Hasan kiam</Text>
      <TextInput style={styles.input}  placeholder='Enter Your Name'/> 
      <TextInput style={styles.input} placeholder='Enter Your Email' /> 
      
      <TouchableHighlight>
        <Text style={styles.btn}> Sent Me</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}


