import React from 'react';
import { Link } from 'react-router-dom';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function NewsHighlight({ news, title = 'Noticias destacadas' }) {
  const featured = news.filter((n) => n.featured).slice(0, 3);
  const rest = news.filter((n) => !n.featured).slice(0, 2);

  return (
    <section className="news-highlight section" aria-label="Noticias">
      <div className="container">
        <h2 className="section__heading">{title}</h2>
        <div className="news-highlight__grid">
          {featured.map((item) => (
            <Link
              key={item.id}
              to={`/noticias/${item.slug}`}
              className="news-highlight__card news-highlight__card--featured"
            >
              <div className="news-highlight__image-wrap">
                <img src={item.image} alt={item.imageAlt || ''} className="news-highlight__img" loading="lazy" />
              </div>
              <div className="news-highlight__body">
                <span className="news-highlight__date">{formatDate(item.date)}</span>
                <h3 className="news-highlight__title">{item.title}</h3>
                <p className="news-highlight__excerpt">{item.excerpt}</p>
              </div>
            </Link>
          ))}
          {rest.map((item) => (
            <Link key={item.id} to={`/noticias/${item.slug}`} className="news-highlight__card">
              <div className="news-highlight__image-wrap news-highlight__image-wrap--small">
                <img src={item.image} alt={item.imageAlt || ''} className="news-highlight__img" loading="lazy" />
              </div>
              <div className="news-highlight__body">
                <span className="news-highlight__date">{formatDate(item.date)}</span>
                <h3 className="news-highlight__title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="news-highlight__more">
          <Link to="/noticias" className="btn btn--outline btn--md">
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>
  );
}
