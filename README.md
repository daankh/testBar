# testBar
Customizable widget built using clear JavaScript.

## Technologies
 * JavaScript (ECMAScript 6)
 * HTML

# The widget.js file includes
* class Bar implementation

# External Iinterface

* Widget consists of bar and button to show this bar.
* All buttons have hover effect.
* Show bar button is centered.
* Bar includes message, get widgets button and close button.
* Bar can be initialized with top or bottom position and always is fixed to that position.
* Bar text is set at initialization.
* Bar shows and hides with nice animated effect.

 ## How to add your page

 * Download and add widget.js file to your project folder.
 * Import widget.js to index.html file
 ```
 <script src="widget.js" charset="utf-8"></script>
 ```
 if you need change value of src attribute, depending on the location of the widget.js file.
 * Create a new instance of the Bar class, like this:
 ```
    <script>
        let myBar = new Bar({
            message: 'Add beautiful widgets to your website',
            position: 'top'
        })
    </script>
 ```
 * Class Bar needs an object with two properties: message and position in its constructor. 
 * Message property is responsible for bar's text. Its value can be anything, but string is the best choice. 
 * Position property accepts two values - top or bottom. Anything else returnes an error. If you set top - bar shows at the top of the page. If you set bottom - bar shows at the bottom of the page.

 ## If you want make some changes

 * All styles are applied this in widget.js file, so you can change them there.
 * Show bar button styles are included in function named addShowBarBtn.
 * Bar styles and its children (message, get widgets button and close button) are included in addBar function.
 * You can change behaviour of get widgets button, when its clicked, writing callback function as a parameter of showMessage() function.
 ```
getWidgetsBtn.addEventListener('click', () => this.showMessage(callback))
 ```