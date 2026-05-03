import { tripContent as content } from './content';
import './responsive.css';
import { Nav, Hero, Why, Days, Gallery, Footer } from './sections';
import './App.css';

function App() {
  return (
    <>
      <Nav content={content.nav} />
      <Hero content={content.hero} />
      <Days content={content.days} />
      <Why content={content.why} />
      <Gallery content={content.gallery} />
      <Footer content={content.footer} />
    </>
  );
}

export default App;
