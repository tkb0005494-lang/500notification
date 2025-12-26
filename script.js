const triggerBtn = document.getElementById('triggerBtn');
const notification = document.getElementById('notification');

triggerBtn.addEventListener('click', () => {
  notification.classList.toggle('active');
});

// 自動更新日期時間
function update() {
  const now = new Date();
  document.getElementById('current-time').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
  
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  document.getElementById('current-date').innerText = now.toLocaleDateString('zh-TW', options);
}
setInterval(update, 1000);
update();
