class ModalCamara {
    constructor() {
        this.open = false;
        this.image = null;
        this.stream = null;
        this.callback = null;
        this.section = document.createElement('section');
        this.section.classList.add("camara-section");
    }

    init = () => {
        this.render();
        return this.section;
    }

    openModal = (cb) => {
        this.open = true;
        this.render();
        this.callback = cb ? cb : null;
    }

    useCamara = () => {
        const video = this.section.querySelector(".modal-webcam__video");
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                this.stream = stream;
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }

    turnOffCamara() {
        if (!this.stream) return;

        const tracks = this.stream.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
        this.stream = null;
    }

    takePhoto() {
        const video = this.section.querySelector(".modal-webcam__video");
        const canvas = this.section.querySelector(".modal-webcam__canvas");
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0 , 0, canvas.width, canvas.height);

        this.image = canvas.toDataURL();
        this.turnOffCamara();
        this.open = false;
    }

    handleClickCamaraButton = (e) => {
        this.takePhoto();
        if (this.callback) {
            this.callback(this.image);
        }
        this.render();
    }

    addEvents = () => {
        const modalWebcamTakePhoto = this.section.querySelector('.modal-webcam__take-photo');
        modalWebcamTakePhoto.addEventListener('click', this.handleClickCamaraButton);
    }

    render = () => {
        this.section.innerHTML = `
        <dialog class="modal-webcam" ${this.open ? "open=''" : ""}>
            <section>
                <canvas class="modal-webcam__canvas" width="500" height="500"></canvas>
                <video class="modal-webcam__video" width="500" height="500" autoplay></video>
                <button class="modal-webcam__take-photo">Take Photo</button>
            </section>
        </dialog>
        `

        this.addEvents();
        this.open && this.useCamara();
    }
}