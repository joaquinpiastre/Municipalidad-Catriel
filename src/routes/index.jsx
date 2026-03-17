import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout';

const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })));
const MunicipalidadPage = lazy(() => import('../pages/MunicipalidadPage').then((m) => ({ default: m.MunicipalidadPage })));
const GestionPage = lazy(() => import('../pages/GestionPage').then((m) => ({ default: m.GestionPage })));
const TramitesPage = lazy(() => import('../pages/TramitesPage').then((m) => ({ default: m.TramitesPage })));
const NoticiasPage = lazy(() => import('../pages/NoticiasPage').then((m) => ({ default: m.NoticiasPage })));
const TransparencyPage = lazy(() => import('../pages/TransparencyPage').then((m) => ({ default: m.TransparencyPage })));
const TurismoPage = lazy(() => import('../pages/TurismoPage').then((m) => ({ default: m.TurismoPage })));
const DesarrolloLocalPage = lazy(() => import('../pages/DesarrolloLocalPage').then((m) => ({ default: m.DesarrolloLocalPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function PageLoading() {
  return (
    <div className="state-loading" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>Cargando...</p>
    </div>
  );
}

export function AppRoutes() {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/municipalidad/*" element={<MunicipalidadPage />} />
          <Route path="/gestion/*" element={<GestionPage />} />
          <Route path="/tramites-servicios/*" element={<TramitesPage />} />
          <Route path="/noticias/*" element={<NoticiasPage />} />
          <Route path="/boletin-transparencia/*" element={<TransparencyPage />} />
          <Route path="/turismo" element={<TurismoPage />} />
          <Route path="/desarrollo-local" element={<DesarrolloLocalPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}
