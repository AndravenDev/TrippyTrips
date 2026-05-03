import { Analytics } from '@vercel/analytics/react';
import { tripContent as content } from './content';
import './responsive.css';
import { Nav, Hero, Days, Gallery, Rsvp, Footer } from './sections';
import './App.css';

function App() {
  return (
    <>
      <Nav content={content.nav} />
      <Hero content={content.hero} />
      <Days content={content.days} />
      {/* <Why content={content.why} /> */}
      <Gallery content={content.gallery} />
      <Rsvp content={content.rsvp} />
      <Footer content={content.footer} />
      <Analytics />
    </>
  );
}

export default App;
