

const Contact = () => {
  return (
    <div id="contacto" className="flex min-h-[50vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-4 space-y-6 p-14">
        <h1 className="w-full text-center text-2xl md:text-2xl text-gray-500">
          Con mis hablidades podemos logragrar que su vision sea una realidad.
        </h1>

        

         <a href="mailto:avanzatti5@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hocer:shadow-indigo-600"
          >Contactame
         </a> 

      </div>
    </div>
  )
}

export default Contact