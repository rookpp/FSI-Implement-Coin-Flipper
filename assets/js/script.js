let heads = 0;
let tails = 0;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', function ()  {
            let flip = Math.random() <.5
        if(flip){     //values of 1 are = to true, 0 = to false
            heads+=1
            document.getElementById('penny-image').src = 'assets\\images\\penny-heads.jpg';
            document.getElementById('message').textContent = 'You Flipped Heads!'
        }
        else{
            tails+=1
            document.getElementById('penny-image').src = 'assets\\images\\penny-tails.jpg';
            document.getElementById('message').textContent = 'You Flipped Tails!'
        }
        let sum = heads+tails;
    let pheads = 0;
    let ptails = 0;
    if (sum !=0)
    {
        pheads = (heads/sum)*100;
        ptails = (tails/sum)*100;
    }
    document.getElementById('heads').textContent = heads;
    document.getElementById('heads-percent').textContent = pheads.toFixed(2) + '%';
    document.getElementById('tails').textContent = tails;
    document.getElementById('tails-percent').textContent = ptails.toFixed(2) + '%';
    })
    document.getElementById('clear').addEventListener('click',function(){
        heads = 0;
        tails=0;
        pheads=0;
        ptails=0;
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
        document.getElementById('heads').textContent = heads;
        document.getElementById('heads-percent').textContent = pheads.toFixed(2) + '%';
        document.getElementById('tails').textContent = tails;
        document.getElementById('tails-percent').textContent = ptails.toFixed(2) + '%';
        document.getElementById('penny-image').src = 'assets\\images\\penny-heads.jpg';
    })
})