const botao_mais = document.querySelector('.botao_mais')
const container = document.querySelector('.container')

botao_mais.addEventListener('click',()=>{
    if(container.style.display == 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
})