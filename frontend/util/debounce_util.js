export function debounce(f, interval) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        setTimeout(f(...args), interval);
    }
}
