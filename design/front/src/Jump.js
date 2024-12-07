import { useEffect, useState } from 'react';
import Fetch from "./Fetch";
function Jump() {
  // const [url, setUrl] = useState(null);  // 保存返回的 URL

  useEffect(() => {
    // 调用 Fetch 函数并获取结果
    Fetch().then((result) => {
      // setUrl(result);  // 将返回的 URL 更新到 state 中
      setTimeout(function() {
        window.location.href = result;
      }, 5000)
    });
  }, []);
  // console.log(url)
  // setTimeout(function() {
  //   window.location.href = url;
  // }, 5000)
}

export default Jump