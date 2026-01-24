import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsMainProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const NewsMain = ({ id, title, excerpt, date, image, category }: NewsMainProps) => {
  return (
    <Link to={`/news/${id}`} className="group relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer block">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full sm:w-2/3">
        <div className="flex items-center gap-4 mb-4 text-sm font-medium">
          <span className="bg-primary/90 text-white px-3 py-1 rounded backdrop-blur-sm">
            {category}
          </span>
          <span className="flex items-center gap-2 text-slate-300">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-slate-300 text-lg mb-6 line-clamp-2">
          {excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-accent font-semibold">
          Read Full Story <ArrowRight className="w-5 h-5" />
        </span>
      </div>
    </Link>
  );
};

export default NewsMain;
