import image from "/image.jpg"
import { motion } from "framer-motion" 

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">


        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8,delay:0.2}}

        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]"/>
        </motion.div>
        

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
         className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl">
            Franco Avanzatti
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl md:text-3xl">
            Desarrollador Full-Stack
          </h3>
            <p className="md:text-base text-pretty text-sm text-gray-400">
              Mi nombre es Franco Avanzatti y soy un desarrollador Full-Stack con más de dos años de experiencia trabajando como freelance para clientes y agencias de todo el mundo.
              Me especializo en la creación de aplicaciones web dinámicas, responsivas e intuitivas.<br></br>Mi trabajo se basa en el compromiso de ofrecer soluciones innovadoras, eficientes y de alta calidad, adaptadas a las necesidades del cliente.
              Busco crear soluciones estables y de alto rendimiento, tanto en Front End como en Back End.
            </p>
        </motion.div>



      </div>
      

    </div>

    
  )
}

export default Hero