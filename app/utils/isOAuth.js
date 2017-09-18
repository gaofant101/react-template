import { docCookies } from './docCookies';

export const isOAuth = {
    setOAuth(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        docCookies.setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure);
    },
    hasOAuth(name) {
        return docCookies.hasItem(name);
    },
    getOAuth(name) {
        return docCookies.getItem(name);
    },
    removeOAuth(sKey, sPath, sDomain) {
        docCookies.removeItem(sKey, sPath, sDomain);
    },
};
