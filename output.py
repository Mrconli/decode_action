#2025-02-19 05:43:34

import json,time
import random
import hook
import middleware
import requests
from datetime import datetime, timedelta


def qls():
    if middleware.version()['sn'] > "2.6.5":
        qls = []
        ql_id_arr = tool.bucketAllKeys("qls")
        if not ql_id_arr:
            return []
        for ql_id in ql_id_arr:
            value = tool.bucketGet("qls", ql_id)
            if value:
                qls.append(json.loads(value))
        return qls
    else:
        qls = tool.bucketGet("qinglong", "QLS")
        if qls:
            return json.loads(qls)
        return []


def check_ver():
    res = requests.get(f"https://gitee.com/aa2128/static/raw/master/{tool.plugin_pre}.json")
    if res.status_code == 200:
        rj = res.json()
        if not rj['open']:
            tool.pushMaster(f"{tool.plugin_name}:本地版本:{tool.plugin_ver}，已失效，请联系作者更新插件！tg:{res.tg},qq群：{res.qq}")
            tool.log_err(f"本地版本:{tool.plugin_ver}，已失效，请联系作者更新插件！tg:{res.tg},qq群：{res.qq}")
            exit()
        if float(rj['ver'])>float(tool.plugin_ver):
            tool.pushMaster(f"{tool.plugin_name}:发现新版本{rj['ver']}，请尽快升级！")
            tool.log_err(f"{tool.plugin_name}:发现新版本{rj['ver']}，请尽快升级！")
            exit()
    else:
        tool.pushMaster(f"{tool.plugin_name}:出错了，请联系作者！")
        tool.log_err(f"{tool.plugin_name}:出错了，请联系作者！")
        exit()

       
def edit_conf():
        conf = {
            "paid": tool.bucketGet(f"{tool.plugin_pre}conf", "paid") or "n",
            "fee": tool.bucketGet(f"{tool.plugin_pre}conf", "fee") or 0,
            "qr_code":tool.bucketGet(f"{tool.plugin_pre}conf", "qr_code") or "",
            "invited":tool.bucketGet(f"{tool.plugin_pre}conf", "invited") or "n",
            "tip":tool.bucketGet(f"{tool.plugin_pre}conf", "tip") or "",
            
        }
        options = [
            {"text": "收费开关（y：是，n：否）", "key": "paid", "tips": "是否收费（y：是，n：否）"},
            {"text": "收费金额(元)", "key": "fee", "tips": "收费金额（单位：元，例如：0.3）"},
            {"text": "微信机器人收款码", "key": "qr_code", "tips": "微信机器人收款码图片链接（公网地址url）"},
            {"text": "邀请入口", "key": "invited", "tips": "邀请入口"},
            {"text": "小尾巴", "key": "tip", "tips": "登陆小尾巴 可自定义添加"}
        ]
        content = "配置如下，请在【60】秒内输入对应序号编辑（q:退出）：\n"
        for i, option in enumerate(options, 1):
            content += f"{i}、{option['text']}：{conf[option['key']]}\n"
        content+=f"\n\n------\n插件版本：V{tool.plugin_ver}"
        tool.replyMsg(content)

        value = tool.sender.listen(60000)
        if not value or value == "q" or value == "error":
            tool.replyMsg("已退出！")
            exit()

        option = options[int(value) - 1]
        if option:
            tool.replyMsg(f"请输入{option['tips']}：")
            value = tool.sender.listen(60000)
            if not value or value == "q" or value == "error":
                tool.replyMsg("已退出！")
                exit()
            conf[option["key"]] = value
            tool.bucketSet(f"{tool.plugin_pre}conf",option['key'],value)
            tool.sender.breakIn(tool.msg)
        else:
            tool.replyMsg("请输入正确的序号")
            tool.sender.breakIn(tool.msg)



class ACCOUNT:
    def __init__(self):
        self.attr_arr = [
            {
                "title": "token",
                "key": "token",
                "timeOut": 60000,
                "tip":""
            },
            {
                "title": "备注",
                "key": "name",
                "timeOut": 60000,
                "tip":""
            },
            {
                "title": "是否禁用账号（y/n）",
                "key": "disable",
                "timeOut": 60000,
                "tip":""
            }

        ]

    def client_qinglong(self):
        if not tool.conf['host'] or not tool.conf['client_id'] or not tool.conf['client_secret']:
            tool.replyMsg("青龙配置有误，请联系管理员正确配置！")
            exit()
        ql={
            "name":"ql",
            "host":tool.conf['host'],
            "client_id":tool.conf['client_id'],
            "client_secret":tool.conf['client_secret']
        }
        tool.log_info(ql)
        tql = hook.QL(ql)
        if not tql.token:
            tool.replyMsg("青龙配置有误，请联系管理员正确配置！")
            exit()
        return tql

    def setVal(self, item, attr):
        print(self)
        tool.replyMsg(f"{tool.plugin_name}-请输入{attr['title']}({attr['tip']})：")
        value = tool.sender.listen(attr['timeOut'])
        tool.log_info(f"{attr['key']}==={value}")
        if not value or value == "error":
            tool.replyMsg("输入有误/超时，已退出！")
            exit()
        if value == "q":
            tool.replyMsg("已退出！")
            exit()
        item[attr['key']] = value
        return True
    
    def auth_time(self,timestamp,days):
        future_date = timestamp + timedelta(days=days)
        formatted_date = future_date.strftime("%Y-%m-%d")
        return formatted_date


    def add_or_update(self,acc,env_name=None):
        bucket = f"{tool.plugin_pre}{tool.imType}"
        user_str = tool.bucketGet(bucket, tool.userId)
        user_arr = json.loads(user_str) if user_str else None
         # 获取当前时间
        now = datetime.now()
        if not user_arr:
            user_acc = {
                "userId": str(acc['userId']),
                "token": acc['token'],
                "name": acc['name'],
                "disable":"n",
                "expire": self.auth_time(now,30)
            }
            tool.bucketSet(bucket, tool.userId, json.dumps([user_acc]))   
            tool.log_info(f"新增账号【{tool.hide_phone_number(acc['name'])}】成功✅")
            if env_name:
                self.sync_ql(user_acc,env_name)  
            return 1
        else:
            # 查找是否已有相同 userId 的记录
            exit = False
            for index,item in enumerate(user_arr):
                if str(item['userId']) == str(acc['userId']):
                    exit = True
                    tool.log_info(f"更新---------")
                    item['token'] = acc['token']
                    tool.log_info(f"更新账号【{tool.hide_phone_number(acc['name'])}】成功✅")
                    tool.bucketSet(bucket, tool.userId, json.dumps(user_arr))
                    if env_name:
                        self.sync_ql(item,env_name)
                    break
            if not exit:
                tool.log_info(f"新增---------")
                user_acc = {
                    "userId": str(acc['userId']),
                    "token": acc['token'],
                    "name": acc['name'],
                    "disable":"n",
                    "expire": self.auth_time(now,30)
                }
                user_arr.append(user_acc)
                tool.log_info(json.dumps(user_arr))
                tool.bucketSet(bucket, tool.userId, json.dumps(user_arr))
                tool.log_info(tool.bucketGet(bucket, tool.userId))
                tool.log_info(f"新增账号【{tool.hide_phone_number(acc['name'])}】成功✅")
                if env_name:
                    self.sync_ql(user_acc,env_name)  
                return 1

            
    def sync_ql(self, acc,env_name):
        envs_res = self.tql.envGet(env_name)
        if envs_res['code'] != 200:
            tool.replyMsg("获取环境变量失败，请联系管理员")
            return
        envs = envs_res.get('data', [])
        user_env = next((item for item in envs if item.get('remarks') == acc['userId']), None)
        if user_env:
            # 更新已有的环境变量
            data = {
                'id': user_env.get('id', user_env.get('_id')),
                'name': env_name,
                'value': f"@@{acc['cookie']}",
                'remarks': acc['userId'],
            }
            update_res = self.tql.envUpdate(json.dumps(data))
            tool.log_info(f"青龙更新变量结果===>{update_res}")
        else:
            # 添加新的环境变量
            data = [{
                'name': env_name,
                'value': f"@@{acc['cookie']}",
                'remarks': str(acc['userId']),
            }]
            add_res = self.tql.envSet(json.dumps(data))
            tool.log_info(f"青龙新增变量结果===>{add_res}")

                    
    # 新增账号信息
    def addCount(self,value=None):
        if tool.user_can_add():
            
            content = "微信扫码下放二维码,抓包https://ys.shajixueyuan.com/任意url下的请求头中的token的值"
            tool.replyMsg(content)
            image = tool.bucketGet(f"{tool.plugin_pre}conf", "invited") if tool.bucketGet(f"{tool.plugin_pre}conf", "invited") else "https://gitee.com/aa2128/static/raw/master/dongfangshiji.png"
            tool.sender.replyImage(image)
            item = {}
            go = True
            for attr in self.attr_arr:
                if attr['key'] == "disable":
                    item['disable'] = "n"
                    continue
                if not self.setVal(item,attr):
                    go = False
                    break
            if not go:
                tool.log_info("数据配置有误，已退出！")
                return tool.replyMsg("数据配置有误，已退出！")
            item['expire'] = self.auth_time(datetime.now(),30)
            item_arr = []
            item_str = middleware.bucketGet(f"{tool.plugin_pre}{tool.imType}", tool.userId)
            if item_str:
                item_arr = json.loads(item_str)
            item_arr.append(item)
            middleware.bucketSet(f"{tool.plugin_pre}{tool.imType}", tool.userId, json.dumps(item_arr))
            tool.update_user_balance()
            tool.replyMsg("账号添加成功！")
            item['push_user_id'] = tool.userId
            item['push_im_type'] = tool.imType
            item['index'] = 1
            item['total'] = 1
            DONGFANGJISHI(0,item).run()

    # 编辑账号信息
    def editCount(self, item_arr, no):
        item = item_arr[no]
        content = f"请在【2分钟】内输入 序号，编辑对应的属性（q：保存并退出）"
        content += f"\n--------------------"
        content += f"\n输入数字：0 删除此账号！"
        content += f"\n--------------------"
        for index, attr in enumerate(self.attr_arr):
            content += f"\n{index + 1}.【{attr['title']}】：{tool.hide_phone_number(item[attr['key']])}"
        tool.replyMsg(content)
        value = tool.sender.listen(120000)
        if value == "q" or value == "error" or value == "Q":
            middleware.bucketSet(f"{tool.plugin_pre}{tool.imType}", tool.userId, json.dumps(item_arr))
            return tool.replyMsg("已退出！")
        if not value.isdigit():
            return self.editCount(item_arr, no)
        if 0 < int(value) <= len(self.attr_arr):
            attr = self.attr_arr[int(value) - 1]
            if self.setVal(item, attr):
                item_arr[no] = item
                self.editCount(item_arr, no)
        elif value == "0":
            item_arr.pop(no)
            if len(item_arr) == 0:
                # tool.pushMsg(f"{tool.plugin_pre}{tool.imType},{tool.userId}")
                middleware.bucketDel(f"{tool.plugin_pre}{tool.imType}", tool.userId)
            else:
                middleware.bucketSet(f"{tool.plugin_pre}{tool.imType}", tool.userId, json.dumps(item_arr))
            return tool.replyMsg(f"已删除第{no + 1}个账号信息！请重新发送：东方管理 ！")
        else:
            return self.editCount(item_arr, no)
        
    
             

    # 账号管理
    def accoount_manager(self):
        tool.log_info("账号管理")
        item_str = middleware.bucketGet(f"{tool.plugin_pre}{tool.imType}", tool.userId)
        if not item_str or item_str == "":
            self.addCount()
            exit(1)
        item_arr = json.loads(item_str)
        content = f"[{tool.plugin_name}]请选择要账号查看详情：（0增加， q退出）\n"
        for index, item in enumerate(item_arr):
            tool.log_info(item)
            status =  "禁用" if item['disable']=="y" else "启用"
            item['expire'] = item['expire'] if "expire" in item else self.auth_time(datetime.now(),30)
            content = "".join([content, f"\n{index + 1}、{tool.hide_phone_number(item['name'])} ｜{status}｜{item['expire']}"])
        tool.bucketSet(f"{tool.plugin_pre}{tool.imType}", tool.userId, json.dumps(item_arr))
        tool.replyMsg(content)
        value = tool.sender.listen(60000)
        if not value or value.casefold() == "q":
            tool.replyMsg("输入有误，已退出！")
        elif value == "0":
            self.addCount()
        elif value.isdigit() and 0 < int(value) <= len(item_arr):
            self.editCount(item_arr, int(value) - 1)
        else:
            tool.replyMsg(f"[{tool.plugin_name}]:输入有误,请重新发送:东方管理，并输入正确的序号！")

    def cron_account_arr(self):
        account_arr = []
        for plat in tool.platformArr():
            p = plat["platform"]
            user_id_arr = tool.bucketAllKeys(p)
            if not user_id_arr:
                continue
            for index, user_id in enumerate(user_id_arr):
                user_data_str = tool.bucketGet(p, user_id)
                if not user_data_str or user_id == '':
                    continue
                user_data_arr_temp = json.loads(user_data_str)
                for n, account_data in enumerate(user_data_arr_temp):
                    account_data["push_user_id"] = user_id
                    account_data["push_im_type"] = plat["imType"]
                    account_data['index'] = n + 1
                    account_data['total'] = len(user_data_arr_temp)
                    account_arr.append(account_data)
        return account_arr

    def account_task(self, item, no):
        print(self)
        read = DONGFANGJISHI(no,item)
        # time.sleep(2)  # 延迟两秒
        read.run()


class DONGFANGJISHI:
    def __init__(self,index,account):
        self.index = index
        self.mobile = ""
        self.name = account.get('name', None)
        self.token = account.get('token', None)
        self.ua = tool.ramdom_ua()
        self.push_user_id = account.get("push_user_id",None)
        self.push_im_type = account.get("push_im_type",None)
        self.msg = ""
        self.host = "https://www.kugua.com"
        self.headers = {
            'version': '1.0.13.2',
            'content-type': 'application/json',
            'xweb_xhr': '1',
            'token': self.token,
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191',
            'accept': 'application/json',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': "https://servicewechat.com/wxebdf2c44a2a714c2/70/page-frame.html",
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
        }
    
    def log(self, msg):
        tool.log_info(f"用户{self.index}【{self.name}】：{msg}")
    
    def pushMsg(self, msg):
        if tool.chatId:
            tool.pushMsg(None, tool.chatId, self.push_im_type, "", msg)
        else:
            tool.pushMsg(self.push_user_id, None, self.push_im_type, "", msg)
        
    def get_proxies(self): 
        if tool.conf['proxy_status'] == "1":
            res = tool.conf['proxy']
            self.log(f"-------使用代理池-------{res}")  
            proxy = {
                    "http": f"{res}",
                    "https": f"{res}",
                    }
        elif tool.conf['proxy_status'] == "2":
            res = requests.get(tool.conf['proxy_api']).text
            if "@" in res:  
                proxy = {
                    "http": f"http://{res.split('@')[0]}@{res.split('@')[1]}",
                    "https": f"https://{res.split('@')[0]}@{res.split('@')[1]}"
                    }  
            else:   
                proxy = {
                    "http": f"http://{res.split(':')[0]}:{res.split(':')[1]}",
                    "https": f"https://{res.split(':')[0]}:{res.split(':')[1]}"
                    }
        else:
            self.log(f"-------使用直连模式-------")
            return None
        return proxy
    
    def common_post(self,path,body):
        url = f"https://ys.shajixueyuan.com/api{path}"
        res = requests.post(url=url,headers=self.headers,json=body)
        if res.status_code == 200:
            rj =res.json()
            return rj
        return None
    
    def common_get(self,path):
        url = f"https://ys.shajixueyuan.com/api{path}"
        res = requests.get(url=url,headers=self.headers)
        if res.status_code == 200:
            rj =res.json()
            return rj
        return None

        
    def get_user_info(self):
        res = self.common_get("/user/info")
        if res and res['code']==1:
            self.msg += f"\n【登陆结果】：登陆成功✅"
            self.msg += f"\n【手机号码】：{tool.hide_phone_number(res['data']['mobile'])}"
            self.msg += f"\n【用户ID】：{res['data']['id']}"
            return True
        else:
            self.msg += f"\n【登陆结果】：登陆失败，请重新获取token"
            return False
    
    def check_in(self):
        res = self.common_get("/user_sign/sign")
        if res:
            if "签到成功" in res['msg']:
                self.msg += f"\n【签到结果】：签到成功，获得{res['data']['rewards_info']['energy_release']}元收益"
                return
        self.msg += f"\n【签到结果】：{res['msg']}"
        
    def task_share(self):
        url = '/quest.quest/issueRewards'
        data = {
            "quest_id":4
        }
        res = self.common_post(url,data)
        if res:
            self.msg += f"\n【分享任务】：{res['msg']}"

    def task_follow(self):
        url = '/quest.quest/issueRewards'
        data = {
            "quest_id":2
        }
        res = self.common_post(url,data)
        if res:
            self.msg += f"\n【关注任务】：{res['msg']}"
            
    def user_withdraw(self,amount):
        url = f"/user.user_withdraw/apply"
        data = {
            "pay_gateway": "wechat",
            "fruit_withdraw_amount": str(amount)
        }
        res = self.common_post(url,data)
        if res:
            self.msg += f"\n【提现结果】：{res['msg']}"   
    
    def run(self):
        self.msg = f"【账号备注】：{self.name}"  
        if self.get_user_info():
            self.msg += f"\n---------任务----------"
            self.check_in()
            self.task_share()
            self.task_follow()
            self.msg += f"\n---------资产----------"
            res = self.common_get("/user/info")
            if res:
                amount = res['data']['remaining_fruits']
                remaining_energies = res['data']['remaining_energies']
                self.msg += f"\n【当前能量】：{remaining_energies}"  
                self.msg += f"\n【当前余额】：{amount}"  
                if amount>=0.3:
                    self.user_withdraw(amount)
                else:
                  self.msg += f"\n【提现结果】：不足0.3元，跳过提现"
        self.pushMsg(self.msg)
        pass


if __name__=="__main__":
    sender = middleware.Sender(middleware.getSenderID())
    plugin={
        "key":"vhook_dongfangjishi_",
        "name":sender.getPluginName(),
        "ver": sender.getPluginVersion(),
        "sender":sender,
    }
    tool = hook.TOOL(sender,plugin)
    check_ver()
    if tool.msg == '东方配置':
        if tool.isAdmin:
            edit_conf()
        exit(1)
    account = ACCOUNT()
    if tool.msg == "东方超管" and tool.isAdmin:
        tool.account_manger_admin()
        exit(0)
    if tool.msg == '东方管理':
        account.accoount_manager()
        exit(1)
    if tool.msg == '东方登陆' or tool.msg == "东方登录":
        account.addCount()
        exit()
    if tool.imType == "fake" :
        user_data_arr = account.cron_account_arr()
    elif tool.msg == "dffk" and tool.isAdmin:
         user_data_arr = account.cron_account_arr()
    else:
        user_str = middleware.bucketGet(f"{tool.plugin_pre}{tool.imType}", tool.userId)
        if not user_str or user_str == "":
            account.addCount()
            exit(1)
        user_data_arr = json.loads(user_str)
        for i, user_data in enumerate(user_data_arr):
            user_data["push_user_id"] = tool.userId
            user_data["push_im_type"] = tool.imType
            user_data['index'] = i + 1
            user_data['total'] = len(user_data_arr)
    if len(user_data_arr) == 0:
        tool.replyMsg("账号全部被禁用，请启用后再查询！")
        exit(0)
    tool.log_info(f"开始运行，共{len(user_data_arr)}个账号")
    tool.replyMsg("任务开始执行，请稍后......")
    for index, user_data in enumerate(user_data_arr,start=1):
        current = account.auth_time(datetime.now(),0)
        if user_data['disable'] !="n":
            tool.log_info(f"**********{tool.plugin_name} 账号禁用状态*********跳过执行")
            continue
        if(user_data['expire']<=current):
            tool.replyMsg(f"**********{tool.plugin_name}过期提醒*********\n账号：{user_data['name']}：已过期！请重新登陆")
            continue
        DONGFANGJISHI(index,user_data).run()
    exit(0)
        