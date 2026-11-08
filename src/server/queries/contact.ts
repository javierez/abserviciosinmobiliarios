

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "map": true,
  "mail": true,
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website/contacto.jpg",
  "phone": true,
  "title": "Contáctanos",
  "address": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina Pamplona",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Avda.%20P%C3%ADo%20XII%2C%2024%2C%20trasera%2C%20bajo%2C%20Pamplona%2C%20Navarra%2C%2031008",
  "address": {
  "city": "Pamplona",
  "state": "Navarra",
  "street": "Avda. Pío XII, 24, trasera, bajo",
  "country": "España",
  "postalCode": "31008"
},
  "isDefault": true,
  "phoneNumbers": {
  "main": "+34606841009"
},
  "scheduleInfo": {
  "sunday": "",
  "saturday": "",
  "weekdays": ""
},
  "emailAddresses": {
  "info": "gestion@ab-inmobiliaria.es"
}
}],
  "schedule": false,
  "subtitle": "Cuéntanos qué necesitas y te acompañamos en cada paso.",
  "messageForm": true
} as ContactProps | null;
}

