function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  var revStr = str.split('').reverse().join('')
  if (revStr === str) {
    return true
  } else {
    return false
  }
}

palindrome('madam')
