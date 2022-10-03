import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Nav } from './Layout';
import { Home } from './Pages';

function App() {
  return (
    <div className='pageContent'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          
        </Routes>
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
