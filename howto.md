#Basics of (Front End) Web Development 
###By Ann Gould
##The basics (HTML)

![alt text](https://i.imgflip.com/u9pv5.jpg "html is cool. I pinky promise.")

HTML (hypertext markup language) is a markup language for creating web pages and applications. HTML itself isn't quite considered a programming language, but knowing how to use it correctly can help when you want to make something web based is really helpful. For example, if I made a program that I want to make more interactive with a user, I could create an interface in HTML for a user to use to successfully use my program from a web browser.

##Getting Started

In order to edit HTML, CSS and JS, its highly recommended you use a source code editor (Notepad & TextEdit are a thing but are bare bone). Using a source code editor makes your code look more appealing and helps make it easier to debug.

Here are some links to some popular source code editors:

[Sublime Text](https://www.sublimetext.com)

[Atom](https://atom.io)

[Visual Studio Code](https://code.visualstudio.com)

##Making it Appealing
CSS (Cascading Style Sheets) is used a lot with HTML pages to make them look more appealing to the eye. CSS helps format the way HTML looks on web pages, and help to make web pages more distinguishable to the eye. 

W3 Schools is really helpful when learning about CSS. Here is a reference sheet from W3 Schools about CSS so you can pick up the basics

[W3 Schools CSS Reference](https://www.w3schools.com/css/default.asp)

##Where's the Logic?
This is where Javascript comes in! Javascipt is an interpreted programming language used for web development. Javascript helps make web pages dynamic and provides as the logic for web pages. In this workshop we will be using JS to create HTML canvas elements.

##Connecting the Pieces

Now that we've talked about the big three, we can integrate them in an HTML page with HTML tags:
 
Typically at the bottom of an HTML page so all elements of the HTML page can load first:

```html
<script src="myScript.js"></script>
```

Typically at the start of an HTML page, in a <head> tag

```html
<link rel="stylesheet" href=style.css">
```

You can also code javascript and css within the style and script tags, but typically its cleaner to create a new file for it.

##Experimenting


If you're wondering how HTML, JS and CSS are applied in terms of current web development, you can view the HTML of webpages (and then from there view other files like javascipt files and CSS files)

1) go to a site you're interested in looking into

2) right click on any part of the website (or a specific element you're interested in)

3) choose "Inspect Element" or "View Page Source" to see the HTML of a web page 

*Theres always more than just HTML, you can view what frameworks websites use along with other tools they use to develop their websites (i.e analytic tools)*

##Now what?

HTML is something from my beliefs, you can easily teach yourself. W3 is a great tool if you need help working with anything HTML, CSS or JS related (along with StackOverflow).

When I first learned the basics of web development I checked out pens on [codepen.io](https://codepen.io/pens/) to look into what people could make with raw html, css and js!
