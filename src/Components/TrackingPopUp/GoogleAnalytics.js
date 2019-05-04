const trackingCookieName = 'canTrack';

const setCookie = (name, value, days = 30) => {
    let expires = '';

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 1000);
        expires = date.toUTCString();
    }

    document.cookie = `${name}=${value || ''}; expires=${expires}; path=/`;
};

const getCookieValue = name => {
    const cookies = document.cookie.split(';');
    let foundCookie = null;

    cookies.forEach(cookie => {
        const [currentName, currentValue] = cookie.split('=');
        if (currentName.trim() === name) foundCookie = currentValue;
    });

    return foundCookie;
};

const loadGoogleAnalytics = () => {
    // Doesn't run tracking while in dev
    if (window.location.hostname === 'localhost') return;

    const script = document.createElement('script');

    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-139426465-1';
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-139426465-1');
};

export const acceptTracking = () => {
    setCookie(trackingCookieName, true, 356);
    loadGoogleAnalytics();
};

export const rejectTracking = () => {
    setCookie(trackingCookieName, false);
};

export const userAlreadyAsked = () => {
    const cookieValue = getCookieValue(trackingCookieName);

    if (cookieValue === null) return false;
    if (cookieValue) loadGoogleAnalytics();

    return true;
};
