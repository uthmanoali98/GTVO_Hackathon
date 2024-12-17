// src/styles/theme.js

// Color tokens
const colors = {
    black1: '#141414',
    black2: '#2C2C2C',
    black3: '#434343',
    white1: '#141414',
    white2: '#E7E7E7',
    white3: '#D0D0D0',
    red_light: '#FFE2E2',
    red_main: '#FF3C3C',
    blue_light: '#E1E1FF',
    blue_main: '#3A36FF',
    green_light: '#DAFEEA',
    green_main: '#05F975',
    purple_light: '#FFE2FF',
    purple_main: '#FF3FFF',
};

// Typography tokens
const typography = {
    fontFamilyPrimary: '"Helvetica Neue", Helvetica, Arial, sans-serif',

    h1: {
        desktop: {
            fontSize: '2.625rem', // 42px
            lineHeight: '120%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        tablet: {
            fontSize: '2.25rem', // 36px
            lineHeight: '120%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        mobile: {
            fontSize: '1.875rem', // 30px
            lineHeight: '120%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
    },

    h2: {
        desktop: {
            fontSize: '2rem', // 32px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        tablet: {
            fontSize: '1.75rem', // 28px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        mobile: {
            fontSize: '1.5rem', // 24px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
    },

    h3: {
        desktop: {
            fontSize: '1.75rem', // 28px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        tablet: {
            fontSize: '1.5rem', // 24px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        mobile: {
            fontSize: '1.25rem', // 20px
            lineHeight: '125%',
            fontWeight: 700,
            fontStyle: 'normal',
        },
    },

    h4: {
        desktop: {
            fontSize: '1.5rem', // 24px
            lineHeight: 'normal', // "Auto" interpreted as normal
            fontWeight: 700,
            fontStyle: 'normal',
        },
        tablet: {
            fontSize: '1.25rem', // 20px
            lineHeight: 'normal',
            fontWeight: 700,
            fontStyle: 'normal',
        },
        mobile: {
            fontSize: '1.125rem', // 18px
            lineHeight: 'normal',
            fontWeight: 700,
            fontStyle: 'normal',
        },
    },

    subtitle: {
        desktop: {
            fontSize: '1.25rem', // 20px
            lineHeight: '135%',
            fontWeight: 500,
            fontStyle: 'normal',
        },
        tabletAndMobile: {
            fontSize: '1.125rem', // 18px
            lineHeight: '135%',
            fontWeight: 500,
            fontStyle: 'normal',
        },
        alt: {
            fontSize: '0.75rem', // 12px
            lineHeight: '135%',
            fontWeight: 500,
            fontStyle: 'normal',
        },
    },

    bodyLarge: {
        desktop: {
            fontSize: '1.25rem', // 20px
            lineHeight: '140%',
            fontWeight: 400,
            fontStyle: 'normal',
        },
        tabletAndMobile: {
            fontSize: '1.125rem', // 18px
            lineHeight: '140%',
            fontWeight: 400,
            fontStyle: 'normal',
        },
    },

    bodyReg: {
        desktop: {
            fontSize: '1.125rem', // 18px
            lineHeight: '125%',
            fontWeight: 400,
            fontStyle: 'normal',
        },
        tabletAndMobile: {
            fontSize: '1rem', // 16px
            lineHeight: '125%',
            fontWeight: 400,
            fontStyle: 'normal',
        },
    },

    bodySmall: {
        desktop: {
            fontSize: '1rem', // 16px
            lineHeight: 'normal', // "Auto" as normal
            fontWeight: 400,
            fontStyle: 'normal',
        },
        tabletAndMobile: {
            fontSize: '0.875rem', // 14px
            lineHeight: 'normal',
            fontWeight: 400,
            fontStyle: 'normal',
        },
    },
};

const theme = {
    colors,
    typography,
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
    },
};

export default theme;