import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido!"/>
    </div>
  );
}

export default App;