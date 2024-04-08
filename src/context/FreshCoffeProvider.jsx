
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { categorias as categoriasDB } from '../data/categorias';

export const FreshCofeeContext = createContext();

export const FreshCoffeProvider = ({children}) => {


  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  
    // const calculaTotal = () => {
  //   const nuevoTotal = pedido.reduce((total, producto)=> (producto.precio * producto.cantidad)+total,0);
  //   setTotal(nuevoTotal);
  // }
  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad)+total,0);
    setTotal(nuevoTotal);
  },[pedido]);

  const handleAgregarPedido = (producto) =>{
    let validaProductoRepetido = pedido.find(productoRepeat => productoRepeat.id === producto.id);
    if(validaProductoRepetido){
        pedido.map(productoRepeat => {
        if(productoRepeat.id === producto.id){
          productoRepeat.cantidad = producto.cantidad;
          return productoRepeat;
        }
        setPedido([...pedido]);
        toast.success('Se ha actualizado el pedido');
    })
    }else{
      setPedido([...pedido, producto]);
      toast.success('Producto agregado correctamente');
    }
  }

  const handleEditarCantidad = id => {
      const productoActualizar = pedido.filter(producto => producto.id === id)[0];
      setProducto(productoActualizar);
      setModal(!modal);
  }
  
  const handleClickCategoria = id => {
    const categoriaFiltrada = categorias.filter(categoria => categoria.id === id)[0];
    setCategoriaActual(categoriaFiltrada);
  }

  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success('Pedido Eliminado');
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
      handleAgregarPedido,
      handleEditarCantidad,
      handleEliminarProducto,
      total,
    }}
    >
        {children}
    </FreshCofeeContext.Provider>
  )
}

FreshCoffeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
