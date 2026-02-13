
import React from 'react';
import { Link } from 'react-router-dom';
import { Disease } from '../types';

interface DiseaseCardProps {
  disease: Disease;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  return (
    <Link 
      to={`/maladies/${disease.slug}`}
      className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded tracking-wider">
          {disease.category}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{disease.name}</h3>
      <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
        {disease.overview}
      </p>
      <div className="flex flex-wrap gap-2">
        {disease.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] text-slate-400">#{tag}</span>
        ))}
      </div>
    </Link>
  );
};

export default DiseaseCard;
