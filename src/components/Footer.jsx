import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear()
    // border-2 border-slate-600 para la versión desktop

    return (
        <div className="flex flex-col max-w-[1250px] mx-4 xl:mx-auto my-4 bg-verde text-gris-oscuro rounded-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8 border-b-2 border-verde_oscuro p-6">
                <div>
                    <h3 className="mb-2 font-bold">Creactiva</h3>
                    <p>Cursos divertidos y creativos para aprender de forma sencilla</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="mb-2 font-bold">Navegación</h3>
                    <Link to="/blog" className="hover:text-morado_oscuro_max">Blog</Link>
                    <Link to="/talleres" className="hover:text-morado_oscuro_max">Talleres</Link>
                    <Link to="/nosotros" className="hover:text-morado_oscuro_max">Nosotros</Link>
                    <Link to="/contacto" className="hover:text-morado_oscuro_max">Contacto</Link>
                </div>
                <div>
                    <h3 className="mb-2 font-bold">Conecta con nosotros</h3>
                    <p className="font-semibold">Correo:</p>
                    <p className="mb-3">creactiva48@gmail.com</p>
                    <p className="font-semibold">WhatsApp:</p>
                    <a className="hover:text-morado_oscuro_max" href="https://wa.me/524481695940" target="_blank" title="https://wa.me/524481695940">448 169 5940</a>
                </div>
                <div>
                    <h3 className="mb-2 font-bold">Redes sociales</h3>
                    <div className='flex gap-5'>
                        <a target="_blank" rel="noopener" href="https://www.instagram.com/creactiva_hpan_qro/" title="Creactiva en Instagram">
                            <Icon.Instagram className="text-xl text-slate-800 hover:text-morado_oscuro_max"/>
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center p-5">© {añoActual} Creactiva. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer