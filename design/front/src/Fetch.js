// 导出 Fetch 函数
async function Fetch() {
      const res = await fetch("http://server.nacl.top:8880/url", {
        method: "GET"
      });
  
      const data = await res.json();
      return data.url;  // 返回 url
  }

export default Fetch