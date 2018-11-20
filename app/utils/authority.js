export function getAuthority() {
    return sessionStorage.getItem('react-template-authority') || 'admin';
}

export function setAuthority(authority) {
    return sessionStorage.setItem('react-template-authority', authority);
}
