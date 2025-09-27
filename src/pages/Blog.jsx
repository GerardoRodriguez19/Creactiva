import Carousel from "../components/Carousel"

const slides = [
  "img/art1.jpg",
  "img/art2.jpg",
  "img/art3.jpg",
]

const Blog = () => {

    return (
        <div className="max-w-2xl xl:mx-auto mx-4">
          <h2 className="text-center text-xl font-bold text-slate-700 mb-4">Te damos la bienvenida a nuestro blog</h2>
          
          <div className="max-w-lg">
            <Carousel autoSlide={true} autoSlideInterval={5000}>
              {slides.map((s) => (
                <div key={s} className="w-full">
                  <img src={s} className="w-full h-full object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
    )
}

export default Blog