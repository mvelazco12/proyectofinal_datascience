import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

   export default function MessageInputScreen({ navigation }: { navigation: any }) {
     const [message, setMessage] = useState('');

     const analyzeMessage = async () => {
       if (!message.trim()) {
         Alert.alert('Error', 'Por favor, ingresa un mensaje.');
         return;
       }

       try {
         const response = await axios.post('http://18.117.229.246:5001/api/analyze', { text: message }, {
           headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0ODIxMTM2NywianRpIjoiY2I0OWRkNDktZDEwOS00ODliLThiZTQtMWIyYmRkNTkxNTFlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNzQ4MjExMzY3LCJjc3JmIjoiNTUwM2JmMmQtYzZiNy00ODg2LTg1YTEtYzlkMzNjMzQyMjBlIiwiZXhwIjoxNzQ4MjE0OTY3fQ.W3xOU0jRwv-nx6tRiYiWm4n5b7TNFK27x7m8R79R80M' , 'Content-Type': 'application/json'}
         });
         navigation.navigate('Results', { analysis: response.data });
       } catch (error) {
         Alert.alert('Error', 'No se pudo analizar el mensaje. Intenta de nuevo.');
         console.error(error);
       }
     };

     return (
       <View style={styles.container}>
         <TextInput
           style={styles.input}
           placeholder="Type your message here"
           multiline
           value={message}
           onChangeText={setMessage}
         />
         <Button title="Analyze" onPress={analyzeMessage} />
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: { flex: 1, padding: 20 },
     input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, minHeight: 100 },
   });