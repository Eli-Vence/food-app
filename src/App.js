import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
      <Router basename='/food-app'>
        <Header />
        <main className='container content'>
          <Routes>
            <Route exect path='/' element={<Home />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
