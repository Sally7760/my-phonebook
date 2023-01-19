import { Button, Input } from 'antd';
import { useState } from 'react';
import './App.css';
import {Stack} from './Structures';

function App() {
  const [input,setInput] = useState<any>()
  const s = new Stack();
  
  return (
    <div className="App">
        <Input onChange={(event)=>setInput(event.target.value)} style={{
          width:'150px',
          marginTop:'10px'
        }}/>
        <Button onClick={()=>{s.push(input);console.log(s.isEmpty())}} type='primary'>push</Button>
        <Button onClick={()=>{console.log(s.whole())}} danger>pop</Button>
    </div>
  );
}

export default App;
