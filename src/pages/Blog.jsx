import Carousel from "../components/Carousel"
import Post from '../components/Post'

const slides = [
  "img/art1.jpg",
  "img/art2.jpg",
  "img/art3.jpg",
]

const posts = [
  "img/post1.jpg",
]

const Blog = () => {

    return (
        <div className="max-w-7xl xl:mx-auto mx-4">
          <h2 className="text-center text-xl font-bold text-slate-700 mb-4">Te damos la bienvenida a nuestro blog</h2>
          
          <div className="max-w-lg mx-auto">
            <Carousel autoSlide={true} autoSlideInterval={5000}>
              {slides.map((s) => (
                <div key={s} className="w-full">
                  <img src={s} className="w-full h-full object-cover" />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="">
            <Post
              titulo="Intervención pedagógica personalizada"
              descripcion="Es una forma de trabajar con tu pequeño o pequeña, adaptando estrategias concretas a sus necesidades de aprendizaje y etapa de desarrollo. Juntos, descubriremos la mejor manera de acompañarlo, que se divierta y aprenda."
              img={posts[0]}
            />
            <Post
              titulo="Post 2"
              descripcion="desc 2"
              img="img2.jpg"
            />
            <Post
              titulo="Post 3"
              descripcion="desc 3"
              img="img3.jpg"
            />
          </div>
        </div>
    )
}

export default Blog