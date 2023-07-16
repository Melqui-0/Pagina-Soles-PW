class ModalViewImage {
    constructor() {
        this.open = false;
        this.image = null;
        this.callback = null;
        this.section = document.createElement('section');
        this.section.classList.add("camara-section");
    }

    init = () => {
        this.render();
        return this.section;
    }

    openModal = (image, cb) => {
        console.log(image);
        this.image = image;
        this.open = true;
        this.render();
        this.callback = cb ? cb : null;
    }

    handleClickCloseModalViewButton = (e) => {
        const modalView = this.section.querySelector('.modal-view');
        this.image = null;
        this.open = false;
        
        if (this.callback) {
            this.callback();
        }

        modalView.close();
    }

    addEvents = () => {
        const modalViewCloseButton = this.section.querySelector('.modal-view__close-button');
        modalViewCloseButton.addEventListener('click', this.handleClickCloseModalViewButton);
    }

    render = () => {
        this.section.innerHTML = `
        <dialog ${this.open ? "open='true'" : ""} class="modal-view">
            <section>
                <header>
                    <button class="modal-view__close-button">
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <div>
                    <img src=${this.image ? this.image.src : ""} alt="" class="modal-view__image">
                </div>
            </section>
        </dialog>
        `

        this.addEvents();
    }
}