import { Button, Navbar, NavbarBrand, Link, NavbarContent } from '@nextui-org/react'

const NavbarSection = () => {
  return (
    <Navbar> 
      <NavbarBrand>
        <p className="font-bold text-xl">Grupo Medico Conciencia</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <Link className="font-semibold" color="foreground" href="#">Inicio</Link>
        <Link className="font-semibold" color="foreground" href="#">Servicios</Link>
        <Link className="font-semibold" color="foreground" href="#">Testimonios</Link>
        <Link className="font-semibold" color="foreground" href="#">Ubicación</Link>
        <Button color="primary" variant="ghost">Agenda tu Cita</Button>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarSection