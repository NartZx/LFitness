import { View, Button} from 'react-native';
import styles from './Styles';





const Home = ({ navigation, route }) => {
  const deslogar = () => {
    route.params.funcLogar(false);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      
      <Button  title="Logout" onPress={deslogar} />
    </View>
  );
};

export default Home;
