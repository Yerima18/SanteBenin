'use client';
import { Shield, Gift, MapPin, Users, AlertTriangle, Phone } from 'lucide-react';
import { vaccinationSchedule, vaccinationInfo } from '@/data/vaccination';
import VaccineCard from '@/components/vaccination/VaccineCard';
import CampaignCard from '@/components/vaccination/CampaignCard';

export default function VaccinationSection() {
  return (
    <div className="space-y-8">
      {/* ===== Header section ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">💉 Vaccination au Bénin</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Programme Élargi de Vaccination (PEV) - Protégez vos enfants avec les vaccins gratuits 
          disponibles dans tous les centres de santé publics du Bénin.
        </p>
      </div>

      {/* ===== Key vaccination info (3 cards) ===== */}
      {/* Highlights: free vaccines, mandatory law, national target coverage */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <Gift className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="font-bold text-green-800 mb-2">100% Gratuit</h3>
          <p className="text-green-700 text-sm">
            Tous les vaccins du PEV sont gratuits dans les centres publics
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <Shield className="mx-auto text-blue-600 mb-3" size={32} />
          <h3 className="font-bold text-blue-800 mb-2">Obligatoire</h3>
          <p className="text-blue-700 text-sm">
            Vaccination obligatoire selon la loi béninoise
          </p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
          <Users className="mx-auto text-purple-600 mb-3" size={32} />
          <h3 className="font-bold text-purple-800 mb-2">95% Objectif</h3>
          <p className="text-purple-700 text-sm">
            Couverture vaccinale nationale visée
          </p>
        </div>
      </div>

      {/* ===== Vaccination schedule ===== */}
      {/* Iterates over vaccinationSchedule array and displays each entry with VaccineCard */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-8">
          <Shield className="text-blue-600 mr-3" size={32} />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Calendrier de Vaccination - PEV Bénin
            </h3>
            <p className="text-gray-600">
              Suivez ce calendrier pour protéger votre enfant contre 12 maladies graves
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {vaccinationSchedule.map((schedule, index) => (
            <VaccineCard key={schedule.id} schedule={schedule} index={index} />
          ))}
        </div>
      </div>

      {/* ===== Current vaccination campaigns ===== */}
      {/* Uses CampaignCard to show vaccination initiatives in 2024 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Users className="text-orange-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            Campagnes de Vaccination 2024
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {vaccinationInfo.campaigns.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} />
          ))}
        </div>
      </div>

      {/* ===== Where to get vaccinated ===== */}
      {/* Two columns: health centers & required documents */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <MapPin className="text-green-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            Où se faire vacciner au Bénin ?
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: types of public health centers */}
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Centres de santé publics</h4>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Shield className="text-green-600 mr-3" size={20} />
                <div>
                  <p className="font-medium text-green-800">Centres de santé communautaires</p>
                  <p className="text-green-600 text-sm">Vaccination de routine gratuite</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Shield className="text-blue-600 mr-3" size={20} />
                <div>
                  <p className="font-medium text-blue-800">Hôpitaux départementaux</p>
                  <p className="text-blue-600 text-sm">Vaccination et rattrapage</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Shield className="text-purple-600 mr-3" size={20} />
                <div>
                  <p className="font-medium text-purple-800">Campagnes mobiles</p>
                  <p className="text-purple-600 text-sm">Vaccination dans les villages</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column: required documents */}
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Documents nécessaires</h4>
            <div className="space-y-3">
              {/* List of documents */}
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="font-medium text-yellow-800 mb-2">📄 À apporter:</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Carnet de vaccination (si disponible)</li>
                  <li>• Acte de naissance ou attestation</li>
                  <li>• Carnet de santé de l'enfant</li>
                </ul>
              </div>
              
              {/* Important note: vaccination without docs is still possible */}
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="font-medium text-red-800 flex items-center mb-2">
                  <AlertTriangle size={16} className="mr-1" />
                  Important:
                </p>
                <p className="text-red-700 text-sm">
                  Même sans documents, votre enfant peut être vacciné. 
                  Ne reportez jamais la vaccination !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Useful contacts ===== */}
      {/* Ministry hotline and PEV program contact */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            <Phone className="mr-3 text-blue-600" size={32} />
            Contacts Vaccination - Bénin
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hotline info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-800 mb-3">📞 Ligne info vaccination</h4>
            <p className="text-blue-600 text-lg font-bold mb-2">166 (gratuit)</p>
            <p className="text-blue-700 text-sm">
              Informations sur les vaccins et localisation des centres
            </p>
          </div>
          
          {/* Ministry contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-800 mb-3">🏥 Programme Élargi de Vaccination</h4>
            <p className="text-green-600 text-lg font-bold mb-2">+229 21 33 35 87</p>
            <p className="text-green-700 text-sm">
              Ministère de la Santé - Direction de la Santé Familiale
            </p>
          </div>
        </div>
        
        {/* Footer reminder */}
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
          <p className="text-green-800 font-medium">
            💉 <strong>Rappel:</strong> La vaccination sauve des vies ! 
            Respectez le calendrier vaccinal pour protéger vos enfants contre 12 maladies graves.
          </p>
        </div>
      </div>
    </div>
  );
}
