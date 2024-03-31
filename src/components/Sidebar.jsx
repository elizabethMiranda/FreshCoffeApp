import { categorias } from "../data/categorias"
import { Categoria } from "./Categoria"
import short from 'short-uuid'
export const Sidebar = () => {
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="w-40"
                src="img/logo.svg"
            />
            
        </div>
        <div className="mt-10">
            {
                categorias.map((categoria) => (
                    <p key={short.generate()}>
                        <Categoria categoria={categoria} />
                    </p>
                ))
            }
        </div>
        <div className="my-5 px-5">
            <button 
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
            >
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
