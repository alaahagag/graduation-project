
function PassSeizureValue(){ 

    

     // for radiobuttons
    var symptom_appearanceValue = document.querySelector('input[name =OrderSymptom]:checked').value;
    localStorage.setItem('symptom_appearance_value', symptom_appearanceValue  );

    var numberValue = document.querySelector('input[name = NumberOfSeizure]:checked').value;
    localStorage.setItem('number_value', numberValue  );

    var historyValue = document.querySelector('input[name =HistoryOfProlongedSeizures]:checked').value;
    localStorage.setItem('history_value', historyValue  );

    var admition_to_hospitalValue = document.querySelector('input[name =HospitalAdmitted]:checked').value;
    localStorage.setItem('admition_to_hospital_value', admition_to_hospitalValue  );

    var type_of_seizureValue = document.querySelector('input[name =SeizureType]:checked').value;
    localStorage.setItem('type_of_seizure_value', type_of_seizureValue   );

    var seizurecontrolValue = document.querySelector('input[name = ControlleSeizure]:checked').value;
    localStorage.setItem('seizurecontrol_value', seizurecontrolValue );

     
    // for text input  

    var age_of_onsetValue =  document.getElementById("age_of_onset").value;
    localStorage.setItem('age_of_onset_value', age_of_onsetValue  );

    var durationValue =  document.getElementById("duration").value;
    localStorage.setItem('duration_value', durationValue );

    var frequency_before_AEDValue =  document.getElementById("frequency_before_AED").value;
    localStorage.setItem('frequency_before_AED_value', frequency_before_AEDValue );

    var frequency_after_AEDValue =  document.getElementById("frequency_after_AED").value;
    localStorage.setItem('frequency_after_AED_value', frequency_after_AEDValue  );

    var longest_periodValue =  document.getElementById("longest_period").value;
    localStorage.setItem('longest_period_value', longest_periodValue );

    var precipitatedValue =  document.getElementById("precipitated").value;
    localStorage.setItem('precipitated_value', precipitatedValue );

    var aed_on_dischargeValue =  document.getElementById("aed_on_discharge").value;
    localStorage.setItem('aed_on_discharge_value', aed_on_dischargeValue );

    var durationofstayValue =  document.getElementById("durationofstay").value;
    localStorage.setItem('durationofstay_value', durationofstayValue );

    var intubationValue =  document.getElementById("intubation").value;
    localStorage.setItem('intubation_value', intubationValue );

    var brainlesionAgeValue =  document.getElementById("brainlesionAge").value;
    localStorage.setItem('brainlesionAge_value', brainlesionAgeValue );




    // for textarea 
    var semiologyValue =  document.getElementById("semiology").value;
    localStorage.setItem('semiology_Value', semiologyValue );



   

    // for dropdown list
     var modeValue =document.querySelector('#mode').value; 
     localStorage.setItem('mode_value', modeValue );

     var classificationValue =document.querySelector('#classification').value;
     localStorage.setItem('classification_value', classificationValue );
 
     var focalMotorsValue =document.querySelector('#focalMotors').value; 
     localStorage.setItem('focalMotors_value', focalMotorsValue );

      var generalizednonMotorsValue =document.querySelector('#generalizednonMotors').value; 
     localStorage.setItem('generalizednonMotors_value', generalizednonMotorsValue );

     var postictalValue =document.querySelector('#postictal').value; 
     localStorage.setItem('postictal_value', postictalValue);

     var etiologyValue =document.querySelector('#etiology').value; 
     localStorage.setItem('etiology_value', etiologyValue);

     var structuralValue =document.querySelector('#structural').value; 
     localStorage.setItem('structural_value', structuralValue);

    
        } 

 

















