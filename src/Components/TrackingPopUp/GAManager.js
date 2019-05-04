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

const loadGoogleAnalytics = trackingID => {
    // Doesn't run tracking while in dev
    if (window.location.hostname === 'localhost') return;

    const script = document.createElement('script');

    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', trackingID);
};

class GAManager {
    trackingCookieName = 'canTrack';

    constructor(trackingID) {
        this.trackingID = trackingID;
    }

    acceptTracking = () => {
        setCookie(this.trackingCookieName, true, 356);
        loadGoogleAnalytics(GAManager.trackingID);
    };

    rejectTracking = () => {
        setCookie(this.trackingCookieName, false);
    };

    userAlreadyAsked() {
        const cookieValue = getCookieValue(this.trackingCookieName);

        if (cookieValue === null) return false;
        if (!this.trackingID) {
            console.log(
                `Set tracking ID for Google Analytics with GAManager.setID(id)`
            );
            return true;
        }
        if (cookieValue) loadGoogleAnalytics(this.trackingID);

        return true;
    }
}

export default GAManager;
