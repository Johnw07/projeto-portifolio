import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Section } from './components/Section/Section.jsx'
import { About } from './components/About/about.jsx'

function App() {

  return (
    <>
      <Header>
      </Header>
      <div className='section-form'>
        <Section>
          <h2 className='section-h2'>
            Olá, eu sou João Washington
          </h2>
          <h3 className='section-h3'>
            Desenvolvedor Front-end
          </h3>
          <p className='section-p'>
            Criando experiências digitais incríveis com HTML, CSS e JavaScript
          </p>
        </Section>
      </div>
      <About>
      </About>
    </>
  )
}

export default App
