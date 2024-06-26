
export const Login = () => {
  return (
    <>
    <h1 className="text-4xl font-black">Iniciar Sesión</h1>
    <p className="text-lg">Para crear un pedido, debes iniciar sesión</p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="email"
                        >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50" 
                        name="email"
                        placeholder="Introduce tu email"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="password"
                        >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50" 
                        name="password"
                        placeholder="Tu password"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value="Iniciar Sesión"
                />
        </form>
    </div>
</>
  )
}
