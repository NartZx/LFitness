import { View, Text, Linking,Pressable } from 'react-native';
import styles from '../../Styles';

export default function Exercicio() {
  const serie1 = () =>{
    const url2 = 'https://www.youtube.com/watch?v=nQ3DBS_SQDA'
     Linking.openURL(url2).catch(err => console.error('Erro ao abri o link',err));

  };

  const serie2 = () =>{
     const url3 = 'https://www.youtube.com/watch?v=nQ3DBS_SQDA'
     Linking.openURL(url3).catch(err => console.error('Erro ao abri o link',err));

  } 
  
  return (
    <View style={styles.container} >
      <Text style={{fontWeight:'700',textTransform:'uppercase'}}> Exercicios</Text>
      <Pressable style={styles.formbutton} onPress={serie1}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Serie de Exercicios A</Text> 
        </Pressable>

      <Pressable style={styles.formbutton} onPress={serie2}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Serie de Exercicios B</Text> 
        </Pressable>  
    </View>
  );
 
}