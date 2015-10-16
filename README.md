## Discourse Styles

Styles for Discourse are written with the LESS preprocessor.

### Structure

* Compiled CSS is in `build/`
* LESS is in `src/`
* `.less` files in `src/includes/` must be imported in `src/main.less`

### Workflow

* Running `gulp` will cause gulp to watch for changes in less files and compile LESS automatically.
* gulp will add the compiled CSS to your clipboard every time it detects changes in `.less` files in `src/`
* Paste the compiled CSS into the "Staging" customization on Discourse
	* **Admin > Customize > CSS/HTML**
* Preview the new CSS by clicking "preview"
	* Preview app should load new styles without needing a page refresh each time you paste your CSS

### Deployment

* Simply paste the CSS into the "Production" customization instead.