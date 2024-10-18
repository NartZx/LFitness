import { View, Pressable,Text} from 'react-native';
import styles from './Styles';





const Home = ({ navigation, route }) => {
  const deslogar = () => {
    route.params.funcLogar(false);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={{paddingVertical:5,fontWeight:'700',textTransform:'uppercase'}}>Bem-Vindo a tela inicial</Text>
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Consulta")}>
        <Text style={{paddingVertical:5,fontWeight:'700',textTransform:'uppercase'}}>Consulta</Text> 
        </Pressable>
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Avaliação Fisica")}>
        <Text style={{paddingVertical:5,fontWeight:'700',textTransform:'uppercase'}}>{'Avalição Fisica'}</Text> 
        </Pressable> 
      <Pressable style={styles.formbutton} onPress={() => navigation.push("Aluno")}>
        <Text style={{paddingVertical:5,fontWeight:'700',textTransform:'uppercase'}}>Aluno</Text> 
        </Pressable>     
      <Pressable  style={styles.formbutton} onPress={deslogar}> 
         <Text style={{paddingVertical:5,fontWeight:'700',textTransform:'uppercase'}}>Logout</Text>
         </Pressable>
      
    </View>
  );
};

export default Home;
