import requests

def save_to_txt(song_ids, filename):
    """将歌曲ID保存到txt文件"""
    with open(filename, 'w', encoding='utf-8') as f:
        for song_id in song_ids:
            f.write(f"{song_id}\n")  # 每个ID写入一行

def get_all_song_ids(playlist_id):
    """获取所有歌曲ID的函数"""
    url = "https://music.163.com/api/playlist/detail"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }
    params = {'id': playlist_id, 'limit': 10, 'offset': 0}  # 每次最多返回1000首歌曲

    all_song_ids = []
    
    while True:
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code == 200:
            data = response.json()
            if 'result' in data and 'tracks' in data['result']:
                tracks = data['result']['tracks']
                all_song_ids.extend([track['id'] for track in tracks])  # 提取歌曲ID
                print(f"当前获取到 {len(all_song_ids)} 首歌曲")
                
                # 如果返回的歌曲少于1000，说明已经是最后一页
                if len(tracks) < 1000:
                    break
                else:
                    params['offset'] += 1000  # 获取下一页的歌曲
            else:
                print("未找到歌单数据")
                break
        else:
            print(f"请求失败，状态码: {response.status_code}")
            break
    
    return all_song_ids

# 输入歌单ID
playlist_id = 2681578911  # 替换为实际歌单ID
song_ids = get_all_song_ids(playlist_id)

# 保存到 TXT 文件
save_to_txt(song_ids, "song_ids.txt")
print(f"所有歌曲ID已保存到 song_ids.txt 文件")

