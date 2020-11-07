import './Footer.css'

const Footer = ({ sourceUrl }) => (
  <footer className='Footer'>
    Fonte de dados: 
    <a className='text-warning' href={ sourceUrl } target='_blank' rel="noreferrer">TSE</a>
  </footer>
)

export { Footer }