
import { useState } from 'react';
import './App2.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 2000);

  }
 
  const toggleMode=()=>{
   
    if(mode==='light'){
    
      setMode("dark");
    
      document.body.style.backgroundColor="#042743";
      document.title="TextUtils-DarkMode";
      showAlert("Dark Mode has Been Enable",'success');
      

    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.title="TextUtils-LightMode";
      showAlert("Light Mode has Been Enable",'success');
     
    }
  }
  return (
    <> 
   
    <Navbar title="TeXtCouNTer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
          <TextForm heading="Enter the text to Analyze Below" mode={mode} showAlert={showAlert} />
           
          
      </div>
      
  
   </>
  
  );
}

export default App;

