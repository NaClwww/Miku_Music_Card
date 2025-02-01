import { useEffect, useState } from 'react';
import getid from "./Fetch";

export const jumpToMusic = async () => {
  try {
    const id = await getid();
    console.log('获取到的ID:', id);
    
    const appurl = `orpheus://song/${id}/?autoplay=1`;
    const weburl = `https://y.music.163.com/m/song?id=${id}`;

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        window.location.href = weburl;
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.location.href = appurl;

    // 手动触发 visibilitychange 事件以确保跳转到 weburl
    setTimeout(() => {
      if (!document.hidden) {
        const event = new Event('visibilitychange');
        document.dispatchEvent(event);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, 1000);
  } catch (error) {
    console.error('跳转失败:', error);
  }
};

function Jump() {
  const [jumpSuccess, setJumpSuccess] = useState(false);

  useEffect(() => {
    const handleJump = async () => {
      try {
        const id = await getid();
        console.log('获取到的ID:', id);
        
        const appurl = `orpheus://song/${id}/?autoplay=1`;
        const weburl = `https://y.music.163.com/m/song?id=${id}`;

        const handleVisibilityChange = () => {
          if (document.hidden) {
            setJumpSuccess(true);
          } else {
            window.location.href = weburl;
          }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.location.href = appurl;

        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
      } catch (error) {
        console.error('跳转失败:', error);
      }
    };

    handleJump();
  }, []);

  return null;
}

export default Jump;