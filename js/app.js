// import * as utils from './utils.js';

// console.log(utils.greet('World'));
// console.log('Today is:', utils.getCurrentDate());



// Get all code preview sections
const previews = document.querySelectorAll('.code-preview');

previews.forEach(preview => {
    // Get the current HTML content
    const markup = preview.innerHTML.trim();
    
    // Create the pre and code elements
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.className = 'language-html';
    
    // Set the code content
    code.textContent = markup;
    
    // Assemble the elements
    pre.appendChild(code);
    preview.insertAdjacentElement('afterend', pre);
    
    // Apply syntax highlighting
    hljs.highlightElement(code);
    
    // Wrap highlighted code in spans for hover effect
    const highlightedCode = code.innerHTML;
    const wrappedCode = highlightedCode
        .split('\n')
        .map((line, index) => `<span class="code-line" data-line="${index + 1}">${line}</span>`)
        .join('\n');
    
    code.innerHTML = wrappedCode;

    // Add hover effects
    const buttons = preview.querySelectorAll('button');
    const codeLines = code.querySelectorAll('.code-line');

    buttons.forEach((button, index) => {
        button.addEventListener('mouseenter', () => {
            codeLines[index].classList.add('highlighted-line');
        });
        
        button.addEventListener('mouseleave', () => {
            codeLines[index].classList.remove('highlighted-line');
        });

        // Optional: Add hover effect from code to button
        codeLines[index].addEventListener('mouseenter', () => {
            button.classList.add('highlighted-button');
        });
        
        codeLines[index].addEventListener('mouseleave', () => {
            button.classList.remove('highlighted-button');
        });
    });
});
