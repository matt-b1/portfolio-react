import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Nav } from './Layout';
import { Home } from './Pages';

function App() {

  if (window.performance.getEntriesByType('navigation')[0].type === 'reload') {
    window.location.href = "/";
  };

  return (
    <div className='pageContent'>
      <Header />
      <main>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={<p> This page does not exist.</p>}> </Route>
        </Routes>
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
