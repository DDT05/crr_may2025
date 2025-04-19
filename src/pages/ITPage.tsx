import React from 'react';
import { FileText } from 'lucide-react';

const ITPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">IT Department</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Gestion de l'infrastructure</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Les demandes de nouveaux serveurs ou machines virtuelles sont initiées via un ticket dans l'outil de gestion des services (Jira Service Desk). Après une évaluation des besoins de capacité et un arbitrage par l'architecte système, l'ingénieur infrastructure procède à la configuration réseau et à l'installation des logiciels de base.
          </p>
          <p className="text-gray-600 mb-4">
            La surveillance de l'infrastructure s'appuie sur un système d'alertes configuré dans Datadog et Prometheus. Les alertes de premier niveau (CPU, mémoire, espace disque) sont adressées à l'équipe de permanence via email, tandis que les incidents de second niveau (sécurité, dégradation de performances) déclenchent des notifications push sur le téléphone des ingénieurs concernés.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">1.2 Support technique</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Les utilisateurs ouvrent leurs demandes via le portail Jira, un email dédié ou le canal Slack « #it‑help ». Chaque ticket est trié selon quatre priorités (P1 à P4) et assigné aux ingénieurs de niveau 1 ou 2.
          </p>
          <p className="text-gray-600 mb-4">
            Les SLA sont définis comme suit : pour un incident critique (P1), la réponse doit intervenir dans l'heure et la résolution dans les quatre heures ; pour un incident majeur (P2), la réponse dans les quatre heures et la résolution sous vingt‑quatre heures.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">1.3 Développement logiciel</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Le cycle de vie du développement logiciel s'organise en cinq étapes : collecte et validation des besoins (création de tickets produits), conception technique (rédaction de spécifications et schémas d'architecture), implémentation (travail en branches Git, revues de code croisées), tests (unitaires, intégration, recette utilisateur) puis déploiement via un pipeline CI/CD.
          </p>
        </div>
      </section>

      <div className="mt-8 flex items-center text-sm text-gray-500">
        <FileText size={16} className="mr-2" />
        <span>Last updated: March 2024</span>
      </div>
    </div>
  );
};

export default ITPage;