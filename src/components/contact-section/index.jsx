import { Button, Input } from '@nextui-org/react'

const ContactSection = () => {
  return (
    <section id="contact" className="rounded-3xl bg-white mt-36 mx-5 md:mx-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-8">
        <h3 className="text-3xl md:text-5xl">¡Inicia tu viaje hacia el bienestar ahora!</h3>
        <p className="text-base md:text-xl">Nuestro equipo de psiquiatras altamente capacitados está listo para proporcionarte el apoyo que necesitas. Completa el formulario a continuación para agendar tu consulta. Nos pondremos en contacto contigo en breve.</p>
      </div>
      <div className="w-full md:w-[450px] space-y-5 flex flex-col mt-5 md:mt-0">
        <p className="text-zinc-500">Ingresa tus datos</p>
        <Input color="primary" size="lg" type="text" variant="flat" label="Nombre" />
        <Input color="primary" size="lg" type="email" variant="flat" label="Correo" />
        <Input color="primary" size="lg" type="tel" variant="flat"  label="Celular"/>
        <Button className="w-full md:w-fit self-end" size="lg" variant="solid" color="primary">Enviar</Button>
      </div>
    </section>
  )
}

export default ContactSection