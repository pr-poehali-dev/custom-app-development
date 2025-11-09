import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const mockRequests = [
  {
    id: 1,
    username: '@newcreator1',
    message: 'Хочу сделать коллаб на твой танец! У меня есть крутая идея для продолжения',
    videoPreview: 'https://placehold.co/300x400/ff0050/white?text=Request+1',
    status: 'pending',
  },
  {
    id: 2,
    username: '@newcreator2',
    message: 'Давай вместе снимем рецепт! Моя версия твоего блюда',
    videoPreview: 'https://placehold.co/300x400/00f2ea/white?text=Request+2',
    status: 'pending',
  },
];

export default function CollabRequest() {
  const [requests, setRequests] = useState(mockRequests);
  const [replyMessage, setReplyMessage] = useState('');

  const handleApprove = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    console.log('Коллаборация одобрена:', id);
  };

  const handleReject = (id: number) => {
    setRequests(requests.filter(req => req.id !== id));
    console.log('Коллаборация отклонена:', id);
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-6 px-4">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Handshake" size={28} className="text-primary" />
          <h1 className="text-2xl font-bold">Запросы на коллаборацию</h1>
        </div>

        <div className="space-y-4">
          {requests.filter(r => r.status === 'pending').map((request) => (
            <div key={request.id} className="border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="relative w-24 aspect-[3/4] bg-muted rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={request.videoPreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Icon name="Play" size={24} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-8 h-8 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-white text-xs">
                        {request.username.slice(1, 3).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{request.username}</span>
                    <Badge variant="outline" className="ml-auto">
                      <Icon name="Clock" size={12} className="mr-1" />
                      Ожидает
                    </Badge>
                  </div>

                  <p className="text-sm mb-3">{request.message}</p>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleApprove(request.id)}
                      className="flex-1"
                    >
                      <Icon name="Check" size={16} className="mr-1" />
                      Одобрить
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleReject(request.id)}
                      className="flex-1"
                    >
                      <Icon name="X" size={16} className="mr-1" />
                      Отклонить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {requests.filter(r => r.status === 'pending').length === 0 && (
            <div className="text-center py-12 border rounded-lg">
              <Icon name="Handshake" size={48} className="mx-auto mb-4 text-muted-foreground opacity-30" />
              <h2 className="text-xl font-semibold mb-2">Нет запросов</h2>
              <p className="text-muted-foreground">
                Запросы на коллаборацию появятся здесь
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 border rounded-lg p-6 bg-accent/20">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Icon name="Shield" size={20} className="text-amber-600" />
            Защита оригинального контента
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Только вы можете одобрять коллаборации на свои оригинальные видео. 
            Идентичные копии без разрешения автоматически блокируются системой.
          </p>
          <Badge className="bg-amber-600 hover:bg-amber-700">
            <Icon name="Shield" size={14} className="mr-1" />
            Авторские права защищены
          </Badge>
        </div>
      </div>
    </Layout>
  );
}
