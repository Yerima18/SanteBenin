
import React from 'react';
import { Link } from 'react-router-dom';
import { Disease, Category } from '../types';

interface DiseaseCardProps {
  disease: Disease;
}

const categoryBorder: Record<string, string> = {
  [Category.INFECTIOUS]:          'border-l-[#E8112D]',
  [Category.CHRONIC]:             'border-l-amber-400',
  [Category.RESPIRATORY]:         'border-l-sky-400',
  [Category.WATERBORNE]:          'border-l-cyan-500',
  [Category.VACCINE_PREVENTABLE]: 'border-l-[#008751]',
  [Category.GENETIC]:             'border-l-purple-400',
  [Category.MATERNAL]:            'border-l-rose-400',
};

const categoryBadge: Record<string, string> = {
  [Category.INFECTIOUS]:          'bg-red-50 text-red-700',
  [Category.CHRONIC]:             'bg-amber-50 text-amber-700',
  [Category.RESPIRATORY]:         'bg-sky-50 text-sky-700',
  [Category.WATERBORNE]:          'bg-cyan-50 text-cyan-700',
  [Category.VACCINE_PREVENTABLE]: 'bg-[#E8F5E9] text-[#006B3F]',
  [Category.GENETIC]:             'bg-purple-50 text-purple-700',
  [Category.MATERNAL]:            'bg-rose-50 text-rose-700',
};

const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  const border = categoryBorder[disease.category] ?? 'border-l-slate-300';
  const badge  = categoryBadge[disease.category]  ?? 'bg-slate-50 text-slate-600';

  return (
    <Link
      to={`/maladies/${disease.slug}`}
      className={`group bg-white p-6 rounded-2xl border border-slate-200 border-l-4 ${border} shadow-sm hover:shadow-md hover:border-l-4 transition-all duration-300`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 ${badge} text-[10px] font-bold uppercase rounded tracking-wider`}>
          {disease.category}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-[#008751] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#008751] transition-colors">{disease.name}</h3>
      <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
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
