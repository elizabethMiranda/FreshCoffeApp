import short from 'short-uuid'
import { Product } from "../components/Product"
import { productos } from "../data/productos"

export const PageInicio = () => {
  console.log(productos)
  return (
    <>
      <h1 className="text-4xl font-black pt-20">Inicio</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido
      </p>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {productos.map((producto) => (
          <Product key={short.generate()}
          producto={producto}
          /> 
        ))}
      </div>
    </>
  )
}
