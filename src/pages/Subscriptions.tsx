import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const mockSubscriptions = [
  { 
    id: 1,
    username: '@creator1', 
    followers: '1.2M', 
    isFollowing: true,
    latestVideo: 'https://placehold.co/300x400/ff0050/white?text=Video+1',
    views: '125K',
    timeAgo: '2 часа назад'
  },
  { 
    id: 2,
    username: '@creator2', 
    followers: '890K', 
    isFollowing: true,
    latestVideo: 'https://placehold.co/300x400/00f2ea/white?text=Video+2',
    views: '89K',
    timeAgo: '5 часов назад'
  },
  { 
    id: 3,
    username: '@creator3', 
    followers: '2.1M', 
    isFollowing: true,
    latestVideo: 'https://placehold.co/300x400/ff0050/white?text=Video+3',
    views: '234K',
    timeAgo: '1 день назад'
  },
  { 
    id: 4,
    username: '@creator4', 
    followers: '567K', 
    isFollowing: true,
    latestVideo: 'https://placehold.co/300x400/00f2ea/white?text=Video+4',
    views: '156K',
    timeAgo: '2 дня назад'
  },
];

export default function Subscriptions() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Подписки</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockSubscriptions.map((sub) => (
            <div key={sub.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[3/4] bg-muted cursor-pointer group">
                <img 
                  src={sub.latestVideo} 
                  alt="Latest video" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-white" />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm bg-black/60 px-2 py-1 rounded">
                  <Icon name="Eye" size={14} />
                  <span>{sub.views}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="w-10 h-10 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-white">
                      {sub.username.slice(1, 3).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{sub.username}</div>
                    <div className="text-xs text-muted-foreground">{sub.followers} подписчиков</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{sub.timeAgo}</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="rounded-full"
                  >
                    <Icon name="Bell" size={14} className="mr-1" />
                    Уведомления
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mockSubscriptions.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-muted-foreground opacity-30" />
            <h2 className="text-xl font-semibold mb-2">Нет подписок</h2>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на интересных создателей, чтобы видеть их контент
            </p>
            <Button>
              <Icon name="Search" size={18} className="mr-2" />
              Найти создателей
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
