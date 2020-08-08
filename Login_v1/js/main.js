
function sendJSON(){ 
            
            let result = document.querySelector('.result'); 
            let email = document.querySelector('#email'); 
            let password = document.querySelector('#password'); 
            
            // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "https://jsonplaceholder.typicode.com/users"; 
        
            // open a connection 
            xhr.open("POST", url, true); 

            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json"); 

            // Create a state change callback 
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 

                    // Print received data from server 
                    result.innerHTML = this.responseText; 
                    console.log(this.responseText)


                } 
            }; 

            // Converting JSON data to string 
            var data = JSON.stringify( $(form).serializeArray() );
            console.log(this.data)

            // Sending data with the request 
            xhr.send(data); 
           
        } 
