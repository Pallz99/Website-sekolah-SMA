document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript berhasil dimuat!");
    
    // Cek apakah elemen ada sebelum mengaksesnya
    const uniformCards = document.querySelectorAll('.uniform-card');
    if (uniformCards.length > 0) {
        uniformCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.querySelector('.uniform-details').style.display = 'flex';
            });

            card.addEventListener('mouseleave', function () {
                this.querySelector('.uniform-details').style.display = 'none';
            });
        });
    } else {
        console.warn("Elemen .uniform-card tidak ditemukan!");
    }

    // Efek Scroll untuk Visi & Misi
    const visiMisi = document.querySelector(".visi-misi-container");
    function checkScroll() {
        if (visiMisi) {
            let position = visiMisi.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                visiMisi.classList.add("visible");
            }
        }
    }
    window.addEventListener("scroll", checkScroll);
});
