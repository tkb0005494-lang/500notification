const triggerBtn = document.getElementById('triggerBtn');
const notification = document.getElementById('notification');

// 點擊觸發通知
triggerBtn.addEventListener('click', () => {
  notification.classList.add('active');
  
  // 5 秒後收起通知
  setTimeout(() => {
    notification.classList.remove('active');
  }, 5000);
});

// 自動更新時間
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('current-time').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
