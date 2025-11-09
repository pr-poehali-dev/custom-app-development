import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    console.log('Uploading video...', { file: selectedFile, description });
    navigate('/feed');
  };

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Загрузить видео</h1>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-border rounded-lg p-8">
            {previewUrl ? (
              <div className="relative">
                <video 
                  src={previewUrl} 
                  controls 
                  className="w-full rounded-lg max-h-96 mx-auto"
                />
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Upload" size={32} className="text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">Нажмите, чтобы выбрать видео</p>
                  <p className="text-sm text-muted-foreground">MP4, MOV, AVI до 100MB</p>
                </div>
                <input 
                  type="file" 
                  accept="video/*" 
                  className="hidden" 
                  onChange={handleFileSelect}
                />
              </label>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Описание</label>
            <Textarea 
              placeholder="Расскажите о вашем видео..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleUpload}
              disabled={!selectedFile}
              className="flex-1"
            >
              <Icon name="Upload" size={20} className="mr-2" />
              Опубликовать
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/feed')}
            >
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
