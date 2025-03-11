import { useEffect } from 'react';
import getid from "./Fetch";

function Jump() {
  useEffect(() => {
    const handleJumpDelay = async() => {
      const id = await getid();
      const weburl = `https://y.music.163.com/m/song?id=${id}`;
      setTimeout(() => {
        window.location.href = weburl;
      }, 3000);
    }
        
    handleJumpDelay();

  }, []);

  return null;
}

export default Jump;