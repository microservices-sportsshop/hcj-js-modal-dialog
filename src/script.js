document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", (e) => openModal(e));

    modal.addEventListener("click", (e) => {
        const evt = e.target.classList;
        if (evt.contains("modal") || evt.contains("close")) {
            closeModal();
        }
    });

    function openModal(e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    function closeModal() {
        modalContent.classList.add("slide-up");
        
        setTimeout(() => {
            modal.style.display = "none";
            modalContent.classList.remove("slide-up");
        }, 500);
    }
});
