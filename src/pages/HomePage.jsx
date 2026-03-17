import React from 'react';
import {
  Hero,
  QuickAccess,
  NewsHighlight,
  AreasBlock,
  TransparencyBlock,
  TourismBlock,
  IndicatorsBlock,
  ContactBlock,
  MapBlock,
} from '../components/home';
import {
  homeHero,
  quickAccessItems,
  institutionalIndicators,
  transparencyBlock,
  tourismBlock,
} from '../data/home';
import { newsList } from '../data/news';
import { areasList } from '../data/areas';

export function HomePage() {
  return (
    <>
      <Hero
        title={homeHero.title}
        subtitle={homeHero.subtitle}
        description={homeHero.description}
        image={homeHero.image}
        imageAlt={homeHero.imageAlt}
      />
      <QuickAccess items={quickAccessItems} />
      <NewsHighlight news={newsList} />
      <AreasBlock areas={areasList} />
      <TransparencyBlock
        title={transparencyBlock.title}
        description={transparencyBlock.description}
        linkText={transparencyBlock.linkText}
        path={transparencyBlock.path}
      />
      <TourismBlock
        title={tourismBlock.title}
        description={tourismBlock.description}
        linkText={tourismBlock.linkText}
        path={tourismBlock.path}
      />
      <IndicatorsBlock items={institutionalIndicators} />
      <MapBlock />
      <ContactBlock />
    </>
  );
}
