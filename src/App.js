import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer, Nav } from './Layout';
import { Landing, Home, About, Contact, Projects } from './Pages';

function App() {

  if (window.performance.getEntriesByType('navigation')[0].type === 'reload') {
    window.location.href = "/";
  };

  return (
    <div className='pageContent'>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/landing' />}></Route>
          <Route exact path='/landing' element={<Landing />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={<p>InvalidURL: This page does not exist.</p>}> </Route>
        </Routes>
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
