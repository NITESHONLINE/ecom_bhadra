import { FaShare } from 'react-icons/fa'
import './App.css'
import { CiBookmark } from 'react-icons/ci'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/Layout/Layout'
import Blog from './pages/Blog'

// alt + shift + o => remove unwanted imports 
function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
