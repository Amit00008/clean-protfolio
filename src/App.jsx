import Navbar from './components/navbar';
import Cursor from './components/cursor';
import Hero from './components/hero';
import Skill from './components/skills';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import ProjectsTree from './components/projects';
import ContactMe from './components/contact';
import Footer from './components/footer';
import Experience from './components/expeience';
import ChatAssistant from './components/chatai';
import './App.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Refresh AOS to fix any potential issues
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg overflow-hidden ">
      {/* Stars Background */}
      

      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <ProjectsTree />
      <ContactMe />
      <Footer />
      <ChatAssistant />
      <Cursor />
    </div>
  );
}

export default App;
