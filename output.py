#2024-09-10 13:53:31

import requests
import random
import time
import re
cookies = {
    "PHPSESSID": "vj9no9pg5n2leckto1epccatj1"
}
def info(bianhao):
    headers = {
        "Host": "app.qihuangxueshe.com",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "Android",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
    
    url = f'https://app.qihuangxueshe.com/ky/{bianhao}/29/371816'
    response = requests.get(url,headers=headers, cookies=cookies)
    if response.status_code == 200:
        print('获取课程成功')
        answer = re.search(r'let answerIndex =[ ]*(\d)',response.text).group(1)
        return answer
    else:
        print('获取课程失败，请检查所填链接是否有误')
        exit()

class ky():
    def __init__(self,userid,cookies,answer,bianhao) -> None:
        self.userid = userid
        self.cookies = cookies
        self.answer = answer
        self.bianhao = bianhao
        self.headers = {
            "Host": "app.qihuangxueshe.com",
            "Connection": "keep-alive",
            "Content-Length": "45",
            "sec-ch-ua": "Not/A)Brand;v=8, Chromium;v=126, Android",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?1",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.188 Mobile Safari/537.36 XWEB/1260117 MMWEBSDK/20240501 MMWEBID/5594 MicroMessenger/8.0.50.2701(0x2800325A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "sec-ch-ua-platform": "Android",
            "Origin": "https://app.qihuangxueshe.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": f"https://app.qihuangxueshe.com/ky/{self.bianhao}/29/{self.userid}",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
        }
        self.to_answer()

    def to_answer(self):
        data = {
            "bianhao": self.bianhao,
            "us_id": self.userid,
            "kefu": "29",
            "ti_da": self.answer
        }
        url = 'https://app.qihuangxueshe.com/api/ky_vod.php?qh_type=kaiban_dati'
        response = requests.post(url,headers=self.headers, cookies=self.cookies, data=data)
        if response.json().get('kaiban_dati') == "1":
            print('回答正确')
            time.sleep(2)
            self.get_hongbao()
        else:
            print(f"回答错误：{response.json()}")

    def get_hongbao(self):
        data = {
            "bianhao": self.bianhao,
            "us_id": self.userid,
            "kefu": self.answer
        }
        url = 'https://app.qihuangxueshe.com/api/ky_vod.php?qh_type=kaiban_hongbao'
        response = requests.post(url,headers=self.headers, cookies=self.cookies, data=data)
        if response.json().get('kaiban_hongbao') == 1:
            print('红包领取成功')
        else:
            print(f"红包领取失败：{response.json()}")


if __name__ in "__main__":
    if user_id == '':
        print('请填写user_id')
        exit()
    bianhao = re.search(r'app\.qihuangxueshe\.com\/ky\/(\w+)\/29',link).group(1)
    userid = user_id+'@378344@379989'
    answer = info(bianhao)
    userids = userid.split('@')
    print(f'共有{len(userids)}个账号')
    for i,userid in enumerate(userids):
        print(f'----------开始第{i+1}个账号----------')
        try:
            ky(userid,cookies,answer,bianhao)
        except:
            pass
        print(f'----------结束第{i+1}个账号----------')
        time.sleep(random.randint(10,20))
