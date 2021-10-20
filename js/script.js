//Variable globale
var discount = false;
var rangeNumber = 3;

function rangeMgmt(event) {
  //On récupèle l'emplacement du range 
  var rangeTarget = event.target;
  //On récupère la valeur du range
  var rangeValue = event.target.value;
  //on change le background size du range
  rangeTarget.style.backgroundSize = (25 * rangeValue) + "% 100%";
  updatePrice(event);
}

function discountMgmt(event) {
  discount = event.target.checked;
  updatePrice(event);
}

function updatePrice(event) {
  var rangeValue = document.getElementById("price__range").value;
  //Tableau des prix 
  var pageViewArray = [8, 12, 16, 24, 36]
  //Application du discount
  if (discount === true) {
    var realPrice = pageViewArray[rangeValue] * 0.75;
  } else {
    var realPrice = pageViewArray[rangeValue];
  }
  //Gestion des prix
  var pricePerMonthTarget = document.getElementById("pricePerMonth");
  pricePerMonthTarget.textContent = "$" + realPrice + ".00";


  //Tableau des Pageview
  var pageViewArray = ["10k", "50k", "100k", "500k", "1M"]
  //Gestion des prix
  var pageviewTarget = document.getElementById("numberPageview");
  pageviewTarget.textContent = pageViewArray[rangeValue];
}

//BOUCLE PRINCIPALE

//On sélectionne la range que l'on vas rendre dynamique
var rangeElt = document.getElementById('price__range');
//On ajoute un eventListener quand elle change de valeur
rangeElt.addEventListener("input", rangeMgmt);

//On sélectionne le switch
var switchElt = document.getElementById('switchDiscount');
switchElt.addEventListener("input", discountMgmt);