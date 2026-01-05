import { MetadataRoute } from 'next';
import { getResources, getServices, getSolutions, site } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.site.url;
  const staticRoutes = [
    '',
    '/services',
    '/solutions',
    '/cloud-securite',
    '/ressources',
    '/a-propos',
    '/contact',
    '/politique-confidentialite',
    '/partenaires',
  ];

  const dynamicRoutes = [
    ...getServices().map((service) => `/services/${service.slug}`),
    ...getSolutions().map((solution) => `/solutions/${solution.slug}`),
    ...getResources().map((resource) => `/ressources/${resource.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
