import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Breadcrumbs, SectionTitle, PageBanner } from '../components/common';
import { institutionalIntro, intendentaMessage, organigrama, historyBlock, cartaOrganica } from '../data/institutional';

function MunicipalidadIndex() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/municipalidad', label: 'Municipalidad' }]} />
        <SectionTitle title={institutionalIntro.title} subtitle={institutionalIntro.subtitle} />
        <div className="prose">
          {institutionalIntro.body.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <section className="section">
          <h2>Perfil productivo y comunitario</h2>
          <p>
            Catriel es la Capital Provincial del Petróleo. La identidad local se construye sobre la energía, el trabajo, la cultura y el cuidado del ambiente. Desde el municipio promovemos el desarrollo sostenible y la cercanía con el vecino.
          </p>
        </section>
      </div>
    </>
  );
}

function IntendentaPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/municipalidad', label: 'Municipalidad' },
          { path: '/municipalidad/intendenta', label: 'Mensaje de la Intendenta' },
        ]} />
        <section className="intendenta-block">
          <div className="intendenta-block__grid">
            <div className="intendenta-block__image-wrap">
              <img src={intendentaMessage.image} alt={intendentaMessage.imageAlt} />
            </div>
            <div className="intendenta-block__content">
              <h1>{intendentaMessage.title}: {intendentaMessage.name}</h1>
              <div className="prose">
                {intendentaMessage.message.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function OrganigramaPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/municipalidad', label: 'Municipalidad' },
          { path: '/municipalidad/organigrama', label: 'Organigrama' },
        ]} />
        <h1>Organigrama municipal</h1>
        <p className="lead">{organigrama.description}</p>
        <ul className="organigrama-list">
          {organigrama.items.map((item, i) => (
            <li key={i}><strong>{item.role}:</strong> {item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function SecretariasPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/municipalidad', label: 'Municipalidad' },
          { path: '/municipalidad/secretarias', label: 'Secretarías' },
        ]} />
        <h1>Secretarías y direcciones</h1>
        <p>Estructura del Departamento Ejecutivo. [Placeholder: ampliar con datos oficiales.]</p>
      </div>
    </>
  );
}

function HistoriaPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/municipalidad', label: 'Municipalidad' },
          { path: '/municipalidad/historia', label: 'Historia de Catriel' },
        ]} />
        <h1>{historyBlock.title}</h1>
        <div className="prose">
          {historyBlock.body.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
}

function CartaOrganicaPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/municipalidad', label: 'Municipalidad' },
          { path: '/municipalidad/carta-organica', label: 'Carta Orgánica' },
        ]} />
        <h1>{cartaOrganica.title}</h1>
        <p>{cartaOrganica.description}</p>
        {cartaOrganica.fileUrl ? (
          <a href={cartaOrganica.fileUrl} className="btn btn--primary">Consultar Carta Orgánica</a>
        ) : (
          <p><em>[Placeholder: enlace al documento cuando esté disponible.]</em></p>
        )}
      </div>
    </>
  );
}

export function MunicipalidadPage() {
  return (
    <>
      <PageBanner
        title="Municipalidad"
        subtitle="Gobierno local de Catriel, Río Negro"
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
      />
      <Routes>
        <Route index element={<MunicipalidadIndex />} />
        <Route path="intendenta" element={<IntendentaPage />} />
        <Route path="organigrama" element={<OrganigramaPage />} />
        <Route path="secretarias" element={<SecretariasPage />} />
        <Route path="historia" element={<HistoriaPage />} />
        <Route path="carta-organica" element={<CartaOrganicaPage />} />
      </Routes>
    </>
  );
}
