let plus1 = document.getElementById('plus1');
let moins1 = document.getElementById('moins1');
let reset1 = document.getElementById('reset1');

let couleurs=['black','red'];
let i =0


//declaration variable
count = 0;
//ajout evevement pour  basket

//incremente
plus1.addEventListener('click', function(){
    count++;
    document.getElementById('quantite').textContent= count;
    document.getElementById('total').textContent= count*100;
});
//decrementer
moins1.addEventListener('click', function(){
    count--;
    if (count<=0){
    document.getElementById('quantite').textContent= count =0;
}
else{
    document.getElementById('quantite').textContent= count;

}
    document.getElementById('total').textContent= count*100;
});
//reset supprimer
reset1.addEventListener('click', function(){
    count=0;
    document.getElementById('quantite').textContent= count;
    document.getElementById('total').textContent= count*100;
});
//change couleur coeur


 coeur1.addEventListener('click' ,function(){
document.getElementById('coeur1').style.color=couleurs[i];
i=(i+1)%couleurs.length;
    
});






//pour  chaussette
let plus2 = document.getElementById('plus2');
let moins2 = document.getElementById('moins2');
let reset2 = document.getElementById('reset2');
count2= 0;

//incremente
plus2.addEventListener('click', function(){
    count2++;
    document.getElementById('quantite2').textContent= count2;
    document.getElementById('total').textContent= count2*20;
});
//decrementer
moins2.addEventListener('click', function(){
    count2--;
    if (count2<=0){
    document.getElementById('quantite2').textContent= count2 =0;
}
else{
    document.getElementById('quantite2').textContent= count2;

}
    document.getElementById('total').textContent= count2*20;
});
//reset supprimer
reset2.addEventListener('click', function(){
    count2=0;
    document.getElementById('quantite2').textContent= count2;
    document.getElementById('total').textContent= count2*20 ;
});
//change couleur coeur
 coeur2.addEventListener('click' ,function(){
document.getElementById('coeur2').style.color=couleurs[i];
i=(i+1)%couleurs.length;
    
});




//pour  sac
let plus3 = document.getElementById('plus3');
let moins3 = document.getElementById('moins3');
let reset3 = document.getElementById('reset3');
count3= 0;

//incremente
plus3.addEventListener('click', function(){
    count3++;
    document.getElementById('quantite3').textContent= count3;
    document.getElementById('total').textContent= count3*50;
});
//decrementer
moins3.addEventListener('click', function(){
    count3--;
    if (count3<=0){
    document.getElementById('quantite3').textContent= count3=0 ;
}
else{
    document.getElementById('quantite3').textContent= count3 ;

}
    document.getElementById('total').textContent= count3*50;
});
//reset supprimer
reset3.addEventListener('click', function(){
    count3=0;
    document.getElementById('quantite3').textContent= count3;
    document.getElementById('total').textContent= count2*50 ;
});
//change couleur coeur
 coeur3.addEventListener('click' ,function(){
document.getElementById('coeur3').style.color=couleurs[i];
i=(i+1)%couleurs.length;
});
 












