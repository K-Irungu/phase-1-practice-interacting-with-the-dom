
var count;
var num = 0;



function doCount() {
    count = setInterval(function() {
        document.getElementById('counter').innerHTML = num;
        num++;
    }, 1000)}
  

document.addEventListener('DOMContentLoaded', function() {

    
    doCount();
    // let intervalID = setInterval(startCount, 1000);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', () => counter.innerHTML --);

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', () => counter.innerHTML ++);

    const likeButton = document.getElementById('heart');
    likeButton.addEventListener('click', function() {    
   
    const likesList = document.querySelector('.likes')
    const likedNumber = document.createElement('li')
    likedNumber.innerHTML =`${counter.innerHTML}` + ' has been liked 1 time';
    likesList.append(likedNumber);

    })

    
    function pause() {
        clearInterval(count);
    }

    function continueCounting() {
        doCount();
    }

    const pauseButton = document.getElementById('pause')
    pauseButton.addEventListener('click', function() {

        if(pauseButton.innerHTML === " pause ") {
            pause();
            document.getElementById('minus').setAttribute("disabled", true);
            document.getElementById('plus').setAttribute("disabled", true);
            document.getElementById('heart').setAttribute("disabled", true);
            document.getElementById('submit').setAttribute("disabled", true);
            pauseButton.innerHTML = " resume ";

        } else if(pauseButton.innerHTML === " resume " ) {
            document.getElementById('minus').removeAttribute("disabled");
            document.getElementById('plus').removeAttribute("disabled");
            document.getElementById('heart').removeAttribute("disabled");
            document.getElementById('submit').removeAttribute("disabled");
            pauseButton.innerHTML = " pause ";
            continueCounting();

        }
        
    


        })})

        





 

function appendInfo(e) {
    e.preventDefault();

    const userInput = document.getElementById('comment-input').value;
    const comment = document.createElement('ul');
    comment.append(userInput);

    const commentSection = document.getElementById('list');
    commentSection.append(comment);
}

document.getElementById('submit').addEventListener('click', appendInfo)
    

  





