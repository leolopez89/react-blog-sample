import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './componets/home/Home';
import { Posts } from './componets/posts/Posts';

function App() {

  return (
    <div>
      <BrowserRouter>

        <CssBaseline />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Posts />} />
          </Routes>
        </Container>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
