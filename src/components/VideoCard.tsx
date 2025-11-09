import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface VideoCardProps {
  video: {
    id: number;
    username: string;
    description: string;
    likes: number;
    comments: number;
    shares: number;
    videoUrl: string;
    hasAI?: boolean;
    isOriginal?: boolean;
    allowCollabs?: boolean;
  };
  isActive: boolean;
}

export default function VideoCard({ video, isActive }: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(video.likes);
  const [donateAmount, setDonateAmount] = useState('');
  const [showDonate, setShowDonate] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      <img 
        src={video.videoUrl} 
        alt="Video" 
        className="h-full w-auto object-contain max-w-full"
      />
      
      {video.hasAI && (
        <Badge className="absolute top-4 left-4 bg-purple-600 hover:bg-purple-700 font-bold text-sm">
          AI
        </Badge>
      )}
      
      {video.isOriginal && (
        <Badge className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 font-bold text-sm gap-1">
          <Icon name="Shield" size={14} />
          Оригинал
        </Badge>
      )}

      <div className="absolute bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center gap-3 mb-2">
          <Avatar className="w-10 h-10 border-2 border-white">
            <AvatarFallback className="bg-primary text-white">
              {video.username.slice(1, 3).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="font-semibold text-white">{video.username}</span>
          <button className="px-4 py-1 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Подписаться
          </button>
        </div>
        <p className="text-white text-sm">{video.description}</p>
        {video.allowCollabs && (
          <Badge className="mt-2 bg-accent/80 backdrop-blur text-white gap-1">
            <Icon name="Handshake" size={12} />
            Доступны коллаборации
          </Badge>
        )}
      </div>

      <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6">
        <button 
          onClick={handleLike}
          className="flex flex-col items-center gap-1 group"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
            isLiked 
              ? 'bg-primary text-white' 
              : 'bg-background/80 backdrop-blur hover:bg-background'
          }`}>
            <Icon name="Heart" size={24} fill={isLiked ? 'currentColor' : 'none'} />
          </div>
          <span className="text-white text-xs font-medium">{formatNumber(likesCount)}</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
            <Icon name="MessageCircle" size={24} />
          </div>
          <span className="text-white text-xs font-medium">{formatNumber(video.comments)}</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
            <Icon name="Share2" size={24} />
          </div>
          <span className="text-white text-xs font-medium">{formatNumber(video.shares)}</span>
        </button>

        <Dialog open={showDonate} onOpenChange={setShowDonate}>
          <DialogTrigger asChild>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Coins" size={24} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium">Донат</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Поддержать автора</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <Icon name="Coins" size={24} className="text-amber-600" />
                <div>
                  <p className="font-medium">Мем-коины TikClone</p>
                  <p className="text-sm text-muted-foreground">Поддержи создателя контента</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Количество коинов</label>
                <Input 
                  type="number" 
                  placeholder="100" 
                  value={donateAmount}
                  onChange={(e) => setDonateAmount(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setDonateAmount('100')}>100</Button>
                <Button variant="outline" className="flex-1" onClick={() => setDonateAmount('500')}>500</Button>
                <Button variant="outline" className="flex-1" onClick={() => setDonateAmount('1000')}>1000</Button>
              </div>
              <Button 
                className="w-full" 
                onClick={() => {
                  console.log('Донат отправлен:', donateAmount);
                  setShowDonate(false);
                  setDonateAmount('');
                }}
                disabled={!donateAmount}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Отправить донат
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {video.allowCollabs && (
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 rounded-full bg-accent/80 backdrop-blur flex items-center justify-center hover:bg-accent transition-colors">
              <Icon name="Users" size={24} />
            </div>
            <span className="text-white text-xs font-medium">Коллаб</span>
          </button>
        )}
      </div>
    </div>
  );
}