function generateHashtag (str) {
    if(str.length == 0) return false;
    if (str == " ".repeat(200)) return false;
    console.log(str.length)
    let result = str.split(' ')
    console.log(result)
    result = result.map((e)=>e.charAt(0).toUpperCase()+e.slice(1))
    console.log(result)
    result = '#' + result.join('');
    console.log(result)


    if(result.length > 140 || result.length == 0)  return false
    return result
  }
  generateHashtag ("")