import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Curso from '../components/Curso'

const Inicio = () => {

    return (
        <div className="flex flex-col max-w-7xl mx-auto items-center py-2 px-4">
            <h1 className="text-4xl font-bold text-slate-700 mb-4">Explora tus intereses</h1>
            <div className="relative w-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-3 left-1 right-0"/>
                <input className="bg-rosa py-2 px-8 rounded-full w-full max-w-2xl" type="text" placeholder="Buscar cursos"/>
            </div>

            <div className="cursos mt-5 flex flex-col items-center flex-wrap gap-5 w-full">
                <Curso
                    titulo="Curso 1"
                    descripcion="El primer curso"
                    precio="450"    
                />
                <Curso
                    titulo="Curso 2"
                    descripcion="El segundo curso"
                    precio="130"    
                />
            </div>
        </div>
    )
}

export default Inicio