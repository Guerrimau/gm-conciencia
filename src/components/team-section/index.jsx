import { Image } from '@nextui-org/react'
import React from 'react'

const TeamSection = () => {
  return (
    <section id="team" className=" mx-5 md:mx-0 flex-col md:flex-row flex mt-36 items-center bg-white rounded-3xl p-10">
      <Image
        width={300}
        alt="NextUI hero Image"
        src="https://th.bing.com/th/id/OIG.u6Sg730vmfSc_wCLMUOb?pid=ImgGn"
      />
      <div className="flex-1 mt-5 md:ml-10 md:mt-0">
        <h3 className="text-2xl md:text-4xl font-semibold w-fit">Nosotros</h3>
        <p className="text-base md:text-xl mt-2">Bienvenido a <strong>Grupo Médico Conciencia</strong>, donde nuestro compromiso es tu bienestar emocional. En el corazón de nuestro enfoque hay un equipo de psiquiatras altamente calificados en Apodaca, dedicados a proporcionar atención integral y personalizada.</p>
      </div>
    </section>
  )
}

export default TeamSection