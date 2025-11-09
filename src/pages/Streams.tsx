import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const mockStreams = [
  {
    id: 1,
    username: '@streamer1',
    title: 'Рисую арт в прямом эфире! 🎨',
    viewers: 12543,
    isLive: true,
    thumbnail: 'https://placehold.co/400x300/ff0050/white?text=LIVE+Stream+1',
    hasAI: false,
  },
  {
    id: 2,
    username: '@streamer2',
    title: 'Играю в новую игру с ИИ помощником',
    viewers: 8934,
    isLive: true,
    thumbnail: 'https://placehold.co/400x300/00f2ea/white?text=LIVE+Stream+2',
    hasAI: true,
  },
  {
    id: 3,
    username: '@streamer3',
    title: 'Готовлю вместе с вами! 🍳',
    viewers: 15678,
    isLive: true,
    thumbnail: 'https://placehold.co/400x300/ff0050/white?text=LIVE+Stream+3',
    hasAI: false,
  },
  {
    id: 4,
    username: '@streamer4',
    title: 'ИИ генерирует музыку в реальном времени',
    viewers: 6234,
    isLive: true,
    thumbnail: 'https://placehold.co/400x300/00f2ea/white?text=LIVE+Stream+4',
    hasAI: true,
  },
];

export default function Streams() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-6 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Icon name="Radio" size={28} className="text-primary" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            </div>
            <h1 className="text-2xl font-bold">Прямые эфиры</h1>
          </div>
          <Badge variant="destructive" className="gap-1 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockStreams.map((stream) => (
            <div 
              key={stream.id} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={stream.thumbnail} 
                  alt={stream.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge variant="destructive" className="gap-1 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    LIVE
                  </Badge>
                  {stream.hasAI && (
                    <Badge className="bg-purple-600 hover:bg-purple-700 font-bold">
                      AI
                    </Badge>
                  )}
                </div>

                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                  <Icon name="Eye" size={14} />
                  <span>{stream.viewers.toLocaleString()}</span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-white" />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-white">
                      {stream.username.slice(1, 3).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate mb-1">{stream.title}</h3>
                    <p className="text-sm text-muted-foreground">{stream.username}</p>
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
