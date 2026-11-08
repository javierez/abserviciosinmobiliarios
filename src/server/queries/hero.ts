import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Pamplona"] as string[];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Protegemos lo que has construido. Potenciamos su valor.",
  "subtitle": "Inmobiliaria boutique en Pamplona con más de 50 años de historia familiar. Gestión integral 360° de tu patrimonio inmobiliario con un único interlocutor experto.",
  "contactButton": "Valoración gratuita",
  "backgroundType": "image",
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/hero.jpg",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/hero.jpg",
  "type": "image"
}],
  "backgroundVideo": "",
  "findPropertyButton": "Ver inmuebles"
} as HeroProps | null;
}
