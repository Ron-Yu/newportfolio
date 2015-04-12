// be careful of href links

skel.init({
    reset: 'full',
    containers: '100%',
    breakpoints: {
        large: {
            media: '(min-width: 1025px)',
            href: 'css/responsive/style-large.css',
            grid: { gutters: ['0', '0',] }
        },
        medium: {
            media: '(min-width: 769px)',
            href: 'css/responsive/style-medium.css',
            grid: { gutters: ['0', '0',] }
        },
        small: {
            media: '(max-width: 768px)',
            href: 'css/responsive/style-small.css',
            grid: { gutters: ['1.25em', '1.25em',] }
        },
        xsmall: {
          media: '(max-width: 480px)',
          href: 'css/responsive/style-xsmall.css',
          grid: { gutters: ['1em', '1em',] }
        }
    }
});

