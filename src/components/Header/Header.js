import './Header.css'

const Header = ({ title, onClick }) => (
  <header onClick={onClick} className='Header'>
    { title }
  </header>
)

export { Header }