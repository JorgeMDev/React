import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Routingpractice from './components/Routingpractice';


// const Home = (props) => { 
//   return (
//     <div>

//       <h1 style={{color: "red"}}>Home Component</h1>
//       <Link to={"/about"}>Go to About </Link>

//     </div>
//   );
// }

// const About = (props) => {
//   return (
//     <div>
//         <h1 style={{color: "blue"}}>About Component</h1>
//         <Link to={"/"}>Go Home</Link> 
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
     <h1>Welcome</h1>
      <Routes>
      <Route path="/:variable" element={<Routingpractice />}/>
        <Route path="/:variable/:color1" element={<Routingpractice />}/>
        <Route path="/:variable/:color1/:color2" element={<Routingpractice />}/>
      </Routes>
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
