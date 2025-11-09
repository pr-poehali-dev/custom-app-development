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
  };
  isActive: boolean;
}

export default function VideoCard({ video, isActive }: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(video.likes);

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
      </div>
    </div>
  );
}
