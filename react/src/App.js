import Showimg from "./img";
import Jump from "./Jump";
// import React, { useEffect } from "react";

function App() {
  return (
  <>
  <Jump />
  <Showimg />
  </>
  );
}

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);  // 用来存储获取到的 JSON 数据
//   const [loading, setLoading] = useState(true);  // 加载状态

//   useEffect(() => {
//     // 发送 GET 请求
//     fetch('http://127.0.0.1:8880/url')  // 替换为你的 API 地址
//       .then((response) => {
//         // 检查响应是否成功
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();  // 将响应解析为 JSON
//       })
//       .then((json) => {
//         setData(json);  // 更新状态
//         setLoading(false);  // 完成加载
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);  // 出错时停止加载
//       });
//   }, []);  // 组件挂载时发送请求，空数组表示仅调用一次

//   // 如果数据还在加载中，显示加载提示
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // 数据加载完成后显示
//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>  {/* 渲染获取到的 JSON 数据 */}
//     </div>
//   );
// }


export default App;
