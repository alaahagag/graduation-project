
// to open text area in case of radio//
 function show() { document.getElementById('Specify-working').style.display = 'block'; }
 function hide() { document.getElementById('Specify-working').style.display = 'none'; }






// to open textarea in case of selection box //
 function showhide(){ (document.getElementById('pasthistory').value);
if(document.getElementById('pasthistory').value == 'Other'){
document.getElementById('Specify-Other').style.display = 'block';
}
else{
document.getElementById('Specify-Other').style.display = 'none';
}
}


function go(){
 if(document.getElementByClassName('Female').checked){location.href='Females.html';}
 else if(document.getElementByClassName('Male').checked){location.href='Seizure-info.html';}

 }


 