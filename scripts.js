/*Auto-Add Dashes in Phone Number on Quote Overlay*/
var tele = document.querySelector('#tel');

tele.addEventListener('keyup', function(e){
  if (KeyboardEvent.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
  tele.value += '-';
  }
});

/*Character Counter on Quote Overlay*/
const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
    const target = e.target;
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}/${maxLength}`;
});

/*Clear Data on Quote Overlay When Closed*/ /*DOESNT WORK ATM*/
function clear() {
    document.getElementByID("form").reset();
}

/*Side Nav*/
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }