var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function() {
        
        var buttonText = this.innerText;
    
        if (buttonText === 'C') {
            screen.innerText = ''; 
        }
    
        else if (buttonText === '←') {
            var currentText = screen.innerText;
            screen.innerText = currentText.substring(0, currentText.length - 1);
        }
        
        else if (buttonText === '=') {
            if (screen.innerText !== '') {
                var result = eval(screen.innerText);
                screen.innerText = result;
            }
        }
        
        else {
            if (screen.innerText === 'Error') {
                screen.innerText = '';
            }
            screen.innerText = screen.innerText + buttonText;
        }
    };
}