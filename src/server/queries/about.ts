import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "team": [{
  "name": "Isabel Martínez",
  "role": "Directora"
}],
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/sobre-nosotros.jpg",
  "title": "Sobre Nosotros",
  "values": [{
  "icon": "Award",
  "title": "Profesionalidad",
  "description": "Experta, rigurosa y siempre accesible: alto nivel técnico con trato humano y próximo."
}, {
  "icon": "Handshake",
  "title": "Transparencia",
  "description": "Sin letra pequeña y sin prisas. Te explicamos cada paso y cada decisión."
}, {
  "icon": "Lock",
  "title": "Discreción",
  "description": "Tratamos tu patrimonio y tus datos con absoluta confidencialidad."
}, {
  "icon": "Sparkles",
  "title": "Excelencia",
  "description": "Una estética cuidada y una gestión resolutiva que convierte cada operación en una experiencia sin fricciones."
}],
  "content": "Somos AB Servicios Inmobiliarios, una inmobiliaria boutique con más de 50 años de historia familiar en Pamplona. No somos una franquicia ni una plataforma digital: somos un equipo con raíces, propósito y vocación de servicio, que acompaña a propietarios, inversores, compradores y familias en Pamplona y Navarra con cercanía y rigor.",
  "showKPI": true,
  "content2": "Nuestra propuesta es la gestión integral 360° de tu patrimonio inmobiliario con un único interlocutor experto en cada etapa. Valoración, marketing premium, asesoramiento jurídico, reforma e interiorismo, alquiler con selección de inquilinos y seguro de impago, broker hipotecario y posventa: todo bajo un mismo techo, con transparencia y estrategia.",
  "kpi1Data": "50+",
  "kpi1Name": "Años de experiencia",
  "kpi2Data": "100",
  "kpi2Name": "Reseñas en Google",
  "kpi3Data": "360°",
  "kpi3Name": "Gestión integral",
  "kpi4Data": "4,8/5",
  "kpi4Name": "Valoración en Google",
  "services": [{
  "icon": "Home",
  "title": "Venta premium"
}, {
  "icon": "ShieldCheck",
  "title": "Alquiler seguro"
}, {
  "icon": "TrendingUp",
  "title": "Asesoramiento al inversor"
}, {
  "icon": "Paintbrush",
  "title": "Reforma e interiorismo"
}, {
  "icon": "Landmark",
  "title": "Broker hipotecario"
}, {
  "icon": "Briefcase",
  "title": "Gestión patrimonial 360°"
}],
  "subtitle": "Protegemos lo que has construido. Potenciamos su valor.",
  "buttonName": "Habla con nosotros",
  "originsTitle": "De dónde venimos",
  "originsContent": "Nuestra historia empieza hace más de 50 años, cuando el abuelo fundó el negocio familiar partiendo de la chatarra hacia la fundición. Sus hijos continuaron la empresa con determinación, y hoy nuestras oficinas ocupan la ubicación original de aquella primera chatarrería. Años después, Isabel Martínez detectó la falta de profesionalidad y de asesoramiento real en el sector inmobiliario y dio un giro estratégico: en seis meses duplicó la facturación y en el primer año la cuadruplicó. Hoy somos una inmobiliaria boutique 360° consolidada en Pamplona y Navarra.",
  "extendedServices": [{
  "icon": "Home",
  "title": "Venta premium",
  "description": "Valoración estratégica, marketing de alto impacto y acompañamiento jurídico integral hasta la firma."
}, {
  "icon": "ShieldCheck",
  "title": "Alquiler seguro",
  "description": "Selección rigurosa de inquilinos, seguro de impago y gestión completa de incidencias."
}, {
  "icon": "TrendingUp",
  "title": "Asesoramiento al inversor",
  "description": "Inversión inmobiliaria con visión patrimonial a largo plazo, oportunidades fuera de mercado e informes de rentabilidad."
}, {
  "icon": "Paintbrush",
  "title": "Reforma e interiorismo",
  "description": "Ponemos en valor cada inmueble con reforma, interiorismo y home staging coordinados por nosotros."
}, {
  "icon": "Landmark",
  "title": "Broker hipotecario",
  "description": "Buscamos la financiación que mejor encaja contigo y la negociamos con las entidades."
}, {
  "icon": "Briefcase",
  "title": "Gestión patrimonial 360°",
  "description": "Diagnóstico patrimonial, plan de acción y gestión operativa sin que tengas que intervenir. Incluye posventa."
}],
  "aboutSectionTitle": "Nuestra Misión",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/nosotros-hero.jpg",
  "nosotrosPageTitle": "Sobre Nosotros",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/servicios-hero.jpg",
  "servicesPageTitle": "Nuestros Servicios",
  "maxServicesDisplayed": 6,
  "nosotrosPageSubtitle": "Más de 50 años de historia familiar al servicio de tu patrimonio en Pamplona y Navarra.",
  "servicesPageSubtitle": "Gestión integral 360° de tu patrimonio inmobiliario, con un único interlocutor experto en cada etapa.",
  "servicesSectionTitle": "Nuestros Servicios"
} as AboutProps | null;
}
