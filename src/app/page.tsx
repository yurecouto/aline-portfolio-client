import ScreensContainer from '@/components/ScreensContainer';
import Header from '@/components/Header';
import 'normalize.css/normalize.css';
import About from './screens/about';
import Contact from './screens/contact';
import Gallery from './screens/gallery';
import Home from './screens/home';

export default function App() {
  return (
    <>
      <Header/>

      <ScreensContainer>
        <Home/>
        <About/>
        <Gallery/>
        <Contact/>
      </ScreensContainer>
    </>
  )
}
