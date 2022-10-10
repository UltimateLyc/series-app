import { useState } from 'react'
import Container from './Container'

const Navbar = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('data test:', data)
  }

  return (
    <Container>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a
            className='navbar-brand'
            href='#'
          >Series whit React
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
            <ul className='navbar-nav me-auto' />
            <form
              className='d-flex'
              onSubmit={handleSubmit}
            >
              <input
                className='form-control me-sm-5'
                type='text'
                placeholder='Search'
                // value={data}
                onChange={e => setData(e.target.value)}
              />
              <button
                className='btn btn-secondary my-2 my-sm-0'
                type='submit'
              >Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
