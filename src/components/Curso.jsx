import ButtonLayout from './ButtonLayout'

const Curso = (props) => {

    const { titulo, descripcion, precio } = props

    return (
        <div className="bg-rosa py-4 px-6 rounded-lg w-full">
            <h2 className="text-3xl font-semibold mb-6 text-purple-950">{titulo}</h2>
            <p className="text-lg text-purple-900">{descripcion}</p>
            <p className="text-xl font-semibold text-purple-950 mb-4">${precio}</p>
            <ButtonLayout label="Ver más"/>
        </div>
    )
}


export default Curso