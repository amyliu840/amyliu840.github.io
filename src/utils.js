export function isAtBottom() {
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
 
    return (scrollHeight - scrollTop) <= clientHeight;
}