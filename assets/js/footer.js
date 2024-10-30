// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>Contact Form</title>
//     <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>
//     <script>
//         // Initialize EmailJS
//         (function(){
//             emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
//         })();

//         function sendEmail(event) {
//             event.preventDefault(); // Prevent the default form submission

//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('textArea').value;

//             const templateParams = {
//                 name: name,
//                 email: email,
//                 message: message
//             };

//             emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//                 .then(function(response) {
//                     console.log('Email sent successfully!', response.status, response.text);
//                     alert('Message sent successfully!');
//                 }, function(error) {
//                     console.error('Failed to send email. Error:', error);
//                     alert('Failed to send message. Please try again later.');
//                 });
//         }
//     </script>
// </head>
// <body>

// <div>
//     <form name="form1" onsubmit="sendEmail(event)">
//         <input id="name" type="text" name="name" placeholder="Your Name" required/>
//         <input id="email" type="email" name="email" placeholder="Email Address" required/>                  
//         <textarea id="textArea" name="message" placeholder="Type your Message" required></textarea>
        
//         <div id="main">
//             <button id="lnch" type="submit">Send</button>
//             <div id="lnch_btn"><i class="fas fa-space-shuttle"></i></div>
//         </div>
//     </form>
// </div>

// </body>
// </html>
