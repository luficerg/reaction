import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "Navbar " 
      first = "Home" 
      second = "About me"/>
      
      <div className="container">
        {/* <Navbar/> */}
        <TextForm heading = "Analyze the Endurance Spin"/>
      </div>
      
    </>
    
  )
}

export default App;
