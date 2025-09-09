'use client';
import { Calendar, Users, CheckCircle, Clock } from 'lucide-react';

interface Campaign {
  name: string;
  dates: string;
  target: string;
  status: string;
}

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-green-500';
      case 'Programmé': return 'bg-blue-500';
      case 'Terminé': return 'bg-gray-500';
      default: return 'bg-yellow-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En cours': return <CheckCircle size={16} />;
      case 'Programmé': return <Clock size={16} />;
      case 'Terminé': return <CheckCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-800">{campaign.name}</h3>
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-white text-sm ${getStatusColor(campaign.status)}`}>
          {getStatusIcon(campaign.status)}
          <span>{campaign.status}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{campaign.dates}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users size={16} className="mr-2" />
          <span className="text-sm">{campaign.target}</span>
        </div>
      </div>
      
      {campaign.status === 'En cours' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-medium">
            🏥 Rendez-vous dans le centre de santé le plus proche pour vacciner votre enfant
          </p>
        </div>
      )}
    </div>
  );
}