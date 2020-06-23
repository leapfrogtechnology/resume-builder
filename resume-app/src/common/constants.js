const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberCheck = /^(\+91-|\+91|\+|\+97|0)?\d{10}$/;

const linkCheck = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator

const refereeCheck = /^\d+$/;

const protocolRegEx = new RegExp("^(http|https)://");

const http = "https://";

const camelCase = /([A-Z]+)*([A-Z][a-z])/g;

export {
  emailCheck,
  phoneNumberCheck,
  linkCheck,
  refereeCheck,
  protocolRegEx,
  http,
  camelCase,
};
