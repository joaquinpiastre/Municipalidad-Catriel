import React, { useState, useMemo } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { newsList, newsCategories, getNewsBySlug } from '../data/news';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function NoticiasList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    let list = [...newsList];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          (n.excerpt && n.excerpt.toLowerCase().includes(q)) ||
          (n.tags && n.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    if (category) {
      list = list.filter((n) => n.category === category);
    }
    return list;
  }, [search, category]);

  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/noticias', label: 'Noticias' }]} />
        <SectionTitle title="Noticias y novedades" subtitle="Últimas noticias de la gestión municipal." />
        <div className="tramites-filters">
          <input
            type="search"
            placeholder="Buscar noticias..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="tramites-search"
            aria-label="Buscar noticias"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="tramites-select"
            aria-label="Categoría"
          >
            <option value="">Todas las categorías</option>
            {newsCategories.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="news-grid">
          {filtered.map((item) => (
            <Link key={item.id} to={`/noticias/${item.slug}`} className="news-card">
              <div className="news-card__image-wrap">
                <img src={item.image} alt={item.imageAlt || ''} loading="lazy" />
              </div>
              <div className="news-card__body">
                <span className="news-card__date">{formatDate(item.date)}</span>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__excerpt">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="state-empty">No se encontraron noticias.</p>
        )}
      </div>
    </>
  );
}

function NoticiaDetailPage() {
  const { slug } = useParams();
  const news = getNewsBySlug(slug);

  if (!news) {
    return (
      <div className="container page-content">
        <p>Noticia no encontrada.</p>
        <Link to="/noticias">Volver a Noticias</Link>
      </div>
    );
  }

  const breadcrumbs = [
    { path: '/', label: 'Inicio' },
    { path: '/noticias', label: 'Noticias' },
    { path: `/noticias/${news.slug}`, label: news.title },
  ];

  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={breadcrumbs} />
        <article className="news-article">
          <header className="news-article__header">
            <span className="news-article__date">{formatDate(news.date)}</span>
            <h1 className="news-article__title">{news.title}</h1>
            {news.tags && news.tags.length > 0 && (
              <div className="news-article__tags">
                {news.tags.map((t) => (
                  <span key={t} className="news-article__tag">{t}</span>
                ))}
              </div>
            )}
          </header>
          <div className="news-article__image-wrap">
            <img src={news.image} alt={news.imageAlt || ''} />
          </div>
          <div className="prose news-article__body">
            {news.body && news.body.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

export function NoticiasPage() {
  return (
    <>
      <PageBanner
        title="Noticias"
        subtitle="Novedades de la gestión municipal"
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />
      <Routes>
        <Route index element={<NoticiasList />} />
        <Route path=":slug" element={<NoticiaDetailPage />} />
      </Routes>
    </>
  );
}
