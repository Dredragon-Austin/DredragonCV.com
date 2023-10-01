let Infos = document.getElementById('Info')
let form = document.getElementById('Type')
Infos.classList.toggle('Hide')
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function CheckEmail() {
    let email = document.getElementById('email').value;
    if (regex.test(email) == true) {
        form.classList.toggle('Hide')
        Infos.classList.remove('Hide')
    }
    else {
        document.getElementById('textdanger').innerHTML = "Bạn đã nhập sai vui lòng nhập đúng định dạng email";
    }
    if (email == "") {
        document.getElementById('textdanger').innerHTML = "";
    }
}
const blocks = document.querySelectorAll('.blocks');
const block = document.querySelectorAll('.block')
const hovers = document.querySelectorAll('.hovers');
const icon = document.querySelectorAll('.icon');
const icon_text = document.querySelectorAll('.icon-text');

for (let i = 0; i <= blocks.length; i++) {
    block[i].addEventListener("mouseover", function () {
        hovers[i].classList.remove('Hide');
    });
    block[i].addEventListener("mouseout", function () {
        hovers[i].classList.add('Hide');
    });
    hovers[i].addEventListener("click", function () {
        if (icon[i].classList.contains('fa-arrow-down')) {
            blocks[i].classList.remove('Hide');
            icon[i].classList.remove('fa-arrow-down');
            icon[i].classList.add('fa-arrow-up');
            icon_text[i].innerHTML = "View Less";
        }
        else {
            blocks[i].classList.add('Hide');
            icon[i].classList.add('fa-arrow-down');
            icon[i].classList.remove('fa-arrow-up');
            icon_text[i].innerHTML = "View More";
        }

    });


}