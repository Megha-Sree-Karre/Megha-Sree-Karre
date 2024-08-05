<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h2>Registration Form</h2>
    <form id="registrationForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>
        
        <label for="dob">Date of Birth:</label><br>
        <input type="date" id="dob" name="dob"><br><br>
       
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
        
        <label for="city">City:</label><br>
        <input type="text" id="city" name="city"><br><br>
        
        <button type="button" onclick="register()">Register</button>
    </form>
    
    <h3>megha1:</h3>
    <pre id="result"></pre>
    
    <script>
        function register() {
            const name = document.getElementById('name').value;
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('email').value;
            const city = document.getElementById('city').value;
            
            const registrationData = {
                name: name,
                dob: dob,
                email: email,
                city: city
            };
            
      document.getElementById('result').textContent = JSON.stringify(registrationData, null,2);
        }
    </script>
</body>
</html>
