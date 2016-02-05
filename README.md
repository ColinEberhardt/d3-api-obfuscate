# d3-api-obfuscate

Crawls the D3 API adding obfuscated methods. Here's an example which creates an ordinal axis and sets its range:

```
var x = d.sc.o()
    .rRB([0, width], .1);
```

## Usage

Include `obfustcate.js` then obfuscate as follows:

```
var d = shortenObject(d3);
shortenObject(d.selection.prototype);
shortenObject(d.selection.enter.prototype);
shortenObject(d.transition.prototype);
```

This adds shortened functions to d3

## Testing

Currently there is just a simple example in the `test` folder, just run using a local server from the project root.
