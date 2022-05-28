import {InputText, } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
 
 

import "primereact/resources/themes/arya-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  
import { useRef, useState } from 'react';                            //icons
 









import './App.css';


function App() {

  const [text, setText] = useState(' ');
  const toastRef = useRef ( );
  const onButtonClick = () => {
    if (text) 
      toastRef.current.show({severity: 'info', summary: 'Sucess', detail: text });
       else
       toastRef.current.show({severity: 'error', summary: 'error', detail: 'Value is required'
    });
  };


  return (

  <div className='App'>
    <Toast ref={toastRef} />
    <header className='App-header'>
      <span className="p-float-label">
        <InputText id="input_text" value={text} onChange={e=>setText(e.target.value)}/>
        <label htmlFor='input_text'>Name</label>
      </span>

      <br/>
     <Button type = "button" label= "Submit"  icon="pi pi-check" onClick={onButtonClick}></Button>
    </header>
  </div>
  );
}






export default App