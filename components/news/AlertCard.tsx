'use client';
import { AlertTriangle, Info, Clock } from 'lucide-react';
import { Alert } from '@/data/news';

interface AlertCardProps {
  alert: Alert; // Single alert object (type, title, message, date, etc.)
}

export default function AlertCard({ alert }: AlertCardProps) {
  // Function to configure styles & icons depending on alert type
  const getAlertConfig = (type: string) => {
    switch (type) {
      case 'urgent':
        return {
          icon: <AlertTriangle size={20} />,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
          badgeColor: 'bg-red-500'
        };
      case 'warning':
        return {
          icon: <Clock size={20} />,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600',
          badgeColor: 'bg-yellow-500'
        };
      default: // info (default)
        return {
          icon: <Info size={20} />,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600',
          badgeColor: 'bg-blue-500'
        };
    }
  };

  const config = getAlertConfig(alert.type);

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4`}>
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className={`${config.iconColor} mt-0.5`}>
          {config.icon}
        </div>
        
        {/* Alert content */}
        <div className="flex-1">
          {/* Title + Badge */}
          <div className="flex items-center justify-between mb-2">
            <h4 className={`font-semibold ${config.textColor}`}>
              {alert.title}
            </h4>
            <span className={`${config.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium`}>
              {alert.type === 'urgent' 
                ? 'URGENT' 
                : alert.type === 'warning' 
                ? 'ATTENTION' 
                : 'INFO'}
            </span>
          </div>
          
          {/* Message */}
          <p className={`${config.textColor} text-sm mb-3`}>
            {alert.message}
          </p>
          
          {/* Footer: Date + Regions */}
          <div className="flex items-center justify-between text-xs">
            {/* Date */}
            <span className={`${config.textColor} opacity-75`}>
              📅 {alert.date}
            </span>

            {/* Regions (max 2 displayed, rest collapsed into "+X autres") */}
            {alert.regions && (
              <div className="flex flex-wrap gap-1">
                {alert.regions.slice(0, 2).map((region, index) => (
                  <span
                    key={index}
                    className={`bg-white ${config.textColor} px-2 py-1 rounded-full text-xs`}
                  >
                    {region}
                  </span>
                ))}
                {alert.regions.length > 2 && (
                  <span className={`${config.textColor} opacity-75`}>
                    +{alert.regions.length - 2} autres
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
