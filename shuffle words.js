const s = 'milhões milhões milhões milhões \
país país país país país país \
exemplo exemplo exemplo exemplo \
não não não não não \
têm têm têm têm \
página página página página página \
partir partir partir partir partir \
será será será \
programa programa programa programa \
também também também também também \
três três três \
polícia polícia polícia polícia polícia \
preços preços preços preços preços preços \
presidente presidente presidente presidente \
qualquer qualquer qualquer qualquer qualquer \
'

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = s.split(' ')
  shuffle(arr);
  var s2 = arr.join(' ');
  console.log(s2);
