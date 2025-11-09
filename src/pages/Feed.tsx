import { useState } from 'react';
import Layout from '@/components/Layout';
import VideoCard from '@/components/VideoCard';

const mockVideos = [
  {
    id: 1,
    username: '@creator1',
    description: 'Крутой танец в новом тренде! 🔥 #dance #trending',
    likes: 125000,
    comments: 3200,
    shares: 890,
    videoUrl: 'https://placehold.co/400x700/ff0050/white?text=Video+1',
  },
  {
    id: 2,
    username: '@creator2',
    description: 'Попробовал новый челлендж 😂 #funny #challenge',
    likes: 89000,
    comments: 1500,
    shares: 450,
    videoUrl: 'https://placehold.co/400x700/00f2ea/white?text=Video+2',
  },
  {
    id: 3,
    username: '@creator3',
    description: 'Учу готовить за 60 секунд! 🍳 #cooking #food',
    likes: 234000,
    comments: 5600,
    shares: 2100,
    videoUrl: 'https://placehold.co/400x700/ff0050/white?text=Video+3',
  },
];

export default function Feed() {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <Layout>
      <div className="relative h-full overflow-hidden">
        <div 
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translateY(-${currentVideo * 100}vh)` }}
        >
          {mockVideos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video}
              isActive={index === currentVideo}
            />
          ))}
        </div>

        <div className="absolute right-4 bottom-24 flex flex-col items-center gap-4 z-10">
          <button 
            onClick={() => setCurrentVideo(Math.max(0, currentVideo - 1))}
            disabled={currentVideo === 0}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center disabled:opacity-30 hover:bg-background transition-colors"
          >
            ↑
          </button>
          <button 
            onClick={() => setCurrentVideo(Math.min(mockVideos.length - 1, currentVideo + 1))}
            disabled={currentVideo === mockVideos.length - 1}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center disabled:opacity-30 hover:bg-background transition-colors"
          >
            ↓
          </button>
        </div>
      </div>
    </Layout>
  );
}
