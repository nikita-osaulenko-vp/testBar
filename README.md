# Coding Challenge: Widget bar 

## How to run

Just open index.html in browser

## How to use

include js file:

`<script src="bar.js"></script>`

Usage: 

```js 
let bar = new Bar({
     position: 'bottom',
     message: 'Add beautiful widgets to your website',
     action: () => {
         alert('Action! Ok?');
     }
 });
```
Params: 

```js 
 position: 'bottom' | 'top' - position of the bar
 message: string - text inside bar,
 action: function - "Get widget" button callback
```


## Project structure

- `index.html` - html file
- `bar.js` - Widget functionality

## Technologies used

- Vanilla JS