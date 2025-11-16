export interface Project {
  title: string;
  link: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    link: "https://github.com/JoseCarlosGarcia/autodirect-backend",
    title: "Autodirect",
    description:
      "AutoDirect es un sistema de gestión especializado en optimizar el proceso completo de ventas. Gestiona de forma integrada el inventario disponible, el seguimiento de clientes y la generación de contratos. Su arquitectura monolítica robusta garantiza operaciones rápidas y confiables durante todo el ciclo comercial.",
  },
  {
    link: "https://github.com/JoseCarlosGarcia/dealernode-backend",
    title: "Dealernode",
    description:
      "DealerNode es una plataforma de gestión para concesionarios construida como una aplicación monolítica bien estructurada. Diseñada para garantizar máxima confiabilidad, implementa una suite completa de tests automatizados y se integra con APIs externas como Stripe para la gestión de pagos. Este enfoque robusto asegura un sistema mantenible, fácil de probar y preparado para escalar en entornos complejos.",
  },
  {
    link: "https://github.com/JoseCarlosGarcia/clear-accounts-back",
    title: "ClearAccounts",
    description:
      "Sistema de gestión financiera personal y colaborativa que permite a los usuarios administrar sus cuentas individuales y compartidas. Ofrece un control total sobre transacciones, con categorización personalizable y filtros avanzados para un análisis detallado. Proporciona una visión consolidada de la salud financiera, facilitando la gestión tanto individual como en grupo.",
  },
];
