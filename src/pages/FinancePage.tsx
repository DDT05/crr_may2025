import React from 'react';
import { FileText } from 'lucide-react';

const FinancePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Finance Department</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">4.1 Contrôle interne et audit</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Chaque mois, les écritures du grand livre sont examinées et rapprochées des relevés bancaires. Les contrôles sont structurés conformément aux Swiss GAAP FER et incluent la séparation des tâches : saisie, validation et exécution des paiements ne peuvent être réalisées par une seule personne.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">4.2 Gestion de la trésorerie</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Le modèle de flux de trésorerie est mis à jour chaque semaine en comparant les encaissements et décaissements planifiés. Des analyses de scénario anticipent les besoins de liquidités et optimisent le besoin en fonds de roulement.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">4.3 Fournisseurs et clients</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Les factures fournisseurs sont traitées selon un processus de rapprochement tripartite (commande, réception et facture) et validées par un signataire habilité selon le règlement des délégations de signature du conseil d'administration.
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

export default FinancePage;