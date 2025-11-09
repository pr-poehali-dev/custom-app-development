import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const mockTrendingHashtags = [
  { tag: 'dance', views: '2.5B' },
  { tag: 'comedy', views: '1.8B' },
  { tag: 'food', views: '1.2B' },
  { tag: 'travel', views: '987M' },
  { tag: 'fitness', views: '765M' },
];

const mockUsers = [
  { username: '@creator1', followers: '1.2M', bio: 'Танцы и развлечения' },
  { username: '@creator2', followers: '890K', bio: 'Кулинарные рецепты' },
  { username: '@creator3', followers: '2.1M', bio: 'Путешествия по миру' },
];

const mockVideos = [
  { id: 1, thumbnail: 'https://placehold.co/300x400/ff0050/white?text=Video+1', views: '125K' },
  { id: 2, thumbnail: 'https://placehold.co/300x400/00f2ea/white?text=Video+2', views: '89K' },
  { id: 3, thumbnail: 'https://placehold.co/300x400/ff0050/white?text=Video+3', views: '234K' },
  { id: 4, thumbnail: 'https://placehold.co/300x400/00f2ea/white?text=Video+4', views: '156K' },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'hashtags' | 'users' | 'videos'>('hashtags');

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-4 px-4">
        <div className="sticky top-14 bg-background z-10 pb-4">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Поиск видео, пользователей, хештегов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            <Button 
              variant={activeTab === 'hashtags' ? 'default' : 'outline'}
              onClick={() => setActiveTab('hashtags')}
              className="rounded-full"
            >
              Хештеги
            </Button>
            <Button 
              variant={activeTab === 'users' ? 'default' : 'outline'}
              onClick={() => setActiveTab('users')}
              className="rounded-full"
            >
              Пользователи
            </Button>
            <Button 
              variant={activeTab === 'videos' ? 'default' : 'outline'}
              onClick={() => setActiveTab('videos')}
              className="rounded-full"
            >
              Видео
            </Button>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === 'hashtags' && (
            <div className="space-y-3">
              {mockTrendingHashtags.map((item) => (
                <div key={item.tag} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer">
                  <div>
                    <div className="font-bold text-lg">#{item.tag}</div>
                    <div className="text-sm text-muted-foreground">{item.views} просмотров</div>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-3">
              {mockUsers.map((user) => (
                <div key={user.username} className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                  <Avatar className="w-12 h-12 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-white">
                      {user.username.slice(1, 3).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{user.username}</div>
                    <div className="text-sm text-muted-foreground">{user.followers} подписчиков</div>
                    <div className="text-sm">{user.bio}</div>
                  </div>
                  <Button size="sm" className="rounded-full">
                    Подписаться
                  </Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-2 gap-2">
              {mockVideos.map((video) => (
                <div key={video.id} className="relative aspect-[3/4] bg-muted overflow-hidden group cursor-pointer rounded-lg">
                  <img 
                    src={video.thumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-1 text-white">
                      <Icon name="Play" size={20} />
                      <span className="text-sm font-medium">{video.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
