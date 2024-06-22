import anime from 'animejs';

export const fadeInUpStaggering = (targets) => {
    anime({
        targets: targets,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100), // stagger starts at 100ms between each element
    });
};

export const fadeInUpNoStaggering = (targets) => {
    anime({
        targets: targets,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 2000,
    });
};