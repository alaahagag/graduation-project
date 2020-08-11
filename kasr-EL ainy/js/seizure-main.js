
function SendJSON(){ 
            
    // for radio buttons
    var sex = localStorage.getItem('sex_value');
    var occupation = localStorage.getItem('occupation_value');
    var activedriving = localStorage.getItem('driving_value');
    var handedness = localStorage.getItem('hand_value');
    var familyConsanguinity = localStorage.getItem('familyCons_value');
    var familycondition = localStorage.getItem('familyCond_value');
    var fabrile = localStorage.getItem('fabrile_value');

    // for text inputs
    var fname = localStorage.getItem('first_name');
    var mname = localStorage.getItem('middle_name');
    var lname = localStorage.getItem('last_value');
    var age = localStorage.getItem('age_value');
    var idnum = localStorage.getItem('id_value');
    var pnumber = localStorage.getItem('pnumber_value');
    var age_of_onset =  document.getElementById("age_of_onset").value;


    // for textarea 
    var SpecifyWorking = localStorage.getItem('SpecifyWorking_Value');
    var medications = localStorage.getItem('medication_value');
    var neurologicalcondition = localStorage.getItem('neuro_value');
    var describefebrile = localStorage.getItem('describefebrile_value');
    var ageofonset = localStorage.getItem('ageofonset_value');
   
    // for dropdown list 
    var education = localStorage.getItem('education_value');
    var maritalstatus = localStorage.getItem('maritalstatus_value');
    var habitnames = localStorage.getItem('habitnames_value');
    var mode =document.querySelector('#mode').value; 
    var classification =document.querySelector('#classification').value; 

   




   

   
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
                "Specify-working":SpecifyWorking.value,"medications":medications,
                "neurologicalcondition":neurologicalcondition,
                "describefebrile":describefebrile, "ageofonset":ageofonset,
                "sex":sex , "occupation":occupation, 
                "activedriving":activedriving, "handedness":handedness,
                "familyConsanguinity":familyConsanguinity , "familycondition":familycondition
                ,"fabrile":fabrile , "education":education , "maritalstatus":maritalstatus
                ,"habitnames":habitnames ,
                "Seizure":[{"age_of_onset" : age_of_onset , "mode":mode , "classification":classification}]

             });



            // Sending data with the request 
            xhr.send(data);
            console.log("true");
            console.log(data);
    
        } 
     


            
        