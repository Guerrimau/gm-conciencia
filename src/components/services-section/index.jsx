import { Card, CardBody } from '@nextui-org/react'

const ServicesSection = () => {
  return (
    <section className="mt-36">
      <h3 className="text-4xl font-semibold text-center">Nuestros servicios</h3>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex items-center flex-col space-y-5">
          <GroupIcon />
          <h4 className="font-light text-xl">Terapia Individual y de Pareja</h4>
          <p className="text-center text-lg">Experimenta un espacio seguro para explorar tus pensamientos y emociones. Ofrecemos terapia individual y de pareja para abordar desafíos relacionales y personales.</p>
        </div>
        <div className="flex items-center flex-col space-y-5">
          <ClipboardIcon />
          <h4 className="font-light text-xl text-center">Atención de Primera Vez y de Seguimiento</h4>
          <p className="text-center">Desde la primera consulta hasta el seguimiento continuo, estamos comprometidos con tu bienestar a lo largo de tu viaje.</p>
        </div>
        <div className="flex items-center flex-col space-y-5">
          <MagnifyingIcon />
          <h4 className="font-light text-xl">Evaluación Psiquiátrica</h4>
          <p className="text-center">Con un enfoque comprensivo, nuestros profesionales realizan evaluaciones psiquiátricas para un diagnóstico preciso y un plan de tratamiento efectivo.</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

const MagnifyingIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-10 h-10"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

const ClipboardIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-10 h-10"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  )
}

const GroupIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-10 h-10"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}