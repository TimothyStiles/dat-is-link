module.exports = isDatLink

function isDatLink (datLink) {
  var alphanum = /[^a-z\d]/
  if (typeof datLink !== 'string') {
    return false
  } else if (datLink.slice(0,6) === "dat://") {
    return true
  } else if (datLink.length !== 64) {
    return false  
  } else if (alphanum.test(datLink)) {
    return false
  } else {
    return true
  }
}
