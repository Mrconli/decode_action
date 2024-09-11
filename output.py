#2024-09-11 14:33:25

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64
import json
import requests
import random
import time
from datetime import datetime

now = datetime.now()
today = now.strftime('%Y-%m-%d')

def aes_string(data):
    data = json.dumps(data, separators=(',', ':'))
    # print(data)
    key = 'xkT31Q0BXvfIWJ05'
    iv = 'nnLkVLht2DwDpo9c'
    key_bytes = key.encode('utf-8')
    iv_bytes = iv.encode('utf-8')
    key_bytes = key_bytes.ljust(16, b'\0')[:16]
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
    data_bytes = data.encode('utf-8')
    padded_data = pad(data_bytes, AES.block_size)
    encrypted_data = cipher.encrypt(padded_data)
    encoded_encrypted_data = base64.b64encode(encrypted_data).decode('utf-8')
    # print(f'Encrypted data: {encoded_encrypted_data}')
    return encoded_encrypted_data


def transform(a, t, r):
    e = len(a)
    i = ""
    
    for n in range(e):
        d = (2 * t - 1703132600) % (e + n) % 3
        
        char_code = ord(a[n])
        if str(char_code) in r:
            r_char = r[str(char_code)]
        else:
            r_char = ""
        
        if d == 0:
            i += a[n] if n % 2 == 0 else r_char
        elif d == 1:
            i += a[n] if n % 2 == 1 else r_char
        elif d == 2:
            i += r_char if n % 3 == 0 else a[n]
    
    return i





class wxtk():
    def __init__(self,openid,activityid,today) -> None:
        self.openid = openid
        self.activityid = activityid
        self.today = today
        self.r = {
            "43": "5",
            "47": "9",
            "48": "A",
            "49": "y",
            "50": "z",
            "51": "L",
            "52": "0",
            "53": "1",
            "54": "2",
            "55": "X",
            "56": "Y",
            "57": "4",
            "61": "O",
            "65": "D",
            "66": "n",
            "67": "E",
            "68": "F",
            "69": "3",
            "70": "G",
            "71": "H",
            "72": "j",
            "73": "k",
            "74": "I",
            "75": "6",
            "76": "J",
            "77": "K",
            "78": "M",
            "79": "N",
            "80": "P",
            "81": "Q",
            "82": "R",
            "83": "S",
            "84": "p",
            "85": "q",
            "86": "=",
            "87": "B",
            "88": "T",
            "89": "8",
            "90": "U",
            "97": "V",
            "98": "W",
            "99": "o",
            "100": "/",
            "101": "Z",
            "102": "a",
            "103": "b",
            "104": "c",
            "105": "7",
            "106": "d",
            "107": "e",
            "108": "f",
            "109": "g",
            "110": "h",
            "111": "i",
            "112": "l",
            "113": "m",
            "114": "r",
            "115": "s",
            "116": "t",
            "117": "u",
            "118": "+",
            "119": "v",
            "120": "w",
            "121": "C",
            "122": "x"
        }
        self.login()
        self.headers = {
            "Host": "036j4a9-wxapi.hema.wiki",
            "Connection": "keep-alive",
            "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua-mobile": "?1",
            "Authorization": f"Bearer {self.token}",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "sec-ch-ua-platform": "Android",
            "Accept": "*/*",
            "Origin": "https://036rbt3-wx.hema.wiki",
            "X-Requested-With": "com.tencent.mm",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://036rbt3-wx.hema.wiki/",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
        }

    def login(self):
        datas = {"openid":self.openid}
        encrypted_data = aes_string(datas)
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        headers = {
            "Host": "036j4a9-wxapi.hema.wiki",
            "Connection": "keep-alive",
            "Content-Length": "88",
            "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
            "sec-ch-ua-platform": "Android",
            "sec-ch-ua-mobile": "?1",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "content-type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Origin": "https://036rbt3-wx.hema.wiki",
            "X-Requested-With": "com.tencent.mm",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://036rbt3-wx.hema.wiki/",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
        }
        url = 'https://036j4a9-wxapi.hema.wiki/index/login'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=headers, data=data)
        if "成功" in response.json().get('message'):
            print('登录成功')
            self.token = response.json().get('data').get('token')
        else:
            print(f"登录失败：{response.json().get('message')}")
    
    def info(self):
        datas = {"activity_id":str(self.activityid)}
        encrypted_data = aes_string(datas)
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        url = 'https://036j4a9-wxapi.hema.wiki/activity/info'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "活动信息" in response.json().get('message'):
            print(response.json())
            self.title = response.json().get('data').get('title')
            if "注册视频" in self.title:
                return False
            print(f"获取今日任务成功：{self.title}")
            self.answer_list = {}
            for questionlist in response.json().get('data').get('questionlist'):
                self.answer_list[str(questionlist.get('id'))] = questionlist.get('answer')
            return True
        else:
            print(f"任务获取失败：{response.json().get('message')}")
            return False

    def look_video(self):
        datas = {"activity_id":str(self.activityid),"activity_title":self.title,"activity_begin":f"{self.today} 00:00:00","activity_end":f"{self.today} 23:59:59","category_id":1,"category_name":"本草医话","user_play_second":2898,"activity_total_second":3135,"user_play_ratio":92}
        encrypted_data = aes_string(datas)
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        url = 'https://036j4a9-wxapi.hema.wiki/activity/playProgress'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "播放进度" in response.json().get('message'):
            print(f"模拟播放成功")
        else:
            print(f"播放失败：{response.json().get('message')}")

    def end_video(self):
        datas = {"activity_id":str(self.activityid)}
        encrypted_data = aes_string(datas)
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        url = 'https://036j4a9-wxapi.hema.wiki/activity/ended'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "完播日志" in response.json().get('message'):
            print(f"观看完成")
        else:
            print(f"观看失败：{response.json().get('message')}")
    
    def answer(self):
        datas = {"activity_id":str(self.activityid),"question_id":self.activityid,"answer_list":self.answer_list}
        encrypted_data = aes_string(datas)
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        url = 'https://036j4a9-wxapi.hema.wiki/activity/answer'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "答题信息" in response.json().get('message'):
            print(f"完成答题，请注意是否到账")
        else:
            print(f"答题失败：{response.json().get('message')}")

    def main(self):
        if self.activityid == 0:
            print('正在尝试获取今天活动课程')
            self.activityid = 2
            while True:
                if self.info():
                    break
                self.activityid += 1
        else:
            self.info()
        self.look_video()
        time.sleep(random.randint(10,20))
        self.end_video()
        time.sleep(2)
        self.answer()

if __name__ in "__main__":
    openids = openid.split('@')
    print(f'共有{len(openids)}个账号')
    for i,openid in enumerate(openids):
        print(f'----------开始第{i+1}个账号----------')
        try:
            main = wxtk(openid,activityid,today)
            main.main()
        except:
            pass
        print(f'----------结束第{i+1}个账号----------')
        time.sleep(random.randint(10,20))
