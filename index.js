$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_reset = $("#reset");

    envelope.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }

    function showLoveText() {
        console.log("❤️ Animasi teks cinta dimulai!");
        const loveText = document.querySelector(".love-text");
    
        if (loveText) {
            loveText.classList.add("show");
    
            // Hapus teks setelah animasi selesai agar bisa diulang
            setTimeout(() => {
                loveText.classList.remove("show");
            }, 6000); // Sesuai durasi animasi
        } else {
            console.error("❌ Elemen .love-text tidak ditemukan!");
        }
    }    

    window.showLoveText = showLoveText;

    // Pastikan event listener dipasang setelah DOM siap
    document.addEventListener("DOMContentLoaded", function () {
        const loveFrame = document.querySelector(".love-frame");
        if (loveFrame) {
            loveFrame.addEventListener("click", showLoveText);
        } else {
            console.error("❌ Elemen .love-frame tidak ditemukan!");
        }
    });

    // document.addEventListener("DOMContentLoaded", function () {
    //     const audio = document.getElementById("bg-music");
    //     const musicBtn = document.getElementById("music-btn");
    
    //     // Set volume awal agar tidak terlalu besar
    //     audio.volume = 0.5;
    
    //     // Tambahkan event listener untuk tombol Play/Pause
    //     musicBtn.addEventListener("click", function () {
    //         console.log("🎵 Tombol Play ditekan!");
    //         if (audio.paused) {
    //             audio.play().then(() => {
    //                 console.log("✅ Musik dimainkan!");
    //                 musicBtn.textContent = "🔇 Pause";
    //             }).catch(error => {
    //                 console.error("❌ Autoplay dicegah oleh browser:", error);
    //                 alert("Klik layar sekali, lalu tekan Play!");
    //             });
    //         } else {
    //             console.log("⏸ Musik dihentikan!");
    //             audio.pause();
    //             musicBtn.textContent = "🔊 Play";
    //         }
    //     });
    // });
       
    
});
