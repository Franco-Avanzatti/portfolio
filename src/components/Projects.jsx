import { motion } from "framer-motion";

const projectsData = [
  {
    image: "/portfolio.png",
    title: "Quesería del Campo",
    description: "WEB E-COMMERCE DE VENTA DE QUESOS Y FIAMBRES 🧀🧀\nLa idea de esta WEB es programar un E-commerce en el cual el usuario elige entre los distintos productos y cantidad de ellos para luego finalizar la compra.",
    tecnologias: ["Grids", "Pseudoclases", "Bootstrap", "Animaciones", "Sass"],
    deploy: "https://e-commerce-queseria.vercel.app/",
    repository: "https://github.com/Franco-Avanzatti/e-commerce-queseria"
  },
  {
    image: "/portfolio1.png",
    title: "Panama Músic",
    description: "WEB E-COMMERCE DE VENTA DE INSTRUMENTOS MUSICALES 🎸🥁\nLa idea de esta WEB es programar un E-commerce en el cual el usuario elige entre los distintos instrumentos y cantidad de ellos para luego finalizar la compra.",
    tecnologias: ["Flexbox", "CSS", "JavaScript", "React", "Bootstrap"],
    deploy: "https://panama-music.vercel.app/",
    repository: "https://github.com/Franco-Avanzatti/React"
  },
  {
    image: "/arkanoid.png",
    title: "Arkanoid con JavaScript",
    description: "REMAKE DEL JUEGO CLÁSICO ARKANOID 🎮\nEste proyecto recrea el mítico juego Arkanoid utilizando solo HTML5 y JavaScript puro. El jugador controla una paleta para evitar que la bola caiga, mientras rompe bloques para sumar puntos.",
    tecnologias: ["HTML5", "JavaScript", "Canvas"],
    deploy: "https://arkanoid-coral.vercel.app/",
    repository: "https://github.com/Franco-Avanzatti/arkanoid"
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="relative group w-full md:w-[600px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-indigo-600"
            >
              Ver Deploy
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-indigo-600"
            >
              Ver Repositorio
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.tecnologias.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3 text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id="proyectos" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Mis Proyectos</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
