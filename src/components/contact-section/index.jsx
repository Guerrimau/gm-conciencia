import { Button, Input } from '@nextui-org/react'

const ContactSection = () => {
  return (
    <section className="rounded-3xl bg-white mt-36 p-10 flex justify-between">
      <div className="w-1/2 space-y-5">
        <h3 className="text-5xl">¡Inicia tu Viaje hacia el Bienestar Ahora!</h3>
        <p className="text-xl">Nuestro equipo de psiquiatras altamente capacitados está listo para proporcionarte el apoyo que necesitas. Completa el formulario a continuación para agendar tu consulta. Nos pondremos en contacto contigo en breve.</p>
        <Button size="lg" variant="solid" color="primary">Enviar</Button>
      </div>
      <div className="w-[450px] space-y-5">
        <p className="text-zinc-500">Ingresa tus datos</p>
        <Input color="primary" size="lg" type="text" variant="flat" label="Nombre" />
        <Input color="primary" size="lg" type="email" variant="flat" label="Correo" />
        <Input color="primary" size="lg" type="tel" variant="flat"  label="Celular"/>
      </div>
    </section>
  )
}

export default ContactSection