import { useState } from 'react';
import { View, Button, Text,TextInput} from 'react-native';
import styles from './Styles.js';


const Login = ({ route }) => {
   const[text,setText]=useState("");
   const[senha,setSenha]=useState("");
  return (
    
    <View component= {styles} style={styles.container} >
      <Text style={{paddingVertical:5}}>Usuario:</Text>
      <TextInput style={styles.forminput}
       placeholder="Coloque seu nome de usario"
       keyboardType="email-address"
       autoCapitalize="none"
       autoComplete="email"
       onChangeText={newText=>setText(newText)}
       defaultValue={text}/>
       <Text style={{paddingVertical:12}}>Senha:</Text>
      <TextInput style={styles.forminput}
       placeholder="Coloque sua Senha"
       autoCapitalize="none"
       secureTextEntry
       onChangeText={newSenha=>setSenha(newSenha)}
       defaultValue={senha}/>
      <Text> </Text>
      <Button  onPress={() => route.params.funcLogar(true)} title='Logar' />
     
    </View>
  );
};

export default Login;
