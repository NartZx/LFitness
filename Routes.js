import { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './Login';
import Home from './Home';
import Consulta from './Consulta';
import AvalicaoFisica from './AvaliacaoFisica';
import Aluno from './Aluno';

const Stack = createStackNavigator();

export default function Routes(){
    const [EstaLogado, setLogado] = useState(false);

  return (
     <NavigationContainer>
      {EstaLogado ? (
        
              
                    <Stack.Navigator >
                      <Stack.Screen  name="Home" options={{ headerShown: true }} component={Home} initialParams={{ funcLogar: setLogado }} />
                      <Stack.Screen name="Consulta" component={Consulta} options={{headerShown: true}} />
                      <Stack.Screen name="Avaliação Fisica" component={AvalicaoFisica} options={{headerShown: true}} />
                      <Stack.Screen name="Aluno" component={Aluno} options={{headerShown: true}} />
                    </Stack.Navigator>
                  
             
                
              
            
          
          
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{ funcLogar: setLogado }} />
          
        </Stack.Navigator>
      )}
      
     </NavigationContainer> 
  );
        
    
}
