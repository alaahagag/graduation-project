function SendJSON()
{ 
            
            // ........for patient information........


    // for radio buttons (info.html)
    var sex = localStorage.getItem('sex_value');
    var occupation = localStorage.getItem('occupation_value');
    var activedriving = localStorage.getItem('driving_value');
    var handedness = localStorage.getItem('hand_value');
    var familyConsanguinity = localStorage.getItem('familyCons_value');
    var familycondition = localStorage.getItem('familyCond_value');
    var fabrile = localStorage.getItem('fabrile_value');

    // for text inputs (info.html)
    var fname = localStorage.getItem('first_name');
    var mname = localStorage.getItem('middle_name');
    var lname = localStorage.getItem('last_value');
    var age = localStorage.getItem('age_value');
    var idnum = localStorage.getItem('id_value');
    var pnumber = localStorage.getItem('pnumber_value');
  
    // for textarea (info.html)
    var SpecifyWorking = localStorage.getItem('SpecifyWorking_Value');
    var medications = localStorage.getItem('medication_value');
    var neurologicalcondition = localStorage.getItem('neuro_value');
    var describefebrile = localStorage.getItem('describefebrile_value');
    var ageofonset = localStorage.getItem('ageofonset_value');
   
    // for dropdown list (info.html)
    var education = localStorage.getItem('education_value');
    var maritalstatus = localStorage.getItem('maritalstatus_value');
    var habitnames = localStorage.getItem('habitnames_value');
   

       // ..... for seziure information ......

    // for radio buttons 
    var symptom_appearance = localStorage.getItem('symptom_appearance_value');
    var number = localStorage.getItem('number_value');
    var history = localStorage.getItem('history_value');
    var admition_to_hospital = localStorage.getItem('admition_to_hospital_value');
    var type_of_seizure = localStorage.getItem('type_of_seizure_value');
    var seizurecontrol = localStorage.getItem('seizurecontrol_value');
    
    // for text inputs 
    var age_of_onset = localStorage.getItem('age_of_onset_value');
    var duration = localStorage.getItem('duration_value');
    var frequency_before_AED = localStorage.getItem('frequency_before_AED_value');
    var frequency_after_AED = localStorage.getItem('frequency_after_AED_value');
    var longest_period = localStorage.getItem('longest_period_value');
    var precipitated = localStorage.getItem('precipitated_value');
    var aed_on_discharge = localStorage.getItem('aed_on_discharge_value');
    var durationofstay = localStorage.getItem('durationofstay_value');
    var intubation = localStorage.getItem('intubation_value');
    var brainlesionAge = localStorage.getItem('brainlesionAge_value');
    
  

    // for textarea 
    var semiology = localStorage.getItem('semiology_Value');
   
    // for dropdown list 
    var mode = localStorage.getItem('mode_value');
    var classification = localStorage.getItem('classification_value');
    var generalizednonMotors = localStorage.getItem('generalizednonMotors_value');
    var postictal = localStorage.getItem('postictal_value');
    var etiology = localStorage.getItem('etiology_value');
    var structural = localStorage.getItem('structural_value');
    var focalMotors = localStorage.getItem('focalMotors_value');


    // ........ for labs .......

    var date =  document.getElementById("date").value;


   



   




   

   
      // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "submit.txt";
        
            // open a connection 
            xhr.open("POST", url, true); 

            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json"); 

            // Create a state change callback 
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 

                    // Print received data from server 
                    //result.innerHTML = this.responseText;
                    console.log(this.responseText);


                } 
            }; 



            // Converting JSON data to string 
            var data = JSON.stringify({  "fname": fname, "mname": mname ,
                "lname" : lname  ,
                "idnum" :idnum , "age":age,"pnumber" : pnumber ,
                 "medications":medications,
                "neurologicalcondition":neurologicalcondition,
                "describefebrile":describefebrile, "ageofonset":ageofonset,
                "sex":sex , "occupation":occupation, 
                "activedriving":activedriving, "handedness":handedness,
                "familyConsanguinity":familyConsanguinity , "familycondition":familycondition
                ,"fabrile":fabrile , "education":education , "maritalstatus":maritalstatus
                ,"habitnames":habitnames ,
                  
                "seizure":[{"age_of_onset":age_of_onset,
                "mode":mode ,
                "classification": [{"cname":classification}],
                "focalMotors": [{"fmname":focalMotors}],
                "generalizednonMotors": [{"gnname":generalizednonMotors}],
                "semiology":semiology,
               
                "symptom_appearance":symptom_appearance,
                "number":number,
                "duration":duration,
                "postictal":postictal,
                
                "frequency_before_AED":frequency_before_AED,
                "frequency_after_AED":frequency_after_AED,
                "longest_period": longest_period }] ,

                "history":{"seizures_greater_5min":history,
                "admition_to_hospital":admition_to_hospital,
                "type_of_seizure":admition_to_hospital,
                "seizurecontrol":seizurecontrol,
                "precipitated":precipitated,
                "aed_on_discharge":aed_on_discharge,
                "durationofstay":durationofstay,
                "intubation":intubation,

                "etiology":etiology,
                "structural":structural,
                "brainlesionAge":brainlesionAge
                },



                    "tests":[{
                    "date":date}]

                
                



             });



            // Sending data with the request 
            xhr.send(data);
            console.log("true");
            console.log(data);
    
        } 
     


            
        