'use client';
import { Calendar, User, AlertCircle, TrendingUp } from 'lucide-react';
import { NewsItem } from '@/data/news';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Haute': return <AlertCircle className="text-red-500" size={16} />;
      case 'Moyenne': return <TrendingUp className="text-yellow-500" size={16} />;
      default: return null;
    }
  };

  const getPriorityBorder = (priority: string) => {
    switch (priority) {
      case 'Haute': return 'border-l-red-500';
      case 'Moyenne': return 'border-l-yellow-500';
      default: return 'border-l-blue-500';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 ${getPriorityBorder(news.priority)} p-6 hover:shadow-lg transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`${news.color} text-white p-2 rounded-lg`}>
            <span className="text-lg">{news.icon}</span>
          </div>
          <div>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {news.category}
            </span>
            {news.priority !== 'Normale' && (
              <div className="flex items-center mt-1">
                {getPriorityIcon(news.priority)}
                <span className="ml-1 text-xs font-medium text-gray-600">
                  Priorité {news.priority.toLowerCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
        {news.title}
      </h3>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {news.summary}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span className="truncate max-w-32">{news.source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}