
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { categorias as categoriasDB } from '../data/categorias';

export const FreshCofeeContext = createContext();

export const FreshCoffeProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
  
  const handleClickCategoria = id => {
    const categoriaFiltrada = categorias.filter(categoria => categoria.id === id)[0];
    console.log('categoriaFiltrada', categoriaFiltrada);
    setCategoriaActual(categoriaFiltrada);
  }
  return (
    <FreshCofeeContext.Provider 
    value={{
      categorias,
      categoriaActual,
      handleClickCategoria
    }}
    >
        {children}
    </FreshCofeeContext.Provider>
  )
}

FreshCoffeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
