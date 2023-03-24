import AppContainer from '@/components/AppContainer';
import AppHeader from '@/components/AppHeader';
import 'normalize.css/normalize.css';
import About from './screens/about';
import Contact from './screens/contact';
import Gallery from './screens/gallery';
import Home from './screens/home';

export default function App() {
  return (
    <AppContainer>
      <AppHeader/>

      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
    </AppContainer>
  )
}
