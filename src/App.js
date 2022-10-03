import React from 'react';
import { Header, Footer, Nav } from './Layout';
import { Home } from './Pages';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
