export function formatDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(Date.now()).toLocaleDateString(undefined, options);
}
