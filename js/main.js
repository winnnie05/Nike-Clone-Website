
// featued shoes clothing and kids
const featureHomePage = document.getElementById('feature-home-page');
    featureHomePage.addEventListener('mouseenter',function(){
        this.style.maxHeight='600px';
    });


featureHomePage.addEventListener('mouseleave',function() {
        this.style.maxHeight = '300px';
    });





// footer
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// middle-nav-bar
const newFeature = document.getElementById('new-featured');
const subFeature = document.querySelector('.row10-new-featured');
function addFeaturecollapsehover(){
  subFeature.classList.add('active')
}

function removeFeaturecollapsehover(){
  subFeature.classList.remove('active')
}

newFeature.addEventListener('mouseenter',addFeaturecollapsehover);
newFeature.addEventListener('mouseleave',removeFeaturecollapsehover); 


// men
const newMen = document.getElementById('men');
const subMen = document.querySelector('.row10-men');
function addMencollapsehover(){
  subMen.classList.add('active')
}

function removeMencollapsehover(){
  subMen.classList.remove('active')
}

newMen.addEventListener('mouseenter',addMencollapsehover);
newMen.addEventListener('mouseleave',removeMencollapsehover); 



// women
const newWomen = document.getElementById('women');
const subWomen = document.querySelector('.row10-women');
function addWomencollapsehover(){
  subWomen.classList.add('active')
}

function removeWomencollapsehover(){
  subWomen.classList.remove('active')
}

newWomen.addEventListener('mouseenter',addWomencollapsehover);
newWomen.addEventListener('mouseleave',removeWomencollapsehover); 



// Kid
const newKid = document.getElementById('kid');
const subKid = document.querySelector('.row10-kid');
function addKidcollapsehover(){
  subKid.classList.add('active')
}

function removeKidcollapsehover(){
  subKid.classList.remove('active')
}

newKid.addEventListener('mouseenter',addKidcollapsehover);
newKid.addEventListener('mouseleave',removeKidcollapsehover); 



// jordan
const newJordan = document.getElementById('jordan');
const subJordan = document.querySelector('.row10-jordan');
function addJordancollapsehover(){
  subJordan.classList.add('active')
}

function removeJordancollapsehover(){
  subJordan.classList.remove('active')
}

newJordan.addEventListener('mouseenter',addJordancollapsehover);
newJordan.addEventListener('mouseleave',removeJordancollapsehover); 



// sale
const newSale = document.getElementById('sale');
const subSale = document.querySelector('.row10-sale');
function addSalecollapsehover(){
  subSale.classList.add('active')
}

function removeSalecollapsehover(){
  subSale.classList.remove('active')
}

newSale.addEventListener('mouseenter',addSalecollapsehover);
newSale.addEventListener('mouseleave',removeSalecollapsehover); 


