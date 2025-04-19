import React from 'react';
import { FileText } from 'lucide-react';

const MarketingPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Marketing Department</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">3.1 Gestion des opportunités commerciales</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Les leads sont capturés par divers canaux (formulaires web, salons, campagnes publicitaires) puis importés automatiquement dans le CRM. Les chargés de prospection (SDR) prennent contact pour qualifier le besoin selon les critères BANT (Budget, Autorité, Besoin, Timing) ou MEDDIC.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">3.2 Planification et exécution des campagnes publicitaires</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Le calendrier marketing annuel prévoit des objectifs précis (notoriété, génération de demande). Les budgets sont alloués par canal (SEA, display, retargeting) puis transformés en briefs créatifs transmis à l'agence.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">3.3 Animation des réseaux sociaux</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Un planning éditorial mensuel définit les thèmes et la fréquence de publication pour chaque plateforme. Les contenus sont rédigés, validés par l'équipe brand & compliance, puis programmés à l'aide d'un outil de gestion des réseaux sociaux.
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

export default MarketingPage;