import { ContactForm } from './contact-form'

const ContactSection = () => {
  return (
    <section id="contact" className="rounded-3xl bg-white mt-36 mx-5 md:mx-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-8">
        <h3 className="text-3xl md:text-5xl">¡Inicia tu viaje hacia el bienestar ahora!</h3>
        <p className="text-base md:text-xl">Nuestro equipo de psiquiatras altamente capacitados está listo para proporcionarte el apoyo que necesitas. Completa el formulario a continuación para agendar tu consulta. Nos pondremos en contacto contigo en breve.</p>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection