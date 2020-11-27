import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import BarSearch from './Components/BarSearch'
import axios from 'axios';

function App() {
  const [makes,setMakes]= useState([]);
    useEffect(()=>{
      async function loadData(){
        const response = await axios.get('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');
        setMakes(response.data);
      }
      loadData()
    },[makes])

  return (
    <Container>
     <BarSearch makes={makes} />
    </Container>
  );
}

export default App;
