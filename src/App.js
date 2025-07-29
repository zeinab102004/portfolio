
import { useState,useEffect }from 'react';
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(()=>{
    const handelScroll =()=>{
        if (window.scrollY>299) {
          setScrollPosition(1)
        }else{
          setScrollPosition(0)
        }
    };
    window.addEventListener('scroll',handelScroll)
    return () => {
      window.removeEventListener('scroll', handelScroll);
    };
  },[]);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="App container">
    <Header />
    <Hero />
    <div className='divider'/>
    <Main />
    <div className='divider'/>

    <Contact />
    <div className='divider'/>

    <Footer />
    <button style={{opacity:scrollPosition }} className='scroll-to-top' onClick={scrollToTop} ><KeyboardArrowUpIcon /></button>
    </div>
  );
}

export default App;
