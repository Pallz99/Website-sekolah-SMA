document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("infoModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const closeModalBtn2 = document.getElementById("closeModalBtn2");

    // Fungsi membuka modal
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Fungsi menutup modal
    function closeModal() {
        modal.style.display = "none";
    }

    closeModalBtn.addEventListener("click", closeModal);
    closeModalBtn2.addEventListener("click", closeModal);

    // Tutup modal jika klik di luar
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tutup modal dengan tombol ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });


});
