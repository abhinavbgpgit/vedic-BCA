import Navbar from './components/Navbar';
import Campus from './pages/Campus';
import Events from './pages/Events';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Syllabus from './pages/Syllabus';
import Result from './pages/Result';
import ExamPage from './pages/ExamPage';
import { useLocation } from 'react-router-dom';

function App() {
 
const location=useLocation();

const isHome=location.pathname;

  return (
    <>    
 { isHome!='/' && ( <Navbar/> )} 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/campus" element={<Campus/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/syllabus" element={<Syllabus/>}></Route>
      <Route path="/result" element={<Result/>}></Route>
      <Route path="/exam" element={<ExamPage/>}></Route>
     </Routes>
    
    

   
    <div className="App ">
     hello
    </div> 
    </>
  );
}

export default App;
