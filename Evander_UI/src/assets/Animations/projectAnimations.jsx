import anime from 'animejs';

export const projectCardMouseEnter = (bodyRef, imgRef) => {
    bodyRef.style.display = 'flex';
    anime({
        targets: [bodyRef],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500,
    });
    anime({
        targets: imgRef,
        filter: 'blur(5px)',
        easing: 'easeInOutQuad',
        duration: 500,
    });
};

export const projectCardMouseLeave = (bodyRef, imgRef) => {
    anime({
        targets: [bodyRef],
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: () => {
            // Hide the bodyRef element after the animation completes
            bodyRef.style.display = 'none';
        }
    });
    anime({
        targets: imgRef,
        filter: 'blur(0px)',
        easing: 'easeInOutQuad',
        duration: 500,
    });
};