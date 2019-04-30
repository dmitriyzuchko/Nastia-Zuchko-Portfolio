export const isiOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream;
};

export const isMobile = () => {
    const mobilePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobilePattern.test(navigator.userAgent);
};
