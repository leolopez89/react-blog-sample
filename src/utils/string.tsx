const sha256 = require('js-sha256');

// eslint-disable-next-line
export function getGravatarURL(email: string) {
    const address = String(email).trim().toLowerCase();

    const hash = sha256(address);

    return `https://www.gravatar.com/avatar/${hash}`;
}