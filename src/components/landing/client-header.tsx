'use client';

import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export function ClientHeader() {
  const scrollToVideo = () => {
    const videoElement = document.getElementById('loom-video');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button size="sm" asChild>
          <a href="https://calendly.com/n8nenthusiaist/dominik-jakubowsk" target="_blank" rel="noopener noreferrer">
            Book a Free Discovery Call
          </a>
        </Button>
        <Button size="sm" variant="ghost" onClick={scrollToVideo}>
          <PlayCircle className="mr-2 h-5 w-5" />
          Watch Overview Video
        </Button>
      </div>
  );
}
