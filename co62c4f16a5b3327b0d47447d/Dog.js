// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
   
    getDogHtml(){
        const {name, avatar, age, bio} = this
        return `
            <div class="dog-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age}</h4>
                    <div class="dog-bio"> ${bio}</div>
                     <img id="liked-badge"  class="badge-style like-badgeHidden"  src="images/badge-like.png">
                    <img id="nope-badge" class="badge-style nope-badgeHidden" src="images/badge-nope.png">
                    
                </div>
                    <img class="dog-img" src="${avatar}">
                   
            </div>`
    }
}

export default Dog