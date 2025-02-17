import logo from '../../media/logo.svg'


export default function Header() {
  return (
    <header className="header">
      <a href="#about" className="header-logo">
        <img src={ logo } alt="Logo" width="120" />
      </a>
      <nav className="header-navbar">
        <a href="#about" className="active">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#rental">Аренда</a>
      </nav>
      <button className="header-button" type="button">
        Связаться
      </button>
    </header>
  )
}