import PropTypes from 'prop-types';

export const Categoria = ({categoria}) => {
        const {nombre, icono} = categoria
    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
                <img 
                        alt="imagen Icono"
                        src={`img/icono_${icono}.svg`}
                        className="w-12"
                />
                <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
        </div>
    )
}
Categoria.propTypes = {
        categoria: PropTypes.object.isRequired
    };

