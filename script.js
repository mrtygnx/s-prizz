
// Sayfa açılışında login ekranı gelsin
window.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div id="loginBox" style="display:flex;flex-direction:column;align-items:center;gap:18px;background:#fff3fa;padding:7vw 4vw;border-radius:18px;box-shadow:0 4px 32px #a259e655;max-width:95vw;width:350px;">
            <h2 style="color:#a259e6;margin-bottom:10px;font-size:clamp(1.2rem,4vw,2rem);">Hoş geldin!</h2>
            <input id="username" type="text" placeholder="Kullanıcı Adı" style="padding:12px 18px;font-size:1.1rem;border-radius:8px;border:1px solid #a259e6;outline:none;width:100%;max-width:300px;">
            <input id="password" type="password" placeholder="Şifre" style="padding:12px 18px;font-size:1.1rem;border-radius:8px;border:1px solid #a259e6;outline:none;width:100%;max-width:300px;">
            <button id="loginBtn" style="padding:12px 28px;font-size:1.1rem;background:#a259e6;color:#fff;border:none;border-radius:10px;cursor:pointer;width:100%;max-width:300px;">Giriş Yap</button>
            <div id="loginError" style="color:#e74c3c;font-size:1rem;display:none;">Kullanıcı adı veya şifre yanlış!</div>
        </div>
    `;
    document.getElementById('loginBtn').addEventListener('click', function() {
        const user = document.getElementById('username').value.trim();
        const pass = document.getElementById('password').value.trim();
        if (user === 'eda123' && pass === '12345') {
            showSurprise();
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });
});


function showSurprise() {
    const container = document.querySelector('.container');
    // Adım 1: Devam etmek istiyor musun?
    container.innerHTML = `
        <div id="askContinue" style="display:flex;flex-direction:column;align-items:center;gap:18px;max-width:95vw;width:350px;">
            <h2 style="color:#a259e6;font-size:clamp(1.1rem,4vw,1.5rem);">Devam etmek istiyor musun?</h2>
            <button id="continueBtn" style="padding:12px 28px;font-size:1.1rem;background:#a259e6;color:#fff;border:none;border-radius:10px;cursor:pointer;width:100%;max-width:300px;">Evet</button>
        </div>
    `;
    document.getElementById('continueBtn').addEventListener('click', function() {
        askAreYouSure();
    });
}

function askAreYouSure() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div id="areYouSure" style="display:flex;flex-direction:column;align-items:center;gap:18px;max-width:95vw;width:350px;">
            <h2 style="color:#a259e6;font-size:clamp(1.1rem,4vw,1.5rem);">Emin misin?</h2>
            <button id="sureBtn" style="padding:12px 28px;font-size:1.1rem;background:#7c3aed;color:#fff;border:none;border-radius:10px;cursor:pointer;width:100%;max-width:300px;">Evet</button>
        </div>
    `;
    document.getElementById('sureBtn').addEventListener('click', function() {
        showFinalSurprise();
    });
}

function showFinalSurprise() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div id="surprise" style="display:flex;flex-direction:column;align-items:center;max-width:95vw;width:350px;">
            <h1 style="color:#a259e6;font-size:clamp(1.3rem,5vw,2.2rem);margin-bottom:8px;text-align:center;"> Doğum Günün Kutlu Olsun Nice Mutlu senelere🎉❤️</h1>
            <div style="color:#222;font-family:'Montserrat', 'Segoe UI', Arial, sans-serif;font-size:1.1rem;font-weight:400;margin-bottom:12px;letter-spacing:1px;">10.08.2001</div>
            <img src="img/Ekran görüntüsü 2025-08-07 224519.png" alt="eda" style="width:100%;max-width:260px;height:auto;object-fit:cover;border-radius:18px;box-shadow:0 4px 32px #a259e655;margin-bottom:18px;">
            <audio id="bdayAudio" src="ses2.mp3" autoplay loop></audio>
            <canvas id="confetti"></canvas>
            <div id="msgBox" style="width:100%;max-width:300px;margin-top:24px;display:flex;flex-direction:column;align-items:center;gap:10px;">
                <label for="bdayMsg" style="color:#a259e6;font-size:1.1rem;">Mesaj:</label>
                <textarea id="bdayMsg" rows="3"  style="width:100%;border-radius:8px;border:1px solid #a259e6;padding:10px;font-size:1rem;resize:none;"></textarea>
                <button id="sendMsgBtn" style="padding:10px 20px;font-size:1rem;background:#a259e6;color:#fff;border:none;border-radius:10px;cursor:pointer;width:100%;">Gönder</button>
                <div id="msgStatus" style="font-size:1rem;margin-top:6px;display:none;"></div>
            </div>
        </div>
        <button id="retryBtn" style="margin-top:30px;padding:12px 28px;font-size:1.1rem;background:#7c3aed;color:#fff;border:none;border-radius:10px;cursor:pointer;width:100%;max-width:300px;">Ana Sayfa</button>
    `;
    startConfetti();
    // Ses kontrolü ekle
    const audio = document.getElementById('bdayAudio');
    const controlsDiv = document.createElement('div');
    controlsDiv.style.display = 'flex';
    controlsDiv.style.alignItems = 'center';
    controlsDiv.style.gap = '10px';
    controlsDiv.style.marginBottom = '10px';
    controlsDiv.innerHTML = `
      <button id="audioToggle" style="padding:6px 16px;font-size:1rem;background:#a259e6;color:#fff;border:none;border-radius:8px;cursor:pointer;">Durdur</button>
      <input id="audioVolume" type="range" min="0" max="1" step="0.01" value="1" style="width:100px;">
    `;
    audio.parentNode.insertBefore(controlsDiv, audio.nextSibling);
    let isPlaying = true;
    document.getElementById('audioToggle').addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            this.textContent = 'Başlat';
        } else {
            audio.play();
            this.textContent = 'Durdur';
        }
        isPlaying = !isPlaying;
    });
    document.getElementById('audioVolume').addEventListener('input', function() {
        audio.volume = parseFloat(this.value);
    });

    document.getElementById('retryBtn').addEventListener('click', function() {
        location.reload();
    });

    // EmailJS script yükle (sadece bir kez yüklenir)
    if (!window.emailjs) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
        script.onload = function() { emailjs.init('X0qMK2Z0GHG8t-4Xm'); };
        document.body.appendChild(script);
    } else {
        emailjs.init('X0qMK2Z0GHG8t-4Xm');
    }

    document.getElementById('sendMsgBtn').addEventListener('click', function() {
        const msg = document.getElementById('bdayMsg').value.trim();
        const status = document.getElementById('msgStatus');
        if (!msg) {
            status.style.display = 'block';
            status.style.color = '#e74c3c';
            status.textContent = 'Lütfen bir mesaj yaz!';
            return;
        }
        status.style.display = 'block';
        status.style.color = '#a259e6';
        status.textContent = 'Gönderiliyor...';
        emailjs.send('service_bbpu96m', 'template_l2j2o2x', { message: msg })
            .then(function() {
                status.style.color = '#27ae60';
                status.textContent = 'Mesajın başarıyla gönderildi!';
                document.getElementById('bdayMsg').value = '';
            }, function(error) {
                status.style.color = '#e74c3c';
                status.textContent = 'Bir hata oluştu, tekrar dene.';
            });
    });
}

function startConfetti() {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    let pieces = [];
    const colors = ['#a259e6', '#f7e9ff', '#ffb4e6', '#7c3aed', '#fff'];
    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: 8 + Math.random() * 8,
            h: 8 + Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: 2 + Math.random() * 3,
            angle: Math.random() * 2 * Math.PI
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of pieces) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            ctx.restore();
            p.y += p.speed;
            p.angle += 0.02;
            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}
