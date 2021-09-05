export function showNotification(setter) {
    setter(tue);
    setTimeout(() => {
        setter(false)
    }, 2000);
}