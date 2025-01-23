import { Info, Cards } from './components/homepage'
import { Header, PMA } from './components/shared'

function App() {
  return (
    <main className='relative overflow-hidden'>
      <Header />
      <Info />
      <Cards />
      <PMA />
    </main>
  )
}

export default App
