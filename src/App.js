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
    <Container data-testid="app">
      <BarSearch makes={makes} />
    </Container>
  );
}

//REMOVER
exports.fn = arg => {
  if (arg < 0) return 0;
  return arg + 1;
};

export default App;
