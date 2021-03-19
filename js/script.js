"use strict";

window.addEventListener(`DOMContentLoaded`, (e) => {

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

    // modal.addEventListener(`click`, (e) => {
    //     if (e.target === modal) {
    //         hideTrailer(tagVideo); 
    //     }
         
    // });


});