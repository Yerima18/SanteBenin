import React from 'react';
import { useNews, NewsArticle } from '../hooks/useNews';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
    <div className="w-full h-44 bg-slate-200"></div>
    <div className="p-5 space-y-3">
      <div className="h-3 bg-slate-200 rounded w-1/3"></div>
      <div className="h-4 bg-slate-200 rounded w-full"></div>
      <div className="h-4 bg-slate-200 rounded w-4/5"></div>
      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
    </div>
  </div>
);

const ArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
  >
    {article.image ? (
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    ) : (
      <div className="w-full h-44 bg-gradient-to-br from-[#E8F5E9] to-[#008751]/10 flex items-center justify-center text-4xl">
        📰
      </div>
    )}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-[#008751] uppercase tracking-wider truncate max-w-[60%]">
          {article.source.name}
        </span>
        <span className="text-[11px] text-slate-400">{formatDate(article.publishedAt)}</span>
      </div>
      <h3 className="text-sm font-bold text-slate-800 leading-snug mb-2 line-clamp-3 group-hover:text-[#008751] transition-colors flex-1">
        {article.title}
      </h3>
      {article.description && (
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
          {article.description}
        </p>
      )}
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#008751] mt-auto">
        Lire la suite
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </a>
);

const Actualites: React.FC = () => {
  const { articles, loading, error } = useNews(9);

  return (
    <div className="animate-fade-in">

      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F5E9] text-[#006B3F] rounded-full text-xs font-bold mb-4 ring-1 ring-[#008751]/20">
            <span className="w-2 h-2 bg-[#008751] rounded-full animate-pulse"></span>
            Actualités en temps réel
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Actualités <span className="text-[#008751]">Santé Bénin</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Les dernières informations de santé publique au Bénin et en Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📡</div>
            <p className="text-slate-600 font-medium">Impossible de charger les actualités.</p>
            <p className="text-slate-400 text-sm mt-1">{error}</p>
          </div>
        )}

        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
              : articles.map((article, i) => <ArticleCard key={i} article={article} />)
            }
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-slate-600 font-medium">Aucune actualité disponible pour le moment.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Actualites;
