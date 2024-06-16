document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const btn = document.querySelector(".btn");
    const closeBtn = document.querySelector(".close");

    btn.addEventListener("click", (e) => openModal(e));
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function openModal(e) {
        e.preventDefault();
        modal.classList.add("show");
    }

    function closeModal() {
        modalContent.classList.add("slide-up");
        setTimeout(() => {
            modal.classList.remove("show");
            modalContent.classList.remove("slide-up");
        }, 500); // Match the duration of the slide-up animation
    }
});
