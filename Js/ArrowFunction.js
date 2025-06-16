
// function greetUser(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greetUser("Alice")); 

// Same function using arrow syntax
// const greetUser = (name) => {
//     return  `Hello, ${name}!`
// };

// console.log(greetUser("Bob")); 

//   const header = document.getElementById('header');
//   console.log(header);
        
//   const buttons = document.getElementsByClassName('btn');
//   console.log(buttons)

//   const paragraphs = document.getElementsByTagName('p');
//   console.log(paragraphs)
        
//   const element = document.querySelector('.container');
//   console.log(element)
        
//   const allElements = document.querySelectorAll('.item');
//   console.log(allElements)



  // Change text content
const title = document.querySelector('h1');
// title.textContent = 'New Title'; 
// title.innerHTML = '<em>New</em> Title'; 

// Change attributes
const link = document.querySelector('a');
// link.href = 'https://new-site.com'; 

// Change styles
const box = document.getElementById('box');
// box.style.backgroundColor = 'blue';
// box.style.padding = '20px';




// const button = document.getElementById("myButton");
// const output = document.getElementById("output");

// button.addEventListener("click", function() {
//   output.textContent = "Button was clicked!";
//   this.style.backgroundColor = "yellow";
// });

//   const tooltip = document.querySelector('.tooltip');
        
//         // mouseover event
//     tooltip.addEventListener('mouseover', () => {
//      console.log('Mouse is over the element');
//     });

  // const input = document.getElementById('textInput');
  // const output = document.getElementById('keyOutput');
        
  //       // keydown event
  // input.addEventListener('keydown', (event) => {
   
  //   output.textContent = `Last key pressed: ${event.key} (Code: ${event.code})`;
            
  //           // Prevent numbers from being entered
  //   if (event.key >= '0' && event.key <= '9') {
  //    event.preventDefault();
  //    output.textContent += ' - Numbers not allowed!';
  //       }
  //    });


 const form = document.getElementById('contactForm');
 const message = document.getElementById('formMessage');
        
        // submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload
            
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
            
          message.innerHTML = `
                <p>Form submitted!</p>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
            `;
            
            // In a real app, you would send data to server here
  console.log({ name, email });
            
            // Reset form
  form.reset();
        });