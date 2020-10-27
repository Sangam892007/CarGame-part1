class Form{
    constructor(){
        this.user = createInput("Name");
        this.submit = createButton("SUBMIT");
        this.label = createElement("H3");
    }
    display(){
        this.user.position(300,300);
        this.submit.position(300,400);
        this.submit.mousePressed(()=>{
            this.user.hide();
            this.submit.hide();
            var name = this.user.value();
            this.label.html("Hi " + name);
            this.label.position(300,300);
            playerCount = playerCount + 1;
            console.log(playerCount);
            player.updateCount(playerCount);
            player.update(name);
        });
    }
}