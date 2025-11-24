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
      "Management system specialized in optimizing the complete sales process. It integrally manages available inventory, customer tracking, and contract generation. Its robust monolithic architecture guarantees fast and reliable operations throughout the entire commercial cycle.",
  },
  {
    link: "https://github.com/JoseCarlosGarcia/dealernode-backend",
    title: "Dealernode",
    description:
      "Car dealership management platform built as a well-structured monolithic application. Designed for maximum reliability, it implements a comprehensive suite of automated tests and integrates with external APIs like Stripe for payment processing. This robust approach ensures a maintainable, easily testable system ready to scale in complex environments.",
  },
  {
    link: "https://github.com/JoseCarlosGarcia/clear-accounts-back",
    title: "ClearAccounts",
    description:
      "A personal and collaborative financial management system that allows users to manage both individual and shared accounts. It offers full control over transactions, with customizable categories and advanced filters for detailed analysis. It provides a consolidated view of financial health, making both individual and group management easier.",
  },
  {
    link: "https://github.com/JoseCarlosGarcia/diversity-impact",
    title: "Diversity Impact",
    description:
      "New evaluation model for decision forests that predicts the diversity metric with the highest correlation to effectiveness, with 80% accuracy. The system identifies how diversity affects predictive performance (0-1 scale), outperforming traditional metrics with 10% improvements.",
  },
];
