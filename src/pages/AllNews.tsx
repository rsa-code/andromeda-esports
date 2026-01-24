 import { newsItems } from '../data/newsData';
import NewsMain from '../components/NewsMain';
import NewsCard from '../components/NewsCard';
import { useEffect } from 'react';

const AllNews = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const latestNews = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredStory = latestNews[0];
  const gridStories = latestNews.slice(1);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-display font-bold text-white mb-4">News</h1>
          <p className="text-slate-400 text-lg">Latest updates from the team.</p>
        </div>

        <div className="space-y-12">
          {/* Featured Article */}
          {featuredStory && (
            <NewsMain 
              id={featuredStory.id}
              title={featuredStory.title}
              excerpt={featuredStory.excerpt}
              date={featuredStory.date}
              image={featuredStory.image}
              category={featuredStory.category}
            />
          )}

          {/* All Other Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridStories.map((story) => (
              <NewsCard 
                key={story.id}
                id={story.id}
                title={story.title}
                excerpt={story.excerpt}
                date={story.date}
                image={story.image}
                category={story.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
