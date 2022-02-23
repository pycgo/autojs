auto.waitFor();//获取无障碍服务权限
// console.show();//开启悬浮窗
// console.info("测试头条");

var appName = "今日头条";
launchApp(appName);
toast("打开成功")


// if(textContains("找工作").exists()){
    
//     click(500,300);
// }

// 分辨率
// setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
// click(1300,2100);
// setScreenMetrics(device.width, device.height);//还原本机分辨率

sleep(3000) // 打开app 等一下

click(500,300);

sleep(2000) //点击完在等一下

var cnt = 1
while(cnt < 5){

    gesture(1000, [300, 900], [300, 300]); //
    cnt += 1;
    sleep(1000)
}
