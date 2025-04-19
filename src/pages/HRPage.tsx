import React from 'react';
import { FileText } from 'lucide-react';

const HRPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">HR Department</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">2.1 Intégration des nouveaux collaborateurs</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Avant le premier jour, un point est organisé avec le futur collaborateur pour collecter les pièces justificatives et confirmer les accès nécessaires. L'équipe informatique prépare les comptes, les outils et le badge d'accès.
          </p>
          <p className="text-gray-600 mb-4">
            Le premier jour inclut une session d'accueil générale présentant l'organisation, la culture d'entreprise, les valeurs et le règlement intérieur. Le nouveau collaborateur est mis en relation avec un parrain ou une marraine qui l'accompagnera durant ses premiers mois.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">2.2 Sortie de l'entreprise</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Lorsqu'une démission ou un départ est acté, la RH vérifie la date effective de séparation, planifie la passation des connaissances et informe l'équipe informatique afin de préparer la révocation des accès.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">2.3 Gestion de la paie et procédures administratives</h2>
        <div className="prose prose-blue">
          <p className="text-gray-600 mb-4">
            Chaque fin de mois, les collaborateurs saisissent leurs feuilles de temps dans le système RH. Les gestionnaires valident les heures et appliquent les règles de paie (heures supplémentaires, absences, primes) avant de lancer le calcul.
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

export default HRPage;