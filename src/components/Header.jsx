import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}