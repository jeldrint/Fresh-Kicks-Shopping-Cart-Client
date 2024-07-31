import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-between items-center'>
        <Header />
        <Footer />
    </div>
  )
}

export default App
