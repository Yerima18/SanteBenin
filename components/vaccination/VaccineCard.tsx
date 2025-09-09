'use client';
import { Calendar, Syringe, AlertCircle } from 'lucide-react';
import { VaccineSchedule } from '@/data/vaccination';

interface VaccineCardProps {
  schedule: VaccineSchedule;
  index: number;
}

export default function VaccineCard({ schedule, index }: VaccineCardProps) {
  return (
    <div className={`relative border-l-4 pl-6 pb-8 ${
      schedule.important ? 'border-red-500' : 'border-blue-500'
    }`}>
      {/* Timeline dot */}
      <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
        schedule.important ? 'bg-red-500' : 'bg-blue-500'
      }`}>
        {index + 1}
      </div>
      
      {/* Age header */}
      <div className="flex items-center mb-4">
        <Calendar className="mr-2 text-gray-600" size={20} />
        <h3 className="text-xl font-bold text-gray-800">{schedule.age}</h3>
        {schedule.important && (
          <AlertCircle className="ml-2 text-red-500" size={20} />
        )}
      </div>
      
      {/* Vaccines grid */}
      <div className="grid md:grid-cols-2 gap-3">
        {schedule.vaccines.map((vaccine, vIndex) => (
          <div key={vIndex} className="bg-white rounded-lg border shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className={`w-3 h-3 rounded-full ${vaccine.color} mr-2`}></div>
              <h4 className="font-semibold text-gray-800">{vaccine.name}</h4>
            </div>
            <p className="text-sm text-gray-600">{vaccine.description}</p>
            <div className="flex items-center mt-2">
              <Syringe size={14} className="text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">GRATUIT</span>
            </div>
          </div>
        ))}
      </div>
      
      {schedule.important && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm font-medium">
            ⚠️ Vaccination cruciale - Ne pas manquer cette étape
          </p>
        </div>
      )}
    </div>
  );
}