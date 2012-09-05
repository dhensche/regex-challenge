//http://callumacrae.github.com/regex-tuesday/challenge1.html
var regex = /\b(\S+)(\s+)(\1)\b/ig, replacement = "$1$2<strong>$3</strong>"