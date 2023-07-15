class SubSection {
    constructor() {
        this.finished = false;
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

    addEvents = () => {
        const buttonClose = this.section.querySelector('.sub-section__finish-button');
        buttonClose.addEventListener('click', e => {
            this.finished = !this.finished;
            this.render();
        });
    }

    handleClickFinishButton = (e) => {
        this.finished = true;
    }

    render = () => {
        this.section.innerHTML = `
        <!-- Header -->
        <header>
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
            <button>Add Image</button>
            <button>Add Commnet</button>
        </div>
        <!-- Comments section -->
        <div>
            <!-- title -->
            <div><i class='bx bxs-comment-dots'></i><span>Comments</span></div>
            <!-- Comments -->
            <ul>
                <!-- Comment -->
                <li>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, modi!</span>
                    <i class='bx bx-edit'></i>
                </li>
            </ul>
        </div>

        <!-- Images section -->
        <div>
            <!-- title -->
            <div><i class='bx bxs-image-alt'></i><span>Images</span></div>
            <!-- Images -->
            <div>
                <!-- Image -->
                <div>
                    <img src="./Img/ibm.jpg" alt="photo">
                </div>
            </div>
        </div>

        <!-- View image modal -->
        <dialog>
            <section>
                <header>
                    <button>
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <div>
                    <img src="Img/ibm.jpg" alt="">
                </div>
            </section>
        </dialog>

        <!-- Edit commnet modal -->
        <dialog>
            <section>
                <header>
                    <button>
                        <i class='bx bxs-x-circle'></i>
                    </button>
                </header>
                <div>
                    <textarea>
                    </textarea>
                    <button>
                        Save
                    </button>
                </div>
            </section>
        </dialog>
        `
        this.addEvents();
    }
}