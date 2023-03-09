function unctionFay(str){
    let regex = /[!@#$%^&*(),.?":{}|<>]/g;
    if(regex.test(str)) return str;
    return str.substring(1) + str.charAt(0)+ "ay";
  }

function pigIt(str){
    let result = str.split(' ').map(unctionFay).join(' ');
    console.log(result)
    return result;
}

pigIt('Pig latin is cool')