//http://callumacrae.github.com/regex-tuesday/challenge1.html
//http://callumacrae.github.com/regex-tuesday/challenge1.html?find=%2F%5Cb(%5CS%2B)(%5Cs%2B)(%5C1)%5Cb%2Fig&replace=%241%242%3Cstrong%3E%243%3C%2Fstrong%3E
var regex = /\b(\S+)(\s+)(\1)\b/ig, replacement = "$1$2<strong>$3</strong>"

//http://callumacrae.github.com/regex-tuesday/challenge2.html
//http://callumacrae.github.com/regex-tuesday/challenge2.html?find=%2F%5E(%3F%3A%23(%5Ba-f0-9%5D%7B1%2C2%7D)%5C1%7B2%7D%7Crgb(%3F!.*257)(%3F%3A%5C(%5B%5Cs0%5D*(%5B%5E%5Cs%5D%2B%3F)%2C%5B%5Cs0%5D*%5C2%2C%5B%5Cs0%5D*%5C2%5C)%7Ca%5C(%5B%5Cs0%5D*(%5B%5E%5Cs%5D%2B%3F)%2C%5B%5Cs0%5D*%5C3%2C%5B%5Cs0%5D*%5C3%2C.%2B%3F%5C))%7Chsl(%3F%3A%5C(%5B%5E%2C%5D%2B%2C%5Cs*(%3F%3A0%25%2C%5B%5E%2C%5D%2B%7C%5B%5E%2C%5D%2B%2C%5Cs*(%3F%3A0%25%7C100%25))%5C)%7Ca%5C(%5B%5E%2C%5D%2B%2C%5Cs*(%3F%3A0%25%2C%5B%5E%2C%5D%2B%7C%5B%5E%2C%5D%2B%2C%5Cs*(%3F%3A0%25%7C100%25))%2C.%2B%3F%5C)))%24%2Fi
//to match hex grey-scale colors
// ----> #([a-f0-9]{1,2})\1{2}
//to match rgb grey-scale colors
// ----> rgb(?!.*257)(?:\([\s0]*([^\s]+?),[\s0]*\2,[\s0]*\2\)|a\([\s0]*([^\s]+?),[\s0]*\3,[\s0]*\3,.+?\))
//to match hsl grey-scale colors
// ----> hsl(?:\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%))\)|a\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%)),.+?\))
var regex = /^(?:#([a-f0-9]{1,2})\1{2}|rgb(?!.*257)(?:\([\s0]*([^\s]+?),[\s0]*\2,[\s0]*\2\)|a\([\s0]*([^\s]+?),[\s0]*\3,[\s0]*\3,.+?\))|hsl(?:\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%))\)|a\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%)),.+?\)))$/i

//http://callumacrae.github.com/regex-tuesday/challenge3.html
//http://callumacrae.github.com/regex-tuesday/challenge3.html?find=%2F%5E(%3F%3A1%5Cd%7B3%7D%7C20(%3F%3A0%5Cd%7C1%5B0-2%5D))%5C%2F(%3F%3A0%5B1-9%5D%7C1%5B0-2%5D)%5C%2F(%3F%3A0%5B1-9%5D%7C%5B12%5D%5Cd%7C30)%20(%3F%3A%5B01%5D%5Cd%7C2%5B0-3%5D)(%3F%3A%3A(%3F%3A%5B0-5%5D%5Cd))%2B%24%2F
var regex = /^(?:1\d{3}|20(?:0\d|1[0-2]))\/(?:0[1-9]|1[0-2])\/(?:0[1-9]|[12]\d|30) (?:[01]\d|2[0-3])(?::(?:[0-5]\d))+$/

//http://callumacrae.github.com/regex-tuesday/challenge4.html
//http://callumacrae.github.com/regex-tuesday/challenge4.html?find=%2F(%5B%5E*%5D%7C%5E)%5C*((%3F%3A%5B%5E*%5D%7C%5C*%7B2%7D)%2B)%5C*(%3F!%5C*)%2Fg&replace=%241%3Cem%3E%242%3C%2Fem%3E
var regex = /([^*]|^)\*((?:[^*]|\*{2})+)\*(?!\*)/g, replacement = "$1<em>$2</em>"

//http://callumacrae.github.com/regex-tuesday/challenge5.html
//http://callumacrae.github.com/regex-tuesday/challenge5.html?find=%2F%5E%5Cd%7B1%2C3%7D(%3F%3A(%3F%3A%2C%5Cd%7B3%7D)*(%3F%3A%5C.%5Cd%2B)%3F%7C(%3F%3A%20%5Cd%7B3%7D)*(%3F%3A%2C%5Cd%2B)%3F)%24%2F
var regex = /^\d{1,3}(?:(?:,\d{3})*(?:\.\d+)?|(?: \d{3})*(?:,\d+)?)$/