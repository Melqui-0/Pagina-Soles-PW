class ModalEditComment {
    constructor() {
        this.open = false;
        this.comment = null;
        this.callback = null;
        this.section = document.createElement('section');
        this.section.classList.add("camara-section");
    }

    init = () => {
        this.render();
        return this.section;
    }

    openModal = (comment, cb) => {
        this.comment = comment;
        this.open = true;
        this.render();
        this.callback = cb ? cb : null;
    }

    handleClickCloseModalEditButton = (e) => {
        const modalEdit = this.section.querySelector('.modal-edit');
        this.open = false;
        modalEdit.close();
    }

    handleClickModalEditForm = (e) => {
        e.preventDefault();
        const modalEdit = this.section.querySelector('.modal-edit');
        const textarea = modalEdit.querySelector('.modal-edit__textarea');

        this.comment.comment = textarea.value;

        if (this.callback) {
            this.callback(this.comment);
        }

        this.open = false;
        modalEdit.close();
    }

    addEvents = () => {
        const modalEditForm = this.section.querySelector('.modal-edit__form');
        modalEditForm.addEventListener('submit', this.handleClickModalEditForm);

        const closeModalEditButton = this.section.querySelector('.modal-edit__close-button');
        closeModalEditButton.addEventListener('click', this.handleClickCloseModalEditButton);
    }

    render = () => {
        this.section.innerHTML = `
        <dialog ${this.open ? "open='true'" : ""} class="modal-edit">
            <section>
                <header>
                    <button class="modal-edit__close-button">
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <form class="modal-edit__form">
                    <textarea class="modal-edit__textarea">${this.comment ? this.comment.comment : ""}</textarea>
                    <button type="submit">
                        Save
                    </button>
                </form>
            </section>
        </dialog>
        `

        this.addEvents();
    }
}