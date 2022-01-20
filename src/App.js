import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { AboutPage } from './routes/about';
import { LoginRoute } from './routes/login';

function App() {
  return (
    <div className="App">
            <BrowserRouter>

      <div style={{
        display: "flex",
        justifyContent:"space-around"
}}>
        <Link to="/home"> Home Page</Link>
        <Link to="/about"> About Page</Link>
        <Link to="/login"> Login Page</Link>

      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginRoute />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export const Home = props => {
  return (
    <div style={{ padding: 10 }}>
      <h5>Home</h5>



    </div>
  )
}

export default App;
