import siteFr from '@/content/site.fr.json';

export type NavItem = { label: string; href: string };
export type Stat = { label: string; value: string };
export type Section = { title: string; content: string };
export type CardItem = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  sections?: Section[];
  date?: string;
  content?: string;
};
export type Partner = { name: string; logo: string };

export const site = siteFr;

export const getServices = () => site.services;
export const getSolutions = () => site.solutions;
export const getResources = () => site.resources;

export const getServiceBySlug = (slug: string) =>
  site.services.find((service) => service.slug === slug);

export const getSolutionBySlug = (slug: string) =>
  site.solutions.find((solution) => solution.slug === slug);

export const getResourceBySlug = (slug: string) =>
  site.resources.find((resource) => resource.slug === slug);
