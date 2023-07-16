class SubSection {
    constructor() {
        this.finished = false;
        this.editComment = false;
        this.commentSelected = null;
        this.viewImage = false;
        this.viewImageSelected = null;
        this.comments = [];
        this.images = [];
        this.score = 0;
        this.section = document.createElement('section');
        this.section.classList.add("sub-section");
    }

    init = () => {
        this.render();
        return this.section;
    }

    generateID = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random + date;
    }

    handleClickFinishButton = (e) => {
        this.finished = !this.finished;
        this.render();
    }

    handleClickAddCommentButton = (e) => {
        const newId = this.generateID();
        this.comments.unshift({ id: newId, comment: "Empty comment" });
        this.render();
    }

    handleClickDeleteCommentButton = (e) => {
        const target = e.target.tagName === "I" ? e.target.parentElement.parentElement : e.target.parentElement
        const id = target.id;
        this.comments = this.comments.filter((comment) => comment.id !== id);
        this.editComment = false;
        this.render();
    }

    handleClickEditCommentButton = (e) => {
        const target = e.target.tagName === "I" ? e.target.parentElement.parentElement.parentElement : e.target.parentElement.parentElement;
        const id = target.id;
        this.commentSelected = this.comments.filter((comment) => comment.id === id)[0];
        this.editComment = true;
        this.render();
    }

    handleClickCloseModalEditButton = (e) => {
        const modalEdit = this.section.querySelector('.modal-edit');
        this.editComment = false;
        modalEdit.close();
    }

    handleClickModalEditForm = (e) => {
        e.preventDefault();
        const modalEdit = this.section.querySelector('.modal-edit');
        const textarea = modalEdit.querySelector('.modal-edit__textarea');

        this.comments = this.comments.map((comment) => {
            if (comment.id !== this.commentSelected.id) return comment;

            comment.comment = textarea.value;
            return comment;
        });

        this.editComment = false;
        this.render();
    }

    handleClickImage = (e) => {
        this.viewImageSelected = e.target;
        this.viewImage = true;
        this.render();
    }

    handleClickCloseModalViewButton = (e) => {
        const modalView = this.section.querySelector('.modal-view');
        this.viewImage = false;
        modalView.close();
    }

    addEvents = () => {
        const finishButton = this.section.querySelector('.sub-section__finish-button');
        finishButton.addEventListener('click', this.handleClickFinishButton);

        const addCommentButton = this.section.querySelector('.sub-section__add-comment-button');
        addCommentButton.addEventListener('click', this.handleClickAddCommentButton);

        const deleteCommentButton = this.section.querySelectorAll('.delete-comment-button');
        deleteCommentButton.forEach(button => {
            button.addEventListener('click', this.handleClickDeleteCommentButton);
        });

        const editCommentButton = this.section.querySelectorAll('.edit-comment-button');
        editCommentButton.forEach(button => {
            button.addEventListener('click', this.handleClickEditCommentButton);
        });

        const closeModalEditButton = this.section.querySelector('.modal-edit__close-button');
        closeModalEditButton.addEventListener('click', this.handleClickCloseModalEditButton);

        const modalEditForm = this.section.querySelector('.modal-edit__form');
        modalEditForm.addEventListener('submit', this.handleClickModalEditForm);

        const images = this.section.querySelectorAll('.sub-section__images__image');
        images.forEach((img) => {
            img.addEventListener('click', this.handleClickImage);
        });

        const modalViewCloseButton = this.section.querySelector('.modal-view__close-button');
        modalViewCloseButton.addEventListener('click', this.handleClickCloseModalViewButton);

    }

    render = () => {
        this.section.innerHTML = `
        <!-- Header -->
        <header>
            <div>
                <div>
                    ${this.finished ?
                `<i class='bx bxs-check-circle'></i>`
                :
                `<i class='bx bx-loader-circle'></i>`
            }
                </div>
                <div>
                    <h5>Name of section</h5>
                </div>
            </div>
            <div>
                <button class="sub-section__finish-button">
                    ${this.finished ? "Finished section" : "Finish section"}
                </button>
            </div>
        </header>
        <!-- Description and points -->
        <div>
            <div>
                <span>Description</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi sint repellendus magni rerum
                    nam?
                </p>
            </div>
            <div>
                <span>1</span>
            </div>
        </div>
        <!-- Buttons -->
        <div>
            <button class="sub-section__add-comment-button">Add Comment</button>
            <button>Add Image</button>
        </div>
        <!-- Comments section -->
        <div>
            <!-- title -->
            <div><i class='bx bxs-comment-dots'></i><span>Comments</span></div>
            <!-- Comments -->
            <ul class="sub-section__comments">
                <!-- Comment -->
                ${this.comments.map((comment) => {
                return `
                        <li>
                            <div class="comment" id=${comment.id}>
                                <div>
                                    <button class="edit-comment-button">
                                        <i class='bx bx-edit'></i>
                                    </button>
                                    <span>${comment.comment}</span>
                                </div>
                                <button class="delete-comment-button">
                                    <i class='bx bxs-x-circle'></i>
                                </button>
                            </div>
                        </li>
                        `
            }).join('')
            }
            </ul>
        </div>

        <!-- Images section -->
        <div>
            <!-- title -->
            <div><i class='bx bxs-image-alt'></i><span>Images</span></div>
            <!-- Images -->
            <div class="sub-section__images">
                <!-- Image -->
                <div class="sub-section__images__image">
                    <img src="./Img/ibm.jpg" alt="photo">
                </div>
            </div>
        </div>

        <!-- View image modal -->
        <dialog ${this.viewImage ? "open='true'" : ""} class="modal-view">
            <section>
                <header>
                    <button class="modal-view__close-button">
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <div>
                    <img src=${this.viewImageSelected ? this.viewImageSelected.src : ""} alt="" class="modal-view__image">
                </div>
            </section>
        </dialog>

        <!-- Edit commnet modal -->
        <dialog ${this.editComment ? "open='true'" : ""} class="modal-edit">
            <section>
                <header>
                    <button class="modal-edit__close-button">
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <form class="modal-edit__form">
                    <textarea class="modal-edit__textarea">${this.commentSelected ? this.commentSelected.comment : ""}</textarea>
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