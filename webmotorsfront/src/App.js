import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import BarSearch from './Components/SearchBar';

function App() {
  const [makes, setMakes] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await axios.get('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');
      setMakes(response.data);
    }
    loadData();
  }, [makes]);

  return (
    <Container>
      <BarSearch makes={makes} />
    </Container>
  );
}

export default App;
