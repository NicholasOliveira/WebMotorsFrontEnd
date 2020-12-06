import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Container } from './styles';
import BarSearch from './Components/SearchBar';

Sentry.init({
  dsn: 'https://dc9c71e4849f4af1824b50efb35fe674@o486613.ingest.sentry.io/5546060',
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

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

export default App;
