// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogs from './data.js'

document.addEventListener("click", function(e){
   if(!dog.hasBeenSwiped){
       if(e.target.id === "reject-button"){
           document.getElementById("nope-badge").classList.remove("nope-badgeHidden")
    } else if (e.target.id === "accept-button") {
            dog.hasBeenLiked === true
            document.getElementById("liked-badge").classList.remove("like-badgeHidden")
        }        
    setNextDog()
   }     
})



function getNewDog(){
    const nextDogData = dogs.shift()
    return nextDogData  ? new Dog(nextDogData) : {}
}

function setNextDog (){
    if(dogs.length > 0) {
        dog.hasBeenSwiped = true
        setTimeout(() =>{
            dog = getNewDog()
            render()
            dog.hasBeenSwiped = false
            dog.hasBennLiked - false
        },2000)
        } else {
            dog.hasBeenSwiped = true
            endMessage()
        }
    }
    
 function endMessage() {
     setTimeout(function(){
         document.getElementById("card").innerHTML = `
        <div class="end-message-container">
           <h4> Thank you for visiting Tindog.       
          <br>
          <br>
          There are no more dogs available</h4>
         <div>
        `
     })
 }
 
 function render() {
     document.getElementById("card").innerHTML = dog.getDogHtml()
 }

let dog = getNewDog()
render()






