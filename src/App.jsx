import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';
import { Seo } from './components/common/Seo';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Seo
          title="Municipalidad de Catriel - Río Negro, Argentina"
          description="Portal oficial de la Municipalidad de Catriel. Trámites, noticias, transparencia y servicios al vecino. Capital Provincial del Petróleo."
        />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
