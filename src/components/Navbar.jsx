import { useState } from 'react'
import Container from './Container'

// iconos
import { TbMovie } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'

// Styles
import '../styles/navbar.css'

const Navbar = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('data test:', data)
  }

  return (
    <Container>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a
            className='navbar-brand'
            href='#'
          >Series whit React <TbMovie /> <FaReact />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor02'>
            {/* <ul className='navbar-nav me-auto' /> */}
            <form
              id='form-search'
              className='d-flex'
              onSubmit={handleSubmit}
            >
              <div id='conrainer-search' className='input-group mb-0'>
                <input
                  id='input-search'
                  type='text'
                  className='form-control'
                  placeholder='Search Shows and People'
                  aria-label='Search Shows and People'
                  aria-describedby='button-addon2'
                  onChange={e => setData(e.target.value)}
                />
                <button
                  id='btn-search'
                  className='btn btn-secondary btn-success'
                  type='submit'
                >Search
                </button>
              </div>

            </form>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
