import PropTypes from 'prop-types';
import { useQuiosco } from '../hooks/useQuiosco';
export const Categoria = ({categoria}) => {
        const {nombre, icono, id} = categoria
        const {handleClickCategoria, categoriaActual} = useQuiosco();
    return (
        <div className={`${categoriaActual.id === id ? "bg-amber-400": "bg-white"} flex items-center gap-4 border w-full p-3 cursor-pointer hover:bg-amber-400 cursor-pointer`}>
                <img 
                        alt="imagen Icono"
                        src={`img/icono_${icono}.svg`}
                        className="w-12"
                />
                
                <button 
                        className="text-sm font-bold cursor-pointer truncate" 
                        onClick={()=>handleClickCategoria(id)}
                        type='button'
                >
                        {nombre}    
                </button>
        </div>
    )
}
Categoria.propTypes = {
        categoria: PropTypes.object.isRequired
    };

