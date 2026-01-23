import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { newsItems } from '../data/newsData';
import { useEffect } from 'react';

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === Number(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-display font-bold mb-4">Article Not Found</h2>
        <Link to="/" className="text-accent hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background pt-20 pb-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full px-4 pt-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
              <ArrowLeft className="w-4 h-4" />Back
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-12 border-b border-white/10 pb-8">
          <span className="bg-primary/90 text-white px-3 py-1 rounded backdrop-blur-sm">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{article.date}</span>
          </div>
          {article.author && (
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg prose-invert max-w-none text-left
          prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-headings:mb-6 prose-headings:mt-10
          prose-p:text-slate-300 prose-p:leading-loose prose-p:mb-6
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline hover:prose-a:text-white transition-colors
          prose-strong:text-white prose-strong:font-bold
          prose-li:text-slate-300 prose-li:marker:text-primary
          prose-blockquote:border-l-primary prose-blockquote:text-slate-200 prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:pl-6"
          dangerouslySetInnerHTML={{ __html: article.content || `<p>${article.excerpt}</p>` }}
        >
        </div>
      </div>
    </article>
  );
};

export default NewsArticle;
