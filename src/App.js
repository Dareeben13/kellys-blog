import 'antd/dist/antd.css';
import { AppContainer, AppWrapper } from './App.styles';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
   <AppWrapper>
     <AppContainer>
       <HomePage/>
     </AppContainer>
   </AppWrapper>
  );
}

export default App;
