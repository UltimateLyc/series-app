import Container from './Container'

// Styles
import '../styles/subnav.css'

const Subnav = () => {
  return (
    <Container>
      <nav id='container-second-navbar' className='navbar navbar-expand-lg bg-light '>
        <div className='container-fluid justify-content-center'>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Shows</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>People</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Network</a>
            </li>
          </ul>

        </div>
      </nav>

    </Container>
  )
}

export default Subnav
