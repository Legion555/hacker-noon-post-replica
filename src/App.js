//components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import RelatedPosts from './components/RelatedPosts';
import Tags from './components/Tags';
import Join from './components/Join';
import Footer from './components/Footer';
//redux
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react';


function App() {
  const theme = useSelector(state => state.theme)
  const [themeStyle, setThemeStyle] = useState('')

  useEffect(() => {
    if (theme === 'light') {
        return setThemeStyle('text-gray-800 bg-gray-100')
    } else if (theme === 'dark') {
        return setThemeStyle('text-gray-100 bg-gray-800')
    }
  }, [theme])  

  return (
    <div className={`w-full ${themeStyle}`}>
      <Nav />
      <div className="w-full lg:w-8/12 mx-auto mt-8 px-2">
        <Hero />
        <Content />
        <ContentFooter />
        <RelatedPosts />
        <Tags />
        <Join />
      </div>
      <Footer />
    </div>
  );
}

export default App;
