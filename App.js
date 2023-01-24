import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';

/* Arvaa numero:

Sovellus arpoo satunnaisen kokonaisluvun 1-100 väliltä.
Käyttäjä syöttää arvauksen teksti kenttään ja painaa 'Make guess'- painketta
Ohjelma tarkistaa arvauksen vertaamalla sitä satunnaislukuun ja kertoo onko arvaus liian pieni tai suuri. 
Jos arvaus on oikein sovellus näyttää arvausten lukumäärän ja peli loppuu.

Vinkki: Satunnaisluku väliltä  1-100, Math.floor(Math.random() * 100) + 1*/

const randomNumero = Math.floor(Math.random() * 100) + 1;

export default function App() {

  const [maara, setMaara] = useState(0);
  const [arvaus, setArvaus] = useState(0);
  const [text, setText] = useState('');

  const tarkistaNumero = ()=> {
      if (arvaus == randomNumero) {
        setMaara(()=>maara+1);
        setText(() => "You guessed the number in " + maara + " guesses");
        return (
        {text}
        )
      } else if (arvaus > randomNumero && arvaus < 101) {
        setMaara(()=>maara+1);
        setText(() => "Your guess " + arvaus + " is too high");
        return (
          {text}
        )
      } else if (arvaus < randomNumero && arvaus > 0) {
        setMaara(()=>maara+1);
        setText(() => "Your guess " + arvaus + " is too low");
        return (
            {text}
          )
      }
      else {
          setText(() => "Guessed number has to be between 1-100!");
          return (
            {text}
        )
      }
    }

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        style={{ width: 100, borderColor: 'black', borderWidth: 2}}
        keyboardType = 'numeric'
        value = {arvaus}
        min = '1'
        max = '100'
        onChangeText={arvaus => setArvaus(arvaus)}
      />
      <StatusBar style="auto" />
      <Button
        onPress = {tarkistaNumero}
        title = 'Make guess'
      /> 
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
