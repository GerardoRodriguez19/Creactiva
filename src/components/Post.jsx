const Post = (props) => {

    const { titulo, descripcion, img } = props

    return (
        <div className="flex flex-col p-3 bg-rosa rounded-md mb-3 text-justify">
            <div className="relative">
                <div className="relative z-10 text-slate-800 p-3">
                    <h2 className="text-xl mb-10 font-semibold">{titulo}</h2>
                    <p className="text-slate-950">{descripcion}</p>
                </div>
                <img className="absolute left-0 top-0 w-full h-full object-cover opacity-60 rounded-md" src={img} alt="img" />
            </div>
        </div>
    )
}

export default Post