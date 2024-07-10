var dialog = document.querySelector('.dialog');
var closeDialog = document.querySelector('#closeDialog');
var openDialog = document.querySelector('#openDialog');

openDialog.onclick = function () {
    dialog.style.display = 'flex';
}

closeDialog.onclick = function () {
    dialog.style.display = 'none';
}