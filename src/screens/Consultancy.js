import { View, Text,Pressable } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TreinonaAcademia from './Academia';
import TreinoemCasa from './CasaScreen';
import Routes from '../../Routes';
import styles from '../../Styles';

const Stack = createStackNavigator();

export default function Consulta() {
 
return (
  
 

  <View>
    <Text>Escolha seu Treino</Text>
   
   
   
   
       <Pressable style={styles.formbutton} onPress={() => navigation.push("Treino em Casa")}>
         <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Treino em Casa</Text> 
         </Pressable>
       <Pressable style={styles.formbutton} onPress={() => navigation.push("Treino na Academia")}>
           <Text style={{fontWeight:'700',textTransform:'uppercase'}}>Treino na Academia</Text> 
           </Pressable>     
 
      </View>

 
      
); 


}

