const triggerBtn = document.getElementById('triggerBtn');
const notification = document.getElementById('notification');

// 點擊螢幕任何地方觸發通知
triggerBtn.addEventListener('click', () => {
    notification.classList.toggle('active');
});

// 自動更新時間與日期
function updateClock() {
    const now = new Date();
    
    // 時間格式 09:41
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
    
    // 日期格式 12月26日 星期五
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-TW', options);
}

// 初始化並每秒檢查一次
updateClock();
setInterval(updateClock, 1000);
