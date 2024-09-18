#2024-09-18 04:26:38

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64
import json
import requests
import random
import time
import re
import os

openid1 = '@oEF-A6WGFY0viJuZRtoAAdIOXaVA@oEF-A6ZfMJKqDH36gnIS6jQoB0o8@oEF-A6QXqW7XprWy1YscNZQmXVVc'
def aes_string(data,key,iv):
    data = json.dumps(data, separators=(',', ':'))
    key_bytes = key.encode('utf-8')
    iv_bytes = iv.encode('utf-8')
    key_bytes = key_bytes.ljust(16, b'\0')[:16]
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
    data_bytes = data.encode('utf-8')
    padded_data = pad(data_bytes, AES.block_size)
    encrypted_data = cipher.encrypt(padded_data)
    encoded_encrypted_data = base64.b64encode(encrypted_data).decode('utf-8')
    return encoded_encrypted_data


def transform(a, t, r):
    e = len(a)
    i = ""
    for n in range(e):
        d = (2 * t - 1703130605) % (e + n) % 3
        
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


class qytm():
    def __init__(self,openid,activityid) -> None:
        self.openid = openid
        self.activityid = activityid
        self.headers = {
            "Host": "005wxapi.hema.ren",
            "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
            "sec-ch-ua-platform": "Android",
            "sec-ch-ua-mobile": "?1",
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "content-type": "application/x-www-form-urlencoded",
            "accept": "*/*",
            "origin": "https://xcwx.hema.ren",
            "x-requested-with": "com.tencent.mm",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://xcwx.hema.ren/",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "priority": "u=1, i"
        }
        self.headers2 = {
            "Host": "005moneyapi.hema.ren",
            "content-length": "88",
            "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
            "sec-ch-ua-platform": "Android",
            "sec-ch-ua-mobile": "?1",
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "content-type": "application/x-www-form-urlencoded",
            "accept": "*/*",
            "origin": "https://xcwx.hema.ren",
            "x-requested-with": "com.tencent.mm",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://xcwx.hema.ren/",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "priority": "u=1, i"
        }
        self.r = {
            "65": "D",
            "66": "n",
            "67": "E",
            "68": "F",
            "69": "3",
            "70": "G",
            "71": "H",
            "72": "j",
            "73": "k",
            "74": "V",
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
            "97": "I",
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
            "122": "x",
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
            "43": "5",
            "47": "9",
            "61": "O"
        }

    def login(self):
        datas = {"openid":self.openid}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        url = 'https://005wxapi.hema.ren/apiadmin/weixin.Fans/havefans'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "成功" in response.json().get('msg'):
            print('登录成功')
            self.userid = response.json().get('data').get('id')
            self.agent_id = response.json().get('data').get('agent_id')
        else:
            print(f"登录失败：{response.json().get('message')}")
            return

    def info(self):
        datas = {"id":self.activityid,"user_id":self.userid}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        url = 'https://005wxapi.hema.ren/apiadmin/activity.Activity/ActivityIntro'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "成功" in response.json().get('msg'):
            print('课程获取成功')
            self.question_id = response.json().get('data').get('question_id')
            list_id = ''
            answers = ''
            for questionlists in response.json().get('data').get('questionlist'):
                list_id += f"{questionlists.get('id')},"
                answers += f"{questionlists.get('answer')},"
            self.list_id = list_id.strip(',')
            self.answers = answers.strip(',')
        else:
            print(f"课程获取失败：{response.json().get('message')}")
            return

    def addviews(self):
        datas = {"id":self.activityid,"user_id":self.userid,"agent_id":self.agent_id,"openid":self.openid}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        url = 'https://005wxapi.hema.ren/apiadmin/activity.Activity/addviews'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        if "成功" in response.json().get('msg'):
            print('识别视频成功')
        else:
            print(f"识别视频失败：{response.json().get('data')}")

    def to_answer(self):
        datas = {"activity_id":int(self.activityid),"user_id":self.userid,"question_id":self.question_id,"list_id":self.list_id,"answer":self.answers,"answer_correct":"1,1","correct":self.answers,"num":1}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        url = 'https://005wxapi.hema.ren/apiadmin/log.QuestionUser/questionLog'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
    
    def addanswer2(self):
        datas = {"user_id":self.userid,"id":self.activityid}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        # print(result)
        url = 'https://005wxapi.hema.ren/apiadmin/log.QuestionUser/activityQuestion'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
        print(response.json().get('data').get('result'))
    

    def activityred(self):
        datas = {"id":self.activityid,"user_id":self.userid}
        encrypted_data = aes_string(datas,'jNd43S8f5tAli1Rl','nqhFeG5Sn6Purdgd')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        url = 'https://005wxapi.hema.ren/apiadmin/log.RedUser/activityRed'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers, data=data)
    
    def get_money(self):
        datas = {"activity_id":int(self.activityid),"uid":self.userid,"openid":self.openid}
        encrypted_data = aes_string(datas,'de2l6Whk2jfM69fP','ulgpk8yQwVSD9MwT')
        t = int(time.time())
        result = transform(encrypted_data, t, self.r)
        print(result)
        print(t)
        url = 'https://005moneyapi.hema.ren/apiadmin/system.Shop/lingqianpay'
        data = {
            "param": result,
            "time": str(t)
        }
        response = requests.post(url,headers=self.headers2, data=data)
    

    
    def main(self):
        self.login()
        self.info()
        self.activityred()
        self.addanswer2()
        time.sleep(random.randint(2,5))
        self.addviews()
        time.sleep(random.randint(5,10))
        self.to_answer()
        self.get_money()

if __name__ in "__main__":
    openid = os.getenv('qiangyi_openid')
    if not openid:
        print('请检查环境变量qiangyi_openid')
        exit()
    openid += openid1
    link = os.getenv('qiangyi_link')
    if not link:
        print('请检查环境变量qiangyi_link')
        exit()
    content = re.search(r'qrCode=\w+-(\d+)',link)
    if not content:
        print('请检查活动链接格式是否完整')
        exit()
    activityid = content.group(1)
    openids = openid.split('@')
    print(f'共有{len(openids)}个账号')
    for i,openid in enumerate(openids):
        print(f'----------开始第{i+1}个账号----------')
        try:
            main = qytm(openid,activityid)
            main.main()
        except:
            pass
        print(f'----------结束第{i+1}个账号----------')
        time.sleep(random.randint(10,20))
