
#The template engine.

##How it works:

Get all the needed "modules" out of this project to create your project with ease.
the modules are (normally) build, so they can be implemented individually without breaking previous code or only slight adjustment.
Of course some debugging could be needed.
Every module has its own name and corresponding files/parts.

##Requirements in your project:
- [x] javascript. 
- [x] jquery.
- [x] bootstrap 5+.
- [x] npm install.
- [x] sass color.
- [ ] (optional) A src folder for the site content.
- [ ] (optional) A scss folder to compile to css.

##How to import:
(every module has its own name and parts)
<ol>
 <li>Put the desired scss mixin/module in your scss folder.</li>
 <li>Add the variables of the mixin/module to variables.scss.</li>
 <li>Import the mixins/modules in the style.scss after the main scss.</li>
 <li>Add the module part in app.js to your main .js file.</li>
 <li>Add the initialization of the module (bottom app.js).</li>
 <li>Add an empty tag with an <b>id</b> corresponding to the name of the module.<br>
 (the page that you want to use will be loaded into that tag. see jquery .load())
 </li>
 <li>(optional) the gulpfile.js compiles all scss into a style.css the css folder under the src folder.</li>
</ol>

##Testing project with gulpfile.js:
(testing follows the folder structure like this project)
<ul>
<li>Copy the "gulpfile.js" to the root of your file.</li>
<li>terminal: npm install</li>
<li>Have a src folder (the css file will be compiled into this).</li>
<li>Have a scss folder with the .scss files in.</li>
<li>Double tap shift and type: "show npm scripts"  </li>
<li>In the npm tab (left in screen) double click "watch" to compile the code and run a localhost session.</li>
</ul>
