import { useState, useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons'

const Carousel = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {

    const [ current, setCurrent ] = useState(0)

    const previous = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))

    const next = () => setCurrent((current) => (current === slides.length -1 ? 0 : current + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100 }%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={previous}
                    className="text-2xl p-1 rounded-full shadow bg-white/80 text-slate-800 hover:bg-white cursor-pointer">
                    <Icon.ChevronLeft/>
                </button>
                <button
                    onClick={next}
                    className="text-2xl p-1 rounded-full shadow bg-white/80 text-slate-800 hover:bg-white cursor-pointer">
                    <Icon.ChevronRight/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`
                                transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}
                                `}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel