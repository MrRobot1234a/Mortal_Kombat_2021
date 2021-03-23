"use strict";

window.addEventListener(`DOMContentLoaded`, (e) => {


    //trailer
    const button = document.querySelector(`#button`),
          modal = document.querySelector(`.trailer`),
          tagVideo = document.querySelector(`.trailer_video`),
          closeTrailer = document.querySelector(`.trailer_close`);

    console.dir(tagVideo);

    function showTrailer() {
        modal.classList.remove(`hide`);
        modal.classList.add(`show`);
        document.body.style.overflow = `hidden`;
    }

    function hideTrailer(selector) {
        modal.classList.remove(`show`);
        modal.classList.add(`hide`);
        document.body.style.overflow = ``;
        selector.pause();
    }

    closeTrailer.addEventListener(`click`, (e) => {
        hideTrailer(tagVideo);
    });

    button.addEventListener(`click`, (e) => {
        showTrailer();
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modal.classList.contains(`show`)) {
            hideTrailer(tagVideo);
        }
    });

    modal.addEventListener(`click`, (e) => {
        if (e.target === modal) {
            hideTrailer(tagVideo); 
        }
         
    });


    //pre-order

    const preOrder = document.querySelector(`.preOrder`),
          btnPreOrder = document.querySelector(`.information_wrapper_buttons_button_1`),
          closePreOrder = document.querySelector(`.preOrder_wrapper_close`);

    function showFormPreOrder() {
        preOrder.classList.add(`show`);
        document.body.style.overflow = `hidden`;
    }

    function hideFormPreOrder() {
        preOrder.classList.remove(`show`);
        document.body.style.overflow = ``;
    }

    btnPreOrder.addEventListener(`click`, (e) => {
        showFormPreOrder();
    });

    closePreOrder.addEventListener(`click`, (e) => {
        hideFormPreOrder();
    });

    preOrder.addEventListener(`click`, (e) => {
        if (e.target === preOrder && e.target.classList.contains(`show`)) {
            hideFormPreOrder();
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && preOrder.classList.contains(`show`)) {
            hideFormPreOrder();
        }
    });

});