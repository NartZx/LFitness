import { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from './src-fernando/screens/LoginScreen';
import Home from './src-fernando/screens/HomeScreen';
import Consulta from './src-fernando/screens/Consultancy';
import AvalicaoFisica from './src-fernando/screens/Assessment';
import Aluno from './src-fernando/screens/StudentScreen';
import EsqueciSenha from './src-fernando/screens/ForgetPassword';
import NovoUsuario from './src-fernando/screens/RegisterScreen';
import Header from './Header';
import HomeTraining from './HomeTraining'; 
import OnlineConsulting from './OnlineConsulting';
import PhysicalAssessment from './PhysicalAssessment';
import Student from './Student';
import Settings from './settings'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes(){
    const [EstaLogado, setLogado] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleTheme = () => {
     setIsHighContrast(!isHighContrast);
   };

  return (
     <NavigationContainer>
      {EstaLogado ? (
     


   
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              onToggleTheme={toggleTheme}
              isHighContrast={isHighContrast}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home"
          component={() => { <Home isHighContrast={isHighContrast} /> 
         
       
    
  
                  return(   
                    <Stack.Navigator >
                      <Stack.Screen  name="Home" options={{ headerShown: false, headerTransparent: true, headerTitle: "" }} component={Home} initialParams={{ funcLogar: setLogado }} />
                      <Stack.Screen name="Consulta" component={Consulta} options={{headerShown: true,headerTitle: "",headerTransparent:true}} />
                      <Stack.Screen name="Avaliação Fisica" component={AvalicaoFisica} options={{headerShown: true,headerTitle: "",headerTransparent: true}} />
                      <Stack.Screen name="Aluno" component={Aluno} options={{headerShown: true,headerTitle: ""}} />
                      <Stack.Screen name="Configuração" component={Settings} options={{headerShown: true,headerTitle: ""}} />
                    </Stack.Navigator>
                  );
                  }} />    
        <Drawer.Screen name="Aluno">
          {() => <Student isHighContrast={isHighContrast} />}
        </Drawer.Screen>
        <Drawer.Screen name="Avaliação Física">
          {() => <PhysicalAssessment isHighContrast={isHighContrast} />}
        </Drawer.Screen>
        <Drawer.Screen name="Consultoria Online">
          {() => <OnlineConsulting isHighContrast={isHighContrast} />}
        </Drawer.Screen>
        <Drawer.Screen name="Treino em Casa">
          {() => <HomeTraining isHighContrast={isHighContrast} />}
        </Drawer.Screen>
        <Drawer.Screen name="Login">
          {() => <Login isHighContrast={isHighContrast} />}
        </Drawer.Screen>
      </Drawer.Navigator>      
                
              
            
          
          
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{ funcLogar: setLogado }} />
          <Stack.Screen name="Esqueci Senha" component={EsqueciSenha} options={{ headerShown: true }}/>
          <Stack.Screen name="Novo Usuario" component={NovoUsuario} options={{ headerShown: true }} />
        </Stack.Navigator>
      )}
      
     </NavigationContainer> 
  );
        
    
}
