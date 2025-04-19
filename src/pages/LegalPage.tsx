import React from 'react';
import { FileText } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Legal Department</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">5.1 Gestion des politiques et de la gouvernance</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Chaque politique interne (protection des données, sécurité, éthique) est rédigée selon la Loi fédérale sur la protection des données (LPD), revue par le Délégué à la protection des données (DPD), puis validée par la Direction.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">5.2 Gestion des contrats</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Les contrats types (clients, fournisseurs, partenariats) sont gérés via une solution d'archivage électronique certifiée e-archivage Suisse. Chaque nouveau contrat est établi à partir du modèle standard, négocié, puis signé électroniquement via SwissID ou Certigna.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">5.3 Conformité et gestion des incidents</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Le service juridique surveille les évolutions légales fédérales (Code des obligations, Loi sur les sociétés anonymes) et cantonales (règlement genevois sur l'autorisation d'exercer). Des bulletins d'information sont diffusés mensuellement.
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

export default LegalPage;