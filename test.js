function convertHTML(str) {
  function strEncode(char) {
    switch (char) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case "'":
      return "&apos;";
    case '"':
      return "&quot;";
    }
  }
  return str.replace(/[&<>"';]/g, strEncode);
}

console.log(convertHTML("Schindler's List"));