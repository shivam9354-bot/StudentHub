// Basic send message animation
    const sendBtn = document.getElementById('send-btn');
    const input = document.getElementById('main-input');
    const chatArea = document.getElementById('chat-area');
    sendBtn.onclick = function() {
      let val = input.value.trim();
      if (!val) return;
      let el = document.createElement('div');
      el.className = 'msg sent';
      el.textContent = val;
      chatArea.appendChild(el);
      input.value = "";
      chatArea.scrollTop = chatArea.scrollHeight;
    };
    input.addEventListener('keydown', function(e){
      if(e.key === "Enter") sendBtn.click();
    });