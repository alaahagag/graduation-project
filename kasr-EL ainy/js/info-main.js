
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

 function PassValue(){ 

    
    
     // for radiobuttons
    var sexValue = document.querySelector('input[name =sex]:checked').value;
    localStorage.setItem('sex_value', sexValue  );

    var occupationValue = document.querySelector('input[name = Occupation]:checked').value;
    localStorage.setItem('occupation_value', occupationValue  );

    var activedrivingValue = document.querySelector('input[name =Driving]:checked').value;
    localStorage.setItem('driving_value', activedrivingValue  );

    var handednessValue = document.querySelector('input[name =hand]:checked').value;
    localStorage.setItem('hand_value', handednessValue  );

    var familyConsanguinityValue = document.querySelector('input[name =Family-consanguinity]:checked').value;
    localStorage.setItem('familyCons_value', familyConsanguinityValue  );

    var familyconditionValue = document.querySelector('input[name =Similar-condition]:checked').value;
    localStorage.setItem('familyCond_value', familyconditionValue );

    var fabrileValue = document.querySelector('input[name =febrile-history]:checked').value;
    localStorage.setItem('febrile_value', fabrileValue  );
     
    // for text input  

    var fnameValue =  document.getElementById("fname").value;
    localStorage.setItem('first_name', fnameValue );

    var mnameValue =  document.getElementById("mname").value;
    localStorage.setItem('middle_name', mnameValue );

    var lnameValue =  document.getElementById("lname").value;
    localStorage.setItem('last_value', lnameValue  );

    var ageValue =  document.getElementById("age").value;
    localStorage.setItem('age_value', ageValue  );

    var idnumValue =  document.getElementById("idnum").value;
    localStorage.setItem('id_value', idnumValue );

    var pnumberValue =  document.getElementById("pnumber").value;
    localStorage.setItem('pnumber_value', idnumValue );

    

    

    // for textarea 
    var SpecifyWorkingValue =  document.getElementById("Specify-working").value;
    localStorage.setItem('SpecifyWorking_Value', SpecifyWorkingValue );

    var medicationsValue =  document.getElementById("medications").value;
    localStorage.setItem('medication_value', medicationsValue );

    var neurologicalconditionValue =  document.getElementById("neurologicalcondition").value;
    localStorage.setItem('neuro_value', neurologicalconditionValue );

    var describefebrileValue =  document.getElementById("describefebrile").value;
    localStorage.setItem('describefebrile_value', describefebrileValue );

    var ageofonsetValue =  document.getElementById("ageofonset").value;
    localStorage.setItem('ageofonset_value', ageofonsetValue );


    // for dropdown list
     var educationValue =document.querySelector('#education').value; 
     localStorage.setItem('education_value', educationValue );

     var maritalstatusValue =document.querySelector('#maritalstatus').value;
     localStorage.setItem('maritalstatus_value', maritalstatusValue );
 
     var habitnamesValue =document.querySelector('#habitnames').value; 
     localStorage.setItem('habitnames_value', habitnamesValue );

    

   
    
        } 

 