import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsMain from './NewsMain';
import { newsItems } from '../data/newsData';

const News = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter only main news for the carousel
  const carouselItems = newsItems.filter(item => item.main);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Assuming width of billboard + gap, but billboard is likely full width or flexible.
      // Since it's a carousel of full-width items, likely want to scroll by clientWidth
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-slate-900/40">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">What's going on</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
             {/* Navigation Buttons for Carousel */}
             <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="p-2 rounded-full border border-white/10 bg-slate-900/50 hover:bg-primary hover:border-primary transition-all text-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2 rounded-full border border-white/10 bg-slate-900/50 hover:bg-primary hover:border-primary transition-all text-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <Link to="/news" className="flex items-center gap-2 text-accent hover:text-white transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative group/carousel">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselItems.map((story) => (
              <div key={story.id} className="min-w-full lg:min-w-[calc(100%-48px)] snap-center">
                 {/* Reusing NewsMain for the large format */}
                <NewsMain 
                  id={story.id}
                  title={story.title}
                  excerpt={story.excerpt}
                  date={story.date}
                  image={story.image}
                  category={story.category}
                />
              </div>
            ))}
          </div>
          
          <Link to="/news" className="sm:hidden w-full flex items-center justify-center gap-2 text-accent py-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors mt-8">
              View all news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
