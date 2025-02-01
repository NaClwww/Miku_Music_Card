// 导出 Fetch 函数
import Music from './MusicId.txt';

async function getid() {
  const response = await fetch(Music);
  const text = await response.text();
  const lines = text.split('\n');
  const id = lines[Math.floor(Math.random() * lines.length)];
  // const id = `orpheus://song/${randomLine}/?autoplay=1`;
  return id;  // 返回随机行
}

export default getid;