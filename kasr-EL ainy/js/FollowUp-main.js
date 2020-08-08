//https://jsonplaceholder.typicode.com/users

function sendJSON(){ 
            
            let result = document.querySelector('.result'); 
            let aed_modifing = document.querySelector('#aed_modifing'); 
            let compliant_on_AED = document.querySelector('#compliant_on_AED');

            let frequency_per_month = document.querySelector('#frequency_per_month'); 
            let last_visit = document.querySelector('#last_visit'); 
            
            let last_visit_seizure = document.querySelector('#last_visit_seizure'); 
            let same_seizure_type = document.querySelector('#same_seizure_type'); 
            
            let triggering_factors = document.querySelector('#triggering_factors');

            let dose_mg = document.querySelector('#dose_mg'); 
            let currentAED = document.querySelector('#currentAED'); 

            let drug_formulation = document.querySelector('#drug_formulation'); 
            let effectiveness = document.querySelector('#effectiveness'); 

            let sideeffect = document.querySelector('#sideeffect'); 
            
            
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
                    result.innerHTML = this.responseText;
                    console.log(this.responseText);


                } 
            }; 

            // Converting JSON data to string 
            var data = JSON.stringify({ "aed_modifing": aed_modifing.value, "compliant_on_AED": compliant_on_AED.value ,
                "frequency_per_month" : frequency_per_month.value , "last_visit" : last_visit.value ,
                "last_visit_seizure" :last_visit_seizure.value , "same_seizure_type":same_seizure_type.value,
                "triggering_factors":triggering_factors.value ,"dose_mg":dose_mg.value
                ,"currentAED":currentAED.value ,"drug_formulation":drug_formulation.value
                , "effectiveness":effectiveness.value ,"sideeffect":sideeffect.value



             }); 

            // Sending data with the request 
            xhr.send(data); 
            console.log("true");
        } 
