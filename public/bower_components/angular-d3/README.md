angular-d3
==================

Blogpost about this project: http://spiiice.net/using-angularjs-and-d3-to-create-a-wordcloud-directive

Create [directives](http://docs.angularjs.org/guide/directive) to enable even more easy usage of [d3](http://d3js.org/) by [Mike Bostock](https://github.com/mbostock/d3)!

##D3 AngularJS Module

D3 component to provide d3 as module for the [injector](http://docs.angularjs.org/api/AUTO.$injector).
Registerd as <b>d3</b>.

Include component as every other component via script tag into your webapp.

```html
<script src="components/angular/angular.js"></script>
<script src="components/d3/angular-d3.js"></script>
```

Add d3 module to the [requires Array](http://docs.angularjs.org/api/angular.module).

```javascript
angular.module('exampleApp', ['d3']);
```

Now you can inject the d3 module e.g. in a directive definition 
and enjoy the full power of d3 in a isolated scope without usage of the d3 in a global var.


```javascript
angular.module('d3')
  .directive('example', function (d3){
  // use d3 
  }
);
```


##Directives

With d3 directives you are able to create wonderful html extensions
that enable people with basic javascript experience to create d3 visualisations.

I will publish here directives that come with my projects iam working on.
Feel free to contribute extensions, fixes or own directives.


## Development

To install local dependencies you need to run the install task of npm / bower. 

```shell
npm install && bower install
```

To build the module you need to run the grunt with default task

```shell
grunt
```

## Todo

* improve build process
  * include the current d3 release, currently just pasted
  * solve warning in the build
* finish tests for the wordcloud directive, just notes now
* Implement more directives
    * Dynamic Ajax Wordcloud (Use Blacklist for words from here https://github.com/mlarocca/Chrome-Extensions/blob/master/TagCloudChromeEx/src/js/app/common_vars.js ) 
* Set up a font for every word node



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/robinboehm/angular-d3-directives/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

