
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { categorias as categoriasDB } from '../data/categorias';

export const FreshCofeeContext = createContext();

export const FreshCoffeProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  
  const handleClickCategoria = id => {
    const categoriaFiltrada = categorias.filter(categoria => categoria.id === id)[0];
    console.log('categoriaFiltrada', categoriaFiltrada);
    setCategoriaActual(categoriaFiltrada);
  }

  const handleClickModal = () => {
    setModal(!modal);
  }

  const handleSetProducto = producto => {
    setProducto(producto);
  }
  return (
    <FreshCofeeContext.Provider 
    value={{
      categorias,
      categoriaActual,
      handleClickCategoria,
      modal,
      handleClickModal,
      producto,
      handleSetProducto,
      pedido,
    }}
    >
        {children}
    </FreshCofeeContext.Provider>
  )
}

FreshCoffeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
