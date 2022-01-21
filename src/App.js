import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { AboutPage } from './routes/about';
import { LoginRoute } from './routes/login';
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar } from './components/Navbar';
import { Home } from './routes/home';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AppData />
      </div>
    </ChakraProvider>

  );
}


const AppData = props => {
  return (
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginRoute />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
