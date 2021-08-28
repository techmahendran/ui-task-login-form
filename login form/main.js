// Select DOM Items
const input = document.getElementById('text')
const password = document.getElementById('password')
const msg = document.querySelector('.msg')
const userlist = document.querySelector('.list')

const logBtn = document.getElementById('login')
logBtn.addEventListener('click', hangleClick)

function hangleClick(e) {
    e.preventDefault()
    
    if (input.value === '' || password.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter the Fileds'

        // Remove error msg
        setTimeout(() => msg.remove(), 3000);
    } else {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${input.value} ${password.value}`))
    
        userlist.appendChild(li)

        // Clear fileds
        input.value = ''
        password.value = ''
    } 
}

