import React from 'react';
import { Text,View,StyleSheet,Switch} from 'react-native';
import {useState} from 'react';

const Config = () => {
 const [change1,setchange1] = useState(false);
 const [change2,setchange2] = useState(false);


 return(
   <View style={styles.container}>
    <View style={styles.content}>
     <Text style={styles.title}>Configurações </Text>
    <Text style={{fontSize:15,fontWeight:'bold',paddingBottom:18}}>Alterar o tamanho da fonte (Grande ou Pequeno) </Text>
    <Switch value={change1} onValueChange={setchange1} style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}/>
    <Text style={{fontSize:15,fontWeight:'bold',paddingBottom:18,paddingTop:15}}>Alterar tipo de visualização (Light ou Dark) </Text> 
    <Switch value={change2} onValueChange={setchange2} style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}/>
    </View>
   </View>
 ); 
}; 

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
   content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },

 });
export default Config;