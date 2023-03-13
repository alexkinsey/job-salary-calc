// This function converts a string to title case
export function toTitleCase(str) {
  let lowers = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'for',
    'nor',
    'as',
    'at',
    'by',
    'for',
    'from',
    'in',
    'into',
    'near',
    'of',
    'on',
    'onto',
    'to',
    'with',
  ];
  let uppers = ['id', 'tv'];

  str = str.toLowerCase().replace(/([^\W_]+[^\s-]*) */g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  str = str.replace(/:\s*\w/g, function (txt) {
    return txt.toUpperCase();
  });

  for (let i = 0, j = lowers.length; i < j; i++) {
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function (txt) {
      return txt.toLowerCase();
    });
  }

  for (let i = 0, j = uppers.length; i < j; i++) {
    str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase());
  }

  return str;
}
