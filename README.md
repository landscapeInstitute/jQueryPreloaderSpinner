# jQueryPreloaderSpinner
Quickly create and dismiss a Preloader / Spinner using jQuery Extension

Very simple to add and dismiss

```javascript

jQuery(element).preloader({
	text: "Loading Images...",
	size: "medium"
}).show();


jQuery(element).preloader().hide();

```

Options
* Size [Tiny, Small, Medium, Large] (Controls the size of the preloader)
* Text (Text which will be displayed below the preloader)

Methods
* Show (Shows Preloader)
* Hide (Hides Preloader)

Include both the CSS and JS files in your HEAD. 
Change CSS to change colours as required. 

This is very loosely based on an answer i found on stack overflow but i rewrote the majority to work in all circumstances. 
