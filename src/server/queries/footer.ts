
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "AB. ARTIBERRI SERVICIOS INMOBILIARIOS, S.L.",
  "description": "Inmobiliaria boutique en Pamplona. Protegemos lo que has construido y potenciamos su valor.",
  "socialLinks": {

},
  "officeLocations": [{
  "name": "Oficina Pamplona",
  "address": ["Avda. Pío XII, 24, trasera, bajo", "Pamplona, Navarra"],
  "phone": "+34606841009",
  "email": "gestion@ab-inmobiliaria.es"
}],
  "copyright": "© 2026 AB Servicios Inmobiliarios. Todos los derechos reservados."
} as FooterProps | null;
}
