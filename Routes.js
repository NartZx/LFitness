import { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import Home from './Home';

const Stack = createStackNavigator();

export default function Routes(){
    const [EstaLogado, setLogado] = useState(false);

  return (
    
      EstaLogado ? (
        
              
                    <Stack.Navigator >
                      <Stack.Screen  name="Home" options={{ headerShown: true }} component={Home} initialParams={{ funcLogar: setLogado }} />
                      
                    </Stack.Navigator>
                  
             
                
              
            
          
          
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{ funcLogar: setLogado }} />
          
        </Stack.Navigator>
      )
   
  );
        
    
}
