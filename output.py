#2024-09-20 00:02:57
import requests
import json
import os
import datetime
import time
requests.packages.urllib3.disable_warnings()
code="hlzj"
ver="1.0.2"
def version():
 try:
  txt=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text
  print(txt)
  url=f"http://101.132.127.171/api/huaji/?version={ver}&code={code}"
  r=json.loads(requests.get(url).text)
  if r["ok"]:
   if r["update"]:
    print(f"有新版本请更新,当前版本:{ver},最新版本:",r["latest_version"])
    exit()
   else:
    print(f"当前版本为最新版本或不用更新,当前版本:{ver},最新版本:",r["latest_version"])
    print("更新日志:",r["data"]["update_note"])
  else:
   print("脚本已关闭")
 except:
  print("服务器失联....")
class yuanshen:
 def __init__(self,cookie):
  self.power=0
  self.base_url="https://gmdevpro.hlzjppgl.cn"
  self.cookie=cookie
  self.headers={"Host":"gmdevpro.hlzjppgl.cn","Connection":"keep-alive","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/5295 MicroMessenger/8.0.47.2560(0x28002F30) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 miniProgram/wx315431cc3b5e930f","Content-Type":"application/json","Accept":"*/*","Origin":"https://gmdevpro.hlzjppgl.cn","X-Requested-With":"com.tencent.mm","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://gmdevpro.hlzjppgl.cn/?token=oHds-50eMxxPNgaPbsVtW2ef3RSk&timestamp=1711101096617","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  self.login()
  self.headers={"Host":"gmdevpro.hlzjppgl.cn","Connection":"keep-alive","Authorization":f"Bearer {self.auth}","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/5295 MicroMessenger/8.0.47.2560(0x28002F30) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 miniProgram/wx315431cc3b5e930f","Content-Type":"application/json","Accept":"*/*","Origin":"https://gmdevpro.hlzjppgl.cn","X-Requested-With":"com.tencent.mm","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://gmdevpro.hlzjppgl.cn/?token=oHds-50eMxxPNgaPbsVtW2ef3RSk&timestamp=1711101096617","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
 def login(self):
  url=f"{self.base_url}/server/api/authorized-login"
  data=json.dumps({"union_id":self.cookie,"invite_user_id":""})
  r=requests.post(url,headers=self.headers,data=data).json()
  if r["code"]==200:
   print("✅登录成功")
   self.auth=r["data"]["token"]
   self.tree_id=r["data"]["user_tree"]["id"]
   self.power=r["data"]["user_info"]["water"]
  else:
   print("❌️登录失败",r)
   exit()
 def sign_day(self):
  url=f"{self.base_url}/server/api/day-sign"
  data='{}'
  r=requests.post(url,headers=self.headers,data=data).json()
  if r["code"]==200:
   print("✅今日签到成功,获得能量:",r["data"]["water_num"])
   self.power=int(self.power)+r["data"]["water_num"]
  else:
   print("❌️今日签到失败",r["message"])
 def time_engry(self):
  url=f"{self.base_url}/server/api/task/receive-task-water"
  data='{"tid":7}'
  r=requests.post(url,headers=self.headers,data=data).json()
  if r["code"]==200:
   print("✅获得三餐能量成功,获得能量:",r["data"]["add_water"])
   self.power=int(self.power)+r["data"]["add_water"]
  else:
   print("❌️获得三餐能量失败",r["message"])
 def ask_task(self):
  while True:
   url=f"{self.base_url}/server/api/task/answer-task-water"
   data='{"tid":0}'
   r=requests.post(url,headers=self.headers,data=data).json()
   if r["code"]==200:
    print("✅完成答题任务获得能量成功,获得能量:",r["data"]["add_water"])
    self.power=int(self.power)+r["data"]["add_water"]
    time.sleep(5)
   else:
    print("❌️完成答题任务获得能量失败",r["message"])
    if r["message"]=="该任务今天达到上限了":
     print("❌️答题任务上限了")
     break
    else:
     print("❌️答题出现未知错误")
     exit()
 def watch_goodthings(self):
  url=f"{self.base_url}/server/api/task/receive-task-water"
  data='{"tid":3}'
  r=requests.post(url,headers=self.headers,data=data).json()
  print(r)
  if r["code"]==200:
   print("✅浏览任务获得能量成功,获得能量:",r["data"]["add_water"])
   self.power=int(self.power)+r["data"]["add_water"]
  else:
   print("❌️浏览任务获得能量失败",r["message"])
 def choose_invest(self):
  data='{}'
  url=f"{self.base_url}/server/api/power/open-invest"
  r=requests.post(url,headers=self.headers).json()
  if r["code"]==200:
   print("✅获取投资配置成功")
  else:
   print("❌️获取投资配置失败",r["message"])
  time.sleep(4)
  url=f"{self.base_url}/server/api/power/choose-invest"
  data='{"condition":"min"}'
  r=requests.post(url,headers=self.headers,data=data).json()
  if r["code"]==200:
   print("✅选择投资成功")
  else:
   print("❌️选择投资失败",r["message"])
 def get_today(self):
  url=f"{self.base_url}/server/api/user/get-today-water"
  data='{}'
  r=requests.post(url,data=data,headers=self.headers).json()
  if r["code"]==200:
   print("✅获取今日能量成功,获得能量:",r["data"]["get_water"])
   self.power=int(self.power)+r["data"]["get_water"]
  else:
   print("❌️获取今日能量失败",r["message"])
 def receive_invest(self):
  url=f"{self.base_url}/server/api/power/receive-invest"
  data='{}'
  r=requests.post(url,data=data,headers=self.headers).json()
  if r["code"]==200:
   print("✅领取反投资成功",r["data"]["add_power_num"])
  else:
   print("❌️领取投资失败",r["message"])
 def user_water(self):
  while True:
   url=f"{self.base_url}/server/api/game/use-power"
   data=json.dumps({"num":1,"user_tree_id":self.tree_id})
   r=requests.post(url,data=data,headers=self.headers).json()
   if r["code"]==200:
    print("✅浇水成功!")
    next=int(r['data']['user_tree']['water_cnt'])-int(r['data']['user_tree']['power_cnt'])
    print(f"✅当前阶段:{r['data']['user_tree']['stage']}-{r['data']['user_tree']['tree_cnt']}距离下一阶段还剩浇水{next}次✅")
    url=f"{self.base_url}/server/api/game/receive-box"
    data='{}'
    r=requests.post(url,data=data,headers=self.headers).json()
    if r["code"]==200:
     print("✅领取宝箱成功,获得能量:",r["data"])
    time.sleep(5)
   else:
    print("❌️浇水失败",r["message"])
    break
 def main_task(self):
  self.sign_day()
  time.sleep(5)
  now=datetime.datetime.now()
  hour=now.hour
  if 7<=hour<12 or 14<=hour<17 or 18<=hour<22:
   self.time_engry()
  else:
   print("❌️不在三餐时间")
  time.sleep(5)
  self.ask_task()
  time.sleep(5)
  self.watch_goodthings()
  self.get_today()
  time.sleep(5)
  self.user_water()
  print("============投资任务============")
  self.receive_invest()
  self.choose_invest()
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_hlzj")
  if not cookie:
   print("请设置环境变量:yuanshen_hlzj")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main_task()
  print(f"--------第{i}个账号执行完毕--------")
  i+=1
