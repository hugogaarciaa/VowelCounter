
function counterVowel(){
    var text = document.getElementById('text');
    var count = 0;
    var vowel = 'aeiouAEIOU';
    for(var i = 0; i < text.value.length; i++){
        if(vowel.indexOf(text.value[i]) !== -1){
            count++;
        }
    }

    document.getElementById('result').innerHTML = "There are " + count + " vowels in the text";
}