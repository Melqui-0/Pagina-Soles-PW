class SubSection {
    constructor(camara, viewImage, editComment) {
        this.camara = camara;
        this.viewImage = viewImage;
        this.editComment = editComment;

        this.finished = false;
        this.showMore = false;
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

    // Finish Event
    handleClickFinishButton = (e) => {
        this.finished = !this.finished;
        this.render();
    }

    // Show More Event
    handleClickShowMoreButton = (e) => {
        this.showMore = !this.showMore;
        this.render();
    }
    
    // Comments Events
    handleClickAddCommentButton = (e) => {
        if (!this.showMore) this.showMore = true;

        const newId = this.generateID();
        this.comments.unshift({ id: newId, comment: "Empty comment" });
        this.render();
    }

    handleClickDeleteCommentButton = (e) => {
        const target = e.target.tagName === "I" ? e.target.parentElement.parentElement : e.target.parentElement
        const id = target.id;
        this.comments = this.comments.filter((comment) => comment.id !== id);
        // this.editComment = false;
        this.render();
    }

    handleClickEditCommentButton = (e) => {
        const target = e.target.tagName === "I" ? e.target.parentElement.parentElement.parentElement : e.target.parentElement.parentElement;
        const id = target.id;
        const comment = this.comments.filter((comment) => comment.id === id)[0];

        this.editComment.openModal(comment, (newComment) => {
            this.comments = this.comments.map((comment) => {
                if (comment.id !== newComment.id) return comment;

                comment.comment = newComment.comment;
                return comment;
            });
            this.render();
        });
    }

    // Image Events
    handleClickAddImageButton = (e) => {
        if (!this.showMore) this.showMore = true;

        this.camara.openModal((image) => {
            const id = this.generateID();
            this.images.push({ id: id, img: image });
            this.render();
        });
    }

    handleClickImage = (e) => {
        this.viewImage.openModal(e.target);
    }

    handleClickDeleteImageButton = (e) => {
        const target = e.target.tagName === "I" ? e.target.parentElement.parentElement : e.target.parentElement;
        const id = target.id;
        this.images = this.images.filter((img) => img.id !== id);
        this.render();
    }

    // Input Score Events 
    handleScoreInputKeydown = (e) => {
        const allow = ['1', '2', '3', '4', '5', '0', 'Backspace'];

        if (!allow.includes(e.key) || (e.target.value.length > 1 && e.key !== 'Backspace')) {
            e.preventDefault();
        }

        if (allow.includes(e.key)) {
            e.target.value = '';
        }

    }

    handleScoreInputKeyup = (e) => {
        if (parseInt(e.target.value) > 5) {
            e.target.value = 5;
        }
        else if (parseInt(e.target.value) < 0) {
            e.target.value = 0;
        }

        this.score = parseInt(e.target.value);
    }

    addEvents = () => {
        // Finish event
        const finishButton = this.section.querySelector('.sub-section__finish-button');
        finishButton.addEventListener('click', this.handleClickFinishButton);

        // Show more
        const showMoreButton = this.section.querySelector('.sub-section__show-more');
        showMoreButton.addEventListener('click', this.handleClickShowMoreButton);

        // Comment events
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

        // Image events
        const addImageButton = this.section.querySelector('.sub-section__add-image-button');
        addImageButton.addEventListener('click', this.handleClickAddImageButton);

        const images = this.section.querySelectorAll('.sub-section__images__image__img');
        images.forEach((img) => {
            img.addEventListener('click', this.handleClickImage);
        });

        const deleteImageButtons = this.section.querySelectorAll('.sub-section__images__delete-image-button');
        deleteImageButtons.forEach((btn) => {
            btn.addEventListener('click', this.handleClickDeleteImageButton);
        });

        // Score event
        const scoreInputKeydown = this.section.querySelector('.sub-section__score');
        scoreInputKeydown.addEventListener('keydown', this.handleScoreInputKeydown);
        scoreInputKeydown.addEventListener('keyup', this.handleScoreInputKeyup);
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
            <button class="sub-section__finish-button btn-none btn-primary">
                ${this.finished ? "Finished section" : "Finish section"}
            </button>
        </div>
    </header>
    <!-- Description and points -->
    <div class="sub-section__content">
        <div class="sub-section__main">
            <div>
                <span>Description:</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi sint repellendus magni rerum
                    nam?
                </p>
            </div>
            <input type="text" class="sub-section__score" min="0" max="5" value=${this.score}>
        </div>
        <!-- Buttons -->
        <div>
            <button class="sub-section__add-comment-button btn-none btn-secundary">Add Comment</button>
            <button class="sub-section__add-image-button btn-none btn-secundary">Add Image</button>
            <button class="sub-section__show-more btn-none btn-secundary">${this.showMore ? "Show Less" : "Show More"}</button>
        </div>
        <div class="sub-section__extra ${this.showMore ? "" : "sub-section__extra--hide"}">
            <!-- Comments section -->
            <div>
                <!-- title -->
                <div class="sub-titles">
                    <i class='bx bxs-comment-dots'></i><span>Comments</span>
                </div>
                <!-- Comments -->
                <ul class="sub-section__comments">
                    <!-- Comment -->
                    ${this.comments.map((comment) => {
                    return `
                    <li>
                        <div class="comment" id=${comment.id}>
                            <div>
                                <button class="edit-comment-button btn-none">
                                    <i class='bx bx-edit'></i>
                                </button>
                                <span>${comment.comment}</span>
                            </div>
                            <button class="delete-comment-button btn-none">
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
                <div class="sub-titles">
                    <i class='bx bxs-image-alt'></i><span>Images</span>
                </div>
                <!-- Images -->
                <div class="sub-section__images">
                    ${this.images.map((img) => {
                    return `
                    <div class="sub-section__images__image" id=${img.id}>
                        <button class="sub-section__images__delete-image-button btn-none">
                            <i class='bx bxs-x-circle'></i>
                        </button>
                        <img class="sub-section__images__image__img" src=${img.img} alt="photo">
                    </div>
                    `
                    }).join('')
                    }
                </div>
            </div>
        </div>
    </div>
        `
        this.addEvents();
    }
}