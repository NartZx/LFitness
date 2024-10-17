import { View, Pressable,Text} from 'react-native';
import styles from '../../Styles';





const Home = ({ navigation, route }) => {
  const deslogar = () => {
    route.params.funcLogar(false);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Consulta")}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Consulta</Text> 
        </Pressable>
       <Pressable style={styles.formbutton} onPress={() => navigation.push("Exercicios")}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Exercicios</Text> 
        </Pressable>  
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Avaliação Fisica")}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>{'Avalição Fisica'}</Text> 
        </Pressable> 
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Aluno")}>
        <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Aluno</Text> 
        </Pressable>     
      <Pressable  style={styles.formbutton} onPress={deslogar}> 
         <Text>Logout</Text>
         </Pressable>
      
    </View>
  );
};

export default Home;
