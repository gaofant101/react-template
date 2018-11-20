/**
 * Parses the JSON returned by a network request
 * A response from a network request
 * @param  {object} response
 * The parsed JSON from the request
 * @return {object}
 */

const parseJSON = (response) => {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
};

/**
 * Checks if a network request came back fine, and throws an error if not
 * A response from a network request
 * @param  {object} response
 * Returns either the response, or throws an error
 * @return {object|undefined}
 */

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

/**
 * Requests a URL, returning a promise
 * The URL we want to request
 * @param  {string} url
 * The options we want to pass to "fetch"
 * @param  {object} [options]
 * The response data
 * @return {object}
 */

const request = (url, options) =>
    fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);

export default request;
