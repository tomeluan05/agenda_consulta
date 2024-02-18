const botao__mais = document.querySelector('.botao__mais')
const container = document.querySelector('.container')

botao__mais.addEventListener('click',()=>{
    if(container.style.display == 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
})

