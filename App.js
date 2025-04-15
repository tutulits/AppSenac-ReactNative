import { NavigationContainer, } from '@react-navigation/native';
import Rotas from './componentes/Rotas';
import { Tema } from './componentes/Tema';

export default function App() {
  return (

      <Tema>
        <NavigationContainer>
        <Rotas />
        </NavigationContainer>
      </Tema>

  );
}
