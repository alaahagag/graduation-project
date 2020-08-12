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

     // for checkbox
    var checkboxes = document.getElementsByName('LabType');
    var labType = "";
    for (var i=0, n=checkboxes.length;i<n;i++)
    {
        if (checkboxes[i].checked)
        {
            labType += ","+checkboxes[i].value;
        }
    }
    if (labType) labType = labType.substring(1);

    //......... for EEG ..............
    //for text inputs

    var report =  document.getElementById("report").value;
    var date =  document.getElementById("date").value;
    var frequency_of_PDR =  document.getElementById("frequency_of_PDR").value;
    var number_of_seizures =  document.getElementById("number_of_seizures").value;
    var ictal_abnormalities =  document.getElementById("ictal_abnormalities").value;
   
   // for text area 
    var specify =  document.getElementById("specify").value;
    var comments =  document.getElementById("comments").value;
  
  // for dropdown lists
    var scalpEEG =  document.getElementById("scalpEEG").value;
    var reason =  document.getElementById("reason").value;
    var source_of_EEG =  document.getElementById("source_of_EEG").value;
    var behavioral_recorded =  document.getElementById("behavioral_recorded").value;
    var reasonProvocative_measures =  document.getElementById("reasonProvocative_measures").value;
    var dischargelocation =  document.getElementById("dischargelocation").value;
    var localizedlobe =  document.getElementById("localizedlobe").value;
    var interictal_Circumstances =  document.getElementById("interictal_Circumstances").value;
    var interictal_frequency =  document.getElementById("interictal_frequency").value;
    var interictal_special_pattern =  document.getElementById("interictal_special_pattern").value;
    var ictal_location =  document.getElementById("ictal_location").value;
    var ictal_pattern =  document.getElementById("ictal_pattern").value;
    var ictal_with =  document.getElementById("ictal_with").value;
    var Location =  document.getElementById("Location").value;
    var lobe =  document.getElementById("lobe").value;
   
   // for radio buttons
    var type = document.querySelector('input[name =EEGType]:checked').value;
    var result = document.querySelector('input[name =EEGResults]:checked').value;
    var posteriorrhythm = document.querySelector('input[name =Posterior]:checked').value;
    var localizedside = document.querySelector('input[name =LocalizedSide]:checked').value;
    var ictal_abnormalities = document.querySelector('input[name =IctalAbnormalities]:checked').value;
    var same_icatal_features = document.querySelector('input[name =AreIctalFeatures]:checked').value;
    var side = document.querySelector('input[name =LocalizedSide]:checked').value;
    var focal_slowing = document.querySelector('input[name =FocalSlowing]:checked').value;
    var generalisedslowing = document.querySelector('input[name =GeneralisedSlowing]:checked').value;
    var attenuation = document.querySelector('input[name =Attenuation]:checked').value;

   //---------------------- for imaging ----------------

   // for text inputs
    var report =  document.getElementById("report").value;
    var date =  document.getElementById("date").value;
    
    // for text area

    var details =  document.getElementById("details").value;

    // for dropdown list 
    var sequences =  document.getElementById("sequences").value;
    var results =  document.getElementById("results").value;
    var distribution =  document.getElementById("distribution").value;
    var location_cortical =  document.getElementById("location_cortical").value;
    var location_subcortical =  document.getElementById("location_subcortical").value;
    var features =  document.getElementById("features").value;
     
    // for radio buttons 
    var contrast_enhancement = document.querySelector('input[name =Contrast]:checked').value;
    var lateralization = document.querySelector('input[name =Lateralization]:checked').value;
   
   //----------- test score --------//
    var date =  document.getElementById("date").value;
    var test =  document.getElementById("test").value;
    var score =  document.getElementById("score").value;

    //----------- Surgical procedure---------------//

    var date =  document.getElementById("date").value;
    var type =  document.getElementById("type").value;
    var side =  document.getElementById("side").value;
    var intraoperative_EcoG =  document.getElementById("intraoperative_EcoG").value;
    var pathology =  document.getElementById("pathology").value;

    //----------- for impression --------------//
    var diagnosis =  document.getElementById("diagnosis").value;
    var classification =  document.getElementById("classification").value;
    var ageofonset =  document.getElementById("ageofonset").value;
    var etiology =  document.getElementById("etiology").value;
    var syndrome =  document.getElementById("syndrome").value;
    var finaldiagnosis =  document.getElementById("finaldiagnosis").value;
    var comments =  document.getElementById("date").value;
    var counselling =  document.getElementById("date").value;

    //------------- for AED ------------------------//
    var dose_mg =  document.getElementById("dose_mg").value;
    var sideeffect =  document.getElementById("sideeffect").value;

    var effectiveness = document.querySelector('input[name =Effectiveness]:checked').value;


    // for checkbox
    var checkboxeAED = document.getElementsByName('AED');
    var AED = "";
    for (var i=0, n=checkboxeAED.length;i<n;i++)
    {
        if (checkboxeAED[i].checked)
        {
            AED += ","+checkboxeAED[i].value;
        }
    }
    if (AED) AED = AED.substring(1);


    // for checkbox
    var checkboxesDrug = document.getElementsByName('Drug');
    var Drug = "";
    for (var i=0, n=checkboxesDrug.length;i<n;i++)
    {
        if (checkboxesDrug[i].checked)
        {
            Drug += ","+checkboxesDrug[i].value;
        }
    }
    if (Drug) Drug = Drug.substring(1);







   



   




   

   
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
                "tests":[{"testType":labType,
                "date":date}] ,
                "EEG":[{"report":report,
                        "date":date,
                        "scalpEEG":scalpEEG,
                        "type":type,
                        "result":result,
                        "specify":specify,
                        "reason":reason,
                        "source_of_EEG":source_of_EEG,
                        "behavioral_recorded":behavioral_recorded,
                        "reasonProvocative_measures":reasonProvocative_measures,
                        "posteriorrhythm":posteriorrhythm,
                        "frequency_of_PDR":frequency_of_PDR,
                        "number_of_seizures":number_of_seizures,
                        "ictal_abnormalities":ictal_abnormalities,
                        "dischargelocation":dischargelocation,
                        "localizedlobe":localizedlobe,
                        "localizedside":localizedside,
                        "interictal_Circumstances":interictal_Circumstances,
                        "interictal_frequency":interictal_frequency,
                        "interictal_special_pattern":interictal_special_pattern,
                        "comments":comments,
                        "same_icatal_features":same_icatal_features,
                        "side":side,
                        "ictal_location":ictal_location,
                        "ictal_pattern":ictal_pattern,
                        "ictal_with":ictal_with,
                        "focal_slowing":focal_slowing,
                        "generalisedslowing":generalisedslowing,
                        "eeg_slowing":eeg_slowing,
                        "location":location,
                        "lobe":lobe,
                        "attenuation":attenuation}],

                    "imaging":[{"report":report,

                    "date":date,
                    "sequences":sequences,
                    "contrast_enhancement":contrast_enhancement,
                    "results":results,
                    "details":details,
                    "lateralization":lateralization,
                    "distribution":distribution,
                    "location_cortical":location_cortical,
                    "location_subcortical":location_subcortical,
                    "features":[{"fname":features}],

                    "diagnosis":diagnosis,
                    "classification":classification,
                    "ageofonset":ageofonset,
                    "etiology":etiology,
                    "syndrome":syndrome,
                    "finaldiagnosis":finaldiagnosis,
                    "comments":comments,
                    "counselling":counselling }],


                    "neuroScore":[{"date":date,
                    "test":test,
                    "score":score}],

                    "procedures":[{"date":date,
                    "type":type,
                    "side":side,
                    "intraoperative_EcoG":intraoperative_EcoG,
                    "pathology":pathology}],

                    "aed":[{"currentAED":AED,
                    "drug_formulation":Drug,
                    "dose_mg":dose_mg,

                    "effectiveness":effectiveness,
                    "sideeffect":sideeffect}]

                   });



            // Sending data with the request 
            xhr.send(data);
            console.log("true");
            console.log(data);
    
        } 
     


            
        