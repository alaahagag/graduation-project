

function sendJSON(){ 
            
    var result = document.getElementsByClassName("result");
    // for radiobuttons
    var sex = document.querySelector('input[name =sex]:checked');
    var occupation = document.querySelector('input[name = Occupation]:checked');
    var activedriving = document.querySelector('input[name =Driving]:checked');
    var handedness = document.querySelector('input[name =hand]:checked');
    var familyConsanguinity = document.querySelector('input[name =Family-consanguinity]:checked');
    var familycondition = document.querySelector('input[name =Similar-condition]:checked');
    var fabrile = document.querySelector('input[name =febrile-history]:checked');
     
    // for text input  

    var fname =  document.getElementById("fname");
    var mname =  document.getElementById("mname");
    var lname =  document.getElementById("lname");
    var age =  document.getElementById("age");
    var idnum =  document.getElementById("idnum");
    var pnumber =  document.getElementById("pnumber");

    // for textarea 
    var SpecifyWorking =  document.getElementById("Specify-working");
    var medications =  document.getElementById("medications");
    var neurologicalcondition =  document.getElementById("neurologicalcondition");
    var describefebrile =  document.getElementById("describefebrile");
    var ageofonset =  document.getElementById("ageofonset");

    // for dropdown list
     var education =document.querySelector('#education'); 
     var maritalstatus =document.querySelector('#maritalstatus'); 
     var habitnames =document.querySelector('#habitnames'); 

     // for multi-dropdown list 

      var comor =  document.getElementById("cname");
	  var cname = "";
	  for (var option of comor.options) {
	    if (option.cname) {
	      cname.push(option.value);
	    }
	  }
	  alert(cname);
	 
	



    


            
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
            var data = JSON.stringify({ "fname": fname.value, "mname": mname.value ,
                "lname" : lname.value  ,
                "idnum" :idnum.value , "age":age.value,"pnumber" : pnumber.value ,
                "Specify-working":SpecifyWorking.value,"medications":medications.value,
                "neurologicalcondition":neurologicalcondition.value,
                "describefebrile":describefebrile.value , "ageofonset":ageofonset.value,
                "sex":sex.value , "occupation":occupation.value, 
                "activedriving":activedriving.value, "handedness":handedness.value,
                "familyConsanguinity":familyConsanguinity.value , "familycondition":familycondition.value
                ,"fabrile":fabrile.value , "education":education.value , "maritalstatus":maritalstatus.value
                ,"habitnames":habitnames.value , "Comorbidities":cname

             });



            // Sending data with the request 
            xhr.send(data);
            console.log("true");
            console.log(data);
        } 
     


