jquery-data-attribute
=====================

## Purpose

To get or set `data-atrributes` on elements.

## Example of Data Attribute

```html
<ul id="bar">
    <li class="beer" data-name="Boddingtons">Boddingtons</li>
</li>
```

## Getting a Data Attribute

```javascript
$('#bar .beer:first').dataAttr('name'); //returns "Boddingtons"
```

## Setting a Data Attribute

```javascript
$('#bar .beer:first').dataAttr('type', 'ale'); //returns jquery object for chaining
```

## Setting Multiple Values

```javascript
$('#bar .beer:first').dataAttr({
    type: 'ale',
    origin: 'england',
    rating: 'delicious'
}); //also returns jquery object for chainability
```
