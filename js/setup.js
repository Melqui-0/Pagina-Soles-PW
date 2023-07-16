const modalCamara = new ModalCamara();
const modalViewImage = new ModalViewImage();
const modalEditComment = new ModalEditComment();
const subSection1 = new SubSection(modalCamara, modalViewImage, modalEditComment);

const content = document.querySelector('.content');
const solesSectionSeleccionar = document.querySelector('#article-seleccionar');
content.appendChild(modalCamara.init());
content.appendChild(modalViewImage.init());
content.appendChild(modalEditComment.init());
solesSectionSeleccionar.appendChild(subSection1.init());