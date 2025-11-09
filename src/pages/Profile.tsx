import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockUserVideos = [
  { id: 1, thumbnail: 'https://placehold.co/300x400/ff0050/white?text=Video+1', views: '125K' },
  { id: 2, thumbnail: 'https://placehold.co/300x400/00f2ea/white?text=Video+2', views: '89K' },
  { id: 3, thumbnail: 'https://placehold.co/300x400/ff0050/white?text=Video+3', views: '234K' },
  { id: 4, thumbnail: 'https://placehold.co/300x400/00f2ea/white?text=Video+4', views: '156K' },
  { id: 5, thumbnail: 'https://placehold.co/300x400/ff0050/white?text=Video+5', views: '98K' },
  { id: 6, thumbnail: 'https://placehold.co/300x400/00f2ea/white?text=Video+6', views: '187K' },
];

export default function Profile() {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-6 px-4">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl">
              ME
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-2xl font-bold mb-1">@myusername</h1>
          <p className="text-muted-foreground text-sm mb-4">Создаю крутой контент 🚀</p>
          
          <div className="flex gap-6 mb-4">
            <div className="text-center">
              <div className="font-bold text-xl">234</div>
              <div className="text-sm text-muted-foreground">Подписчики</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">567</div>
              <div className="text-sm text-muted-foreground">Подписки</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">1.2M</div>
              <div className="text-sm text-muted-foreground">Лайки</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button>
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </Button>
            <Button variant="outline">
              <Icon name="Share2" size={18} className="mr-2" />
              Поделиться
            </Button>
          </div>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="videos" className="gap-2">
              <Icon name="Grid3x3" size={18} />
              Видео
            </TabsTrigger>
            <TabsTrigger value="liked" className="gap-2">
              <Icon name="Heart" size={18} />
              Понравилось
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              {mockUserVideos.map((video) => (
                <div key={video.id} className="relative aspect-[3/4] bg-muted overflow-hidden group cursor-pointer">
                  <img 
                    src={video.thumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-1 text-white">
                      <Icon name="Play" size={16} />
                      <span className="text-sm font-medium">{video.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="liked" className="mt-4">
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="Heart" size={48} className="mx-auto mb-2 opacity-30" />
              <p>Понравившиеся видео появятся здесь</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
