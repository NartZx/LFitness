import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login.js';
import Home from './Home.js';
const Stack = createStackNavigator();

const App = () => {
  const [EstaLogado, setLogado] = useState(false);

  return (
    <NavigationContainer>
      {EstaLogado ? (
        
              
                    <Stack.Navigator >
                      <Stack.Screen  name="Home" options={{ headerShown: true }} component={Home} initialParams={{ funcLogar: setLogado }} />
                      
                    </Stack.Navigator>
                  
             
                
              
            
          
          
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{ funcLogar: setLogado }} />
          
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

