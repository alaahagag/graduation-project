//https://jsonplaceholder.typicode.com/users

function sendJSON(){ 
            
            
            let email = document.querySelector('#email'); 
            let password = document.querySelector('#password'); 
            
            // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "http://localhost:8282/login"; 
        
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
                if(xhr.responseText=="login Asuccessfully"){
                     console.log("kolo 100 100");

                location.href="index.html";

                                              }
                 if(xhr.responseText=="Not Allowed"){
                   console.log("not allowed");

                                              }

                

            }; 

            // Converting JSON data to string 
            var data = JSON.stringify({ "email": email.value, "password": password.value }); 

            // Sending data with the request 
            xhr.send(data); 
            console.log("true");
        } 
