import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const mockTrends = [
  { 
    id: 1,
    rank: 1,
    hashtag: 'dance2024', 
    description: 'Новый танцевальный челлендж покоряет платформу',
    videos: '2.5B',
    growth: '+125%',
    thumbnail: 'https://placehold.co/400x300/ff0050/white?text=%23dance2024'
  },
  { 
    id: 2,
    rank: 2,
    hashtag: 'cooking', 
    description: 'Быстрые рецепты за 60 секунд',
    videos: '1.8B',
    growth: '+98%',
    thumbnail: 'https://placehold.co/400x300/00f2ea/white?text=%23cooking'
  },
  { 
    id: 3,
    rank: 3,
    hashtag: 'travel', 
    description: 'Необычные места для путешествий',
    videos: '1.2B',
    growth: '+87%',
    thumbnail: 'https://placehold.co/400x300/ff0050/white?text=%23travel'
  },
  { 
    id: 4,
    rank: 4,
    hashtag: 'pets', 
    description: 'Милые моменты с домашними питомцами',
    videos: '987M',
    growth: '+76%',
    thumbnail: 'https://placehold.co/400x300/00f2ea/white?text=%23pets'
  },
  { 
    id: 5,
    rank: 5,
    hashtag: 'fitness', 
    description: 'Домашние тренировки для всех',
    videos: '765M',
    growth: '+65%',
    thumbnail: 'https://placehold.co/400x300/ff0050/white?text=%23fitness'
  },
];

export default function Trends() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-6 px-4">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="TrendingUp" size={28} className="text-primary" />
          <h1 className="text-2xl font-bold">Тренды</h1>
        </div>

        <div className="space-y-4">
          {mockTrends.map((trend) => (
            <div 
              key={trend.id} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 aspect-[4/3] sm:aspect-auto bg-muted overflow-hidden">
                  <img 
                    src={trend.thumbnail} 
                    alt={trend.hashtag} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {trend.rank}
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg mb-1">#{trend.hashtag}</h3>
                      <p className="text-sm text-muted-foreground">{trend.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Video" size={16} className="text-muted-foreground" />
                      <span className="font-medium">{trend.videos}</span>
                      <span className="text-muted-foreground">видео</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="TrendingUp" size={16} className="text-accent" />
                      <span className="font-medium text-accent">{trend.growth}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      В тренде
                    </span>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
