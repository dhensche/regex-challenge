//http://callumacrae.github.com/regex-tuesday/challenge1.html
var regex = /\b(\S+)(\s+)(\1)\b/ig, replacement = "$1$2<strong>$3</strong>"

//http://callumacrae.github.com/regex-tuesday/challenge2.html
//to match hex grey-scale colors
// ----> #(?:(?:([A-F\d])\1{2})|(?:([A-F\d]{2})\2{2}))
//to match rgb grey-scale colors
// ----> rgb(?:\([\s0]*([^\s]+?),[\s0]*\3,[\s0]*\3\)|a\([\s0]*([^\s]+?),[\s0]*\4,[\s0]*\4,.+?\))
//to match hsl grey-scale colors
// ----> hsl(?:\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%))\)|a\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%)),.+?\))
var regex = /^(?:#(?:(?:([A-F\d])\1{2})|(?:([A-F\d]{2})\2{2}))|rgb(?:\([\s0]*([^\s]+?),[\s0]*\3,[\s0]*\3\)|a\([\s0]*([^\s]+?),[\s0]*\4,[\s0]*\4,.+?\))|hsl(?:\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%))\)|a\([^,]+,\s*(?:0%,[^,]+|[^,]+,\s*(?:0%|100%)),.+?\)))$/i