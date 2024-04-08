import short from 'short-uuid'
import { Product } from "../components/Product"
import { productos as productosDB } from "../data/productos"
import { useQuiosco } from "../hooks/useQuiosco"

export const PageInicio = () => {
  const { categoriaActual } = useQuiosco()
  const getproductos = productosDB.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className="text-4xl font-black pt-20">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido
      </p>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        {getproductos.map((producto) => (
          <Product key={short.generate()}
          producto={producto}
          /> 
        ))}
      </div>
    </>
  )
}
