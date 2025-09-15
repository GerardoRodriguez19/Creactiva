import * as Icon from 'react-bootstrap-icons'

const Footer = () => {

    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear()
    // border-2 border-slate-600 para la versión desktop

    return (
        <div className="flex flex-col items-center gap-y-5 bg-verde text-gris-oscuro rounded-md m-3 pb-6">
            <div className="flex flex-wrap gap-y-5 border-b-2 border-verde_oscuro p-4">
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Creactiva</h3>
                    <p>Cursos divertidos y creativos para aprender de forma sencilla</p>
                    <p>hola</p>
                </div>
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Navegación</h3>
                    <p>Blog</p>
                    <p>Talleres</p>
                    <p>Nosotros</p>
                    <p>Contacto</p>
                </div>
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Conecta con nosotros</h3>
                    <p>creactiva@hotmail.com</p>
                    <p>+52 523 458 8774</p>
                </div>
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Redes sociales</h3>
                    <div className='flex gap-5'>
                        <button className="cursor-pointer">
                            <Icon.Facebook className="text-xl text-slate-800 hover:text-morado_oscuro_max"/>
                        </button>
                        <button className="cursor-pointer">
                            <Icon.TwitterX className="text-xl text-slate-800 hover:text-morado_oscuro_max"/>
                        </button>
                    </div>
                </div>
            </div>
            <p>© {añoActual} Creactiva. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer