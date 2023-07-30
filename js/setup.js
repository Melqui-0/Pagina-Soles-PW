const modalCamara = new ModalCamara();
const modalViewImage = new ModalViewImage();
const modalEditComment = new ModalEditComment();

const content = document.querySelector('.content');

const articleSeleccionar = document.querySelector("#article-seleccionar");
const articleSeleccionarContent = document.querySelector(".article-soles__content");
const articleSeleccionarDescriptons = [
    "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nulla?",
    "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nulla?",
    "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nulla?"
];

articleSeleccionarDescriptons.forEach(description => {
    articleSeleccionarContent.appendChild(
        new SubSection(
            description,
            modalCamara,
            modalViewImage,
            modalEditComment
        ).init());
});

content.appendChild(modalCamara.init());
content.appendChild(modalViewImage.init());
content.appendChild(modalEditComment.init());