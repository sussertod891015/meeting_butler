/*
 * @Author: Sussertod
 * @Date:   2016-09-27 11:37:43
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 11:37:48
 */

'use strict';

//打印
export function log() {
    let logStarMsg = 'log:------------------------------>start';
    let logEndMsg = 'log:------------------------------>end';
    window.console.log('');
    window.console.log(logStarMsg);
    window.console.log.apply(console, arguments);
    window.console.log(logEndMsg);
    window.console.log('');
}

//随机数
export function randomNum(min_, max_) {
    return Math.floor(Math.random() * (max_ - min_ + 1)) + min_;
}

//获取参数
export function getRequest() {
    let url = window.location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0, len = strs.length; i < len; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

//验证手机号
export function checkMobile(value) {
    let reg = /^(0|86|17951)?(13|15|17|18|14)[\d]{9}$/;
    return reg.test(value);
};

//验证邮箱
export function checkEmail(value) {
    let email = new RegExp(/[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/);
    return email.test(value);
};

//获取浏览器信息
export function browser() {
    let ua = navigator.userAgent.toLowerCase();
    let app = navigator.appVersion.toLowerCase();
    let browser = {};
    let sys = {};
    let device = {};

    let _ins = {
        init: function(ua_) {
            if (ua_) ua = ua_.toLowerCase();
            let b;
            (b = ua.match(/msie ([\d.]+)/)) ? browser.ie = b[1]: undefined;
            (b = ua.match(/firefox\/([\d.]+)/)) ? browser.firefox = b[1]: undefined;
            (b = ua.match(/crios\/([\d.]+)/)) ? browser.chromemob = b[1]: undefined;
            (b = ua.match(/opera.([\d.]+)/)) ? browser.opera = b[1]: undefined;
            (b = ua.match(/micromessenger\/([\d.]+)/)) ? browser.micromessenger = b[1]: undefined;
            (b = ua.match(/ucbrowser\/([\d.]+)/)) ? browser.ucbrowser = b[1]: undefined;
            (b = ua.match(/ uc /)) ? browser.ucbrowser = b: undefined;
            (b = ua.match(/miuibrowser\/([\d.]+)/)) ? browser.miuibrowser = b[1]: undefined;
            (b = ua.match(/weibo__([\d.]+)/)) ? browser.weibo = b[1]: undefined;
            (b = ua.match(/qq\/([\d.]+)/)) ? browser.qq = b[1]: undefined;
            (b = ua.match(/mqqbrowser\/([\d.]+)/)) ? browser.mqqbrowser = b[1]: undefined;
            (b = ua.match(/maxthon\/([\d.]+)/)) ? browser.maxthon = b[1]: undefined;
            (b = ua.match(/baiduboxapp\/([\d.]+)/)) ? browser.baiduapp = b[1]: undefined;
            (b = ua.match(/baidubrowser\/([\d.]+)/)) ? browser.baidubrowser = b[1]: undefined;
            (b = ua.match(/chrome\/([\d.]+)/)) ? browser.chrome = b[1]: undefined;
            (b = ua.match(/version\/([\d.]+).*safari/)) ? browser.safari = b[1]: 0;

            let s;
            (s = ua.match(/windows nt ([\d.]+)/)) ? sys.windows = s[1]: undefined;
            (s = ua.match(/mac os x ([\d._]+)/)) ? sys.mac = s[1]: undefined;
            (s = ua.match(/cpu iphone os ([\d._]+)/)) ? sys.ios = s[1]: undefined;
            (s = ua.match(/cpu os ([\d._]+)/)) ? sys.ios = s[1]: undefined;
            (s = ua.match(/iph os ([\d._]+)/)) ? sys.ios = s[1]: undefined;
            (s = ua.match(/android ([\d._]+)/)) ? sys.android = s[1]: undefined;
            (s = ua.match(/tablet os ([\d.]+)/)) ? sys.tabletos = s[1]: undefined;

            let d;
            let oppo = ["x909t", "r827t", "x909"];
            for (let i = 0; i < oppo.length; i++) {
                (ua.indexOf(oppo[i]) > -1) ? device.oppo = oppo[i]: undefined;
            }
            let nubia = ["nx507j"];
            for (i = 0; i < nubia.length; i++) {
                (ua.indexOf(nubia[i]) > -1) ? device.nubia = nubia[i]: undefined;
            }
            (d = ua.match(/iphone/)) ? device.iphone = d: undefined;
            (d = ua.match(/iph os/)) ? device.iphone = d: undefined;
            (d = ua.match(/ipad/)) ? device.ipad = d: undefined;
            (d = ua.match(/ipod/)) ? device.ipod = d: undefined;
            (d = ua.match(/macintosh/)) ? device.mac = d: undefined;
            (d = ua.match(/windows/)) ? device.pc = d: undefined;
            (d = ua.match(/playbook/)) ? device.blackberry = d: undefined;
            (d = ua.match(/gt-([a-z\d.]+)/)) ? device.samsung = d[1]: undefined;
            (d = ua.match(/sch-([a-z\d.]+)/)) ? device.samsung = d[1]: undefined;
            (d = ua.match(/sm-([a-z\d.]+)/)) ? device.samsung = d[1]: undefined;
            (d = ua.match(/sgh-([a-z\d.]+)/)) ? device.samsung = d[1]: undefined;
            (d = ua.match(/(hm note [a-z\d.]+)/)) ? device.xiaomi = d[1]: undefined;
            (d = ua.match(/(mi [\d.]+)/)) ? device.xiaomi = d[1]: undefined;
            (d = ua.match(/ (m[\d.]+) /)) ? device.meizu = d[1]: undefined;
            (d = ua.match(/lenovo_([a-z\d.]+)/)) ? device.lenove = d: undefined;
            (d = ua.match(/sonyericsson([a-z\d.]+)/)) ? device.sonyericsson = d[1]: undefined;
            (d = ua.match(/sony([a-z\d.]+)/)) ? device.sony = d[1]: undefined;
            (d = ua.match(/htc ([a-z\d.]+)/)) ? device.htc = d[1]: undefined;
            (d = ua.match(/changhong([a-z\d.]+)/)) ? device.changhong = d[1]: undefined;
            (d = ua.match(/nexus ([a-z\d.]+)/)) ? device.nexus = d[1]: undefined;
            (d = ua.match(/lg-([a-z\d.]+)/)) ? device.lg = d[1]: undefined;
            (d = ua.match(/huawei_([a-z\d.]+)/)) ? device.huawei = d[1]: undefined;
            (d = ua.match(/huawei([a-z\d.]+)/)) ? device.huawei = d[1]: undefined;
            (d = ua.match(/hisense ([a-z\d.]+)/)) ? device.hisense = d[1]: undefined;
            (d = ua.match(/hs-([a-z\d.]+)/)) ? device.hisense = d[1]: undefined;

        },
        device: function() {
            this.init();
            if (device.iphone) return ("iPhone");
            if (device.ipad) return ("iPad");
            if (device.ipod) return ("iPod");
            if (device.mac) return ("Mac");
            if (device.pc) return ("PC");
            if (device.blackberry) return ("BlackBerry");
            if (device.samsung) return ("Samsung");
            if (device.xiaomi) return ("XiaoMi");
            if (device.sonyericsson) return ("SonyEricsson");
            if (device.sony) return ("Sony");
            if (device.changhong) return ("Changhong");
            if (device.lenove) return ("Lenove");
            if (device.htc) return ("HTC");
            if (device.nexus) return ("Nexus");
            if (device.lg) return ("LG");
            if (device.oppo) return ("OPPO");
            if (device.huawei) return ("HUAWEI");
            if (device.meizu) return ("MEIZU");
            if (device.hisense) return ("Hisense");
            if (device.nubia) return ("nubia");
        },
        dev_ver: function() {
            this.init();
            let WinWidth = window.screen.width;
            let WinHeight = window.screen.height;
            let WinPixel = window.devicePixelRatio;
            if (device.iphone) {
                if (WinWidth == 320 && WinHeight == 480 && WinPixel == 1) return ("3GS");
                if (WinWidth == 320 && WinHeight == 480 && WinPixel == 2) return ("4/4S");
                if (WinWidth == 320 && WinHeight == 568 && WinPixel == 2) return ("5/5S");
                if (WinWidth == 375 && WinHeight == 667 && WinPixel == 2) return ("6");
                if (WinWidth == 414 && WinHeight == 736 && WinPixel == 3) return ("6Plus");
            }
            if (device.ipad) {
                if (WinWidth == 1024 && WinHeight == 768 && WinPixel == 1) return ("1/2/Mini");
                if (WinWidth == 1024 && WinHeight == 768 && WinPixel == 2) return ("3/4/Air");
            }
            if (device.samsung) return (device.samsung);
            if (device.xiaomi) return (device.xiaomi);
            if (device.lenove) return (device.lenove);
            if (device.sonyericsson) return (device.sonyericsson);
            if (device.sony) return (device.sony);
            if (device.htc) return (device.htc);
            if (device.changhong) return (device.changhong);
            if (device.nexus) return (device.nexus);
            if (device.lg) return (device.lg);
            if (device.oppo) return (device.oppo);
            if (device.huawei) return (device.huawei);
            if (device.meizu) return (device.meizu);
            if (device.hisense) return (device.hisense);
            if (device.nubia) return (device.nubia);
        },
        system: function() {
            this.init();
            if (sys.windows) return ("Windows");
            if (sys.mac) return ("Mac OS X");
            if (sys.ios) return ("IOS");
            if (sys.android) return ("Android");
            if (sys.tabletos) return ("Tablet OS");
        },
        sys_ver: function() {
            this.init();
            let version = {};

            if (sys.ios) return (sys.ios.replace(/_/g, "."));
            if (sys.windows) {
                version = {
                    "5.0": "2000",
                    "5.1": "XP",
                    "6.0": "Vista",
                    "6.1": "7",
                    "6.2": "8",
                    "6.3": "8.1",
                    "10.0": "10"
                };
                for (let s in version) {
                    if (s == sys.windows || s == sys.mac) {
                        return (version[s]);
                    }
                }
            }
            if (sys.mac) return (sys.mac.replace(/_/g, "."));
            if (sys.android) return (sys.android);
            if (sys.tabletos) return (sys.tabletos);
        },
        browser: function() {
            this.init();
            if (browser.ie) return ('IE');
            if (browser.firefox) return ('Firefox');
            if (browser.chromemob) return ('Chrome Mobile');
            if (browser.opera) return ('Opera');
            if (browser.micromessenger) return ('WeiXin');
            if (browser.ucbrowser) return ('UC');
            if (browser.miuibrowser) return ('MiuiBrowser');
            if (browser.weibo) return ('Weibo');
            if (browser.qq) return ('QQ');
            if (browser.mqqbrowser) return ('QQBrowser');
            if (browser.maxthon) return ('Maxthon');
            if (browser.baiduapp) return ('BaiDuApp');
            if (browser.baidubrowser) return ('BaiDuBrowser');
            if (browser.chrome) return ('Chrome');
            if (browser.safari) return ('Safari');
        },
        bro_ver: function() {
            this.init();
            if (browser.ie) return (browser.ie);
            if (browser.firefox) return (browser.firefox);
            if (browser.chromemob) return (browser.chromemob);
            if (browser.opera) return (browser.opera);
            if (browser.micromessenger) return (browser.micromessenger);
            if (browser.ucbrowser) return (browser.ucbrowser);
            if (browser.miuibrowser) return (browser.miuibrowser);
            if (browser.weibo) return (browser.weibo);
            if (browser.qq) return (browser.qq);
            if (browser.mqqbrowser) return (browser.mqqbrowser);
            if (browser.maxthon) return (browser.maxthon);
            if (browser.baiduapp) return (browser.baiduapp);
            if (browser.baidubrowser) return (browser.baidubrowser);
            if (browser.chrome) return (browser.chrome);
            if (browser.safari) return (browser.safari);
        },
        ismobile: function() {
            let mobile = false;
            (ua.match(/mobile/) || ua.match(/arm/)) ? mobile = true: mobile = false;
            return mobile;
        },
        // 重置
        clear: function() {
            browser = {};
            sys = {};
            device = {};
        },
        // 用户代理信息
        userAgent: function() {
            return (navigator.userAgent);
        },
        // 返回浏览器的平台和版本信息
        appVersion: function() {
            return (navigator.appVersion);
        },
        getUserAgent: function() {
            let u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPod: u.indexOf('iPod') > -1, //是否为iPod或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                isMac: u.indexOf('Mac') > -1, //是否是mac终端
                isLinux: u.indexOf('Linux') > -1, //是否是linux系统
                isWeiXin: navigator.userAgent.indexOf('MicroMessenger') > -1, //判断是不是微信浏览器
                isWindowsPhone: u.indexOf('Windows Phone') > -1 //是否是windows phone
            };
        },
        isPc: function() {
            return (!(_ins.getUserAgent().ios || _ins.getUserAgent().android || _ins.getUserAgent().isWindowsPhone));
        },
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    return _ins;
};


//获取屏幕宽高
export function getWindowSize() {
    return {
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight
    };
};

//获取rem缩放比例
export function getWindowScale() {
    return parseFloat(document.querySelector("html").style.fontSize) / 100;
}

//
export function adapter() {
    let remNum = 100;
    let screenWidth = 640;
    let docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = remNum * (clientWidth / screenWidth) + 'px';
        };
    if (!document.addEventListener) return;
    recalc();
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}

export function fixTouch() {
    document.addEventListener("touchstart", (event) => touchHandler(event));
    document.addEventListener("touchmove", (event) => touchHandler(event));
    document.addEventListener("mousedown", (event) => touchHandler(event));
    document.addEventListener("mousemove", (event) => touchHandler(event));

    function touchHandler(event) {
        let tag = event.target.parentNode.tagName;
        let thistag = event.target.tagName;
        if (tag != "A" && tag != "INPUT" && tag != "TEXTAREA" && tag != "SELECT" && thistag != "A" && thistag != "INPUT" && thistag != "TEXTAREA" && thistag != "SELECT") {
            event.preventDefault();
        }
    }
}
