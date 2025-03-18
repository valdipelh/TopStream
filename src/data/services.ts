import kinopoisk from './services/kinopoisk.json';
import ivi from './services/ivi.json';
import wink from './services/wink.json';
import okko from './services/okko.json';
import kion from './services/kion.json';
import start from './services/start.json';
import premier from './services/premier.json';
import moreTv from './services/more-tv.json';
import amediateka from './services/amediateka.json';
import megogo from './services/megogo.json';
import viju from './services/viju.json';
import serialspace from './services/serialspace.json';

export const services = [
  kinopoisk,
  ivi,
  wink,
  okko,
  kion,
  start,
  premier,
  moreTv,
  amediateka,
  megogo,
  viju,
  serialspace
];

export type Service = typeof services[0];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getTopServices(count: number): Service[] {
  return [...services]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}

export function getSortedServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}