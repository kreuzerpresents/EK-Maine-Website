//ON CHANGE RANGE 
document.querySelector(".sliderba input").addEventListener("input", function(){
document.querySelector(".originalba-image").style.width = this.value + "%";
});