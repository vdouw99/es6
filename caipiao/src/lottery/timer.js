/**
 * Created by zhangsanfeng
 * email: 488703045@qq.com
 * Time: 2018/12/16 21:49
 */

class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if (now - end) {  //倒计时已结束
            handle && handle();
        } else {
            let last_time = end - now;  //剩余时间
            const px_d = 1000 * 60 * 60 * 24;
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;
            let d = Math.floor(last_time / px_d);
            let h = Math.floor((last_time - d * px_d) / px_h);
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
            let r = [];
            d > 0 ? r.push(`<em>${d}</em>天`) : '';
            r.length || (h > 0) ? r.push(`<em>${h}</em>时`) : '';
            r.length || (m > 0) ? r.push(`<em>${m}</em>分`) : '';
            r.length || (s > 0) ? r.push(`<em>${s}</em>秒`) : '';
        }
        self.last_time = r.join('');
        update.call(self, r.join(''));
        setTimeout(()=> {
            self.countdown(end, update, handle);
        }, 1000);
    }
}