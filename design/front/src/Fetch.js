// 导出 Fetch 函数
import Music from './MusicId.txt';

async function Fetch() {
  const response = await fetch(Music);
  const text = await response.text();
  const lines = text.split('\n');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  const url = `orpheus://song/${randomLine}/?autoplay=1`;
  return url;  // 返回随机行
}

export default Fetch;