auto.waitFor();//获取无障碍服务权限
// console.show();//开启悬浮窗
// console.info("");

var appName = "拼多多";
launchApp(appName);
toast("打开成功")


sleep(3000) // 打开app 等一下
var b = text("多多视频").findOne().bounds();
click(b.centerX(), b.centerY());


sleep(2000) //点击完在等一下

var cnt = 1
while(cnt < 1000){

    gesture(1000, [300, 1800], [300, 300]); //
    cnt += 1;
    sleep(5000)
}
