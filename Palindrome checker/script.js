const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultContainer = document.getElementById('result');

checkButton.addEventListener('click', ()=> {
    const text = textInput.value;
    if(text == ""){
        alert("Please input a value");
    }
    if(text.length == 1){
        resultContainer.textContent = `${text} is a palindrome`;
    }
    if(isPalindrom(text)){
        resultContainer.textContent =  `${text} is a palindrome`;
    }else{
        resultContainer.textContent =  `${text} is not a palindrome`;
    }
})

const isPalindrom = (text) => {
    text = getFilteredText(text);
    return text === text.split('').reverse().join('');
}

const getFilteredText = (text) => {
    return text.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "").toLowerCase();
}