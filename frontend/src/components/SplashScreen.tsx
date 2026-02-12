import React, { useEffect, useMemo, useState } from 'react';
import '../styles/SplashScreen.css';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const splashVideos = useMemo(
    () => [
      'https://www.youtube.com/watch?v=HgTSS7Lgw3M&pp=ygUYZmFzaGlvbiBtb2RlbGxpbmcgYWdlbmN52AYY',
      'https://www.youtube.com/watch?v=yo6GklFH2sg&pp=ygUYZmFzaGlvbiBtb2RlbGxpbmcgYWdlbmN5',
      'https://www.youtube.com/watch?v=SdSSPF1S-Uc&pp=ygUeZmFzaGlvbiBtb2RlbGxpbmcgZmFzaGlvbiB3ZWVr',
      'https://www.youtube.com/watch?v=Wr4w5i1xFEo&pp=ygUeZmFzaGlvbiBtb2RlbGxpbmcgZmFzaGlvbiB3ZWVr',
    ],
    []
  );

  const getVideoId = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.searchParams.get('v');
    } catch (err) {
      return '';
    }
  };

  const getEmbedUrl = (url: string) => {
    const id = getVideoId(url);
    if (!id) return '';
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&loop=1&playlist=${id}`;
  };

  const [selectedVideo, setSelectedVideo] = useState(() => getEmbedUrl(splashVideos[0]));
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const randomVideo = splashVideos[Math.floor(Math.random() * splashVideos.length)];
    setSelectedVideo(getEmbedUrl(randomVideo));
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 6000);
    return () => clearTimeout(timer);
  }, [onComplete, splashVideos]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div className={`splash-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="splash-video-container">
        <iframe
          className="splash-video"
          src={selectedVideo}
          title="Splash Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="splash-overlay" />
      </div>
      <div className="splash-content">
        <h1>Welcome to the Approvals Platform</h1>
        <button className="cta-btn" onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
}
