import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const NewsCard = ({ id, title, excerpt, date, image, category }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`} className="group bg-secondary/20 border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-colors block">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 "
        />
        <div className="absolute top-4 left-4">
          <span className="bg-background/80 text-accent text-xs font-bold px-2 py-1 rounded backdrop-blur-md border border-accent/20">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
          <Calendar className="w-3 h-3" />
          {date}
        </div>
        <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="text-sm font-medium text-white group-hover:text-accent transition-colors flex items-center gap-2">
          Read more <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
