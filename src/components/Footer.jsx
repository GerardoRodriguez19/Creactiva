import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear()
    // border-2 border-slate-600 para la versión desktop

    return (
        <div className="flex flex-col items-center gap-y-5 bg-verde text-gris-oscuro rounded-md m-3 pb-6">
            <div className="flex flex-wrap gap-5 border-b-2 border-verde_oscuro p-4">
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Creactiva</h3>
                    <p>Cursos divertidos y creativos para aprender de forma sencilla</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="mb-3 font-bold">Navegación</h3>
                    <Link to="/blog" className="hover:text-morado_oscuro_max">Blog</Link>
                    <Link to="/talleres" className="hover:text-morado_oscuro_max">Talleres</Link>
                    <Link to="/nosotros" className="hover:text-morado_oscuro_max">Nosotros</Link>
                    <Link to="/contacto" className="hover:text-morado_oscuro_max">Contacto</Link>
                </div>
                <div className="w-1/2">
                    <h3 className="mb-3 font-bold">Conecta con nosotros</h3>
                    <p className="font-semibold">Correo:</p>
                    <p className="mb-3">creactiva48@gmail.com</p>
                    <p className="font-semibold">WhatsApp:</p>
                    <a className="hover:text-morado_oscuro_max" href="https://wa.me/524481695940" target="_blank" title="https://wa.me/524481695940">448 169 5940</a>
                </div>
                <div className="">
                    <h3 className="mb-3 font-bold">Redes sociales</h3>
                    <div className='flex gap-5'>
                        <a target="_blank" rel="noopener" href="https://www.instagram.com/creactiva_hpan_qro/" title="Creactiva en Instagram">
                            <Icon.Instagram className="text-xl text-slate-800 hover:text-morado_oscuro_max"/>
                        </a>
                    </div>
                </div>
            </div>
            <p>© {añoActual} Creactiva. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer