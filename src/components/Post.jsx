const Post = (props) => {

    const { titulo, descripcion, img } = props

    return (
        <div className="flex flex-col p-3 bg-rosa rounded-md mb-3">
            <div className="relative">
                <div className="relative z-10 text-slate-800 p-3">
                    <h2 className="text-xl mb-15 font-semibold">{titulo}</h2>
                    <div className="flex">
                        <p className="text-slate-950 text-justify w-1/2">{descripcion}</p>
                    </div>
                </div>
                <img className="absolute left-0 top-0 w-full h-full object-cover opacity-35 rounded-md" src={img} alt="img" />
            </div>
            {/* <div>
                <h2 className="text-xl mb-3 font-semibold">{titulo}</h2>
                <img className="w-full h-full object-cover rounded-md mb-6" src={img} alt="img" />
                <p className="text-slate-950">{descripcion}</p>
            </div> */}
        </div>
    )
}

export default Post