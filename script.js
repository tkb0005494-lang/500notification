const triggerBtn = document.getElementById('triggerBtn');
const notification = document.getElementById('notification');

// 點擊觸發
triggerBtn.addEventListener('click', () => {
  notification.classList.toggle('active');
});

function updateClock() {
  const now = new Date();
  
  // 時間：14:05 格式
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('current-time').textContent = `${hours}:${minutes}`;
  
  // 日期：12月26日 星期五
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dayList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const day = dayList[now.getDay()];
  
  document.getElementById('current-date').textContent = `${month}月${date}日 ${day}`;
}

// 初始化並每秒檢查一次
updateClock();
setInterval(updateClock, 1000);