import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/feed', icon: 'Home', label: 'Главная' },
    { path: '/search', icon: 'Search', label: 'Поиск' },
    { path: '/upload', icon: 'PlusSquare', label: 'Загрузить' },
    { path: '/subscriptions', icon: 'Users', label: 'Подписки' },
    { path: '/profile', icon: 'User', label: 'Профиль' },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <button 
            onClick={() => navigate('/feed')}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            TikClone
          </button>
          <button
            onClick={() => navigate('/trends')}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Icon name="TrendingUp" size={20} />
            <span className="hidden sm:inline">Тренды</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      <nav className="sticky bottom-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-around h-16 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={24} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
