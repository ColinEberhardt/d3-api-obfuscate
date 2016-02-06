// takes a camel-case name and reduces it to it's 'initials', e.g.
// rangeRoundBands => rRB
function abbreviateName(name) {
  // use a lookahead to split on capital letters and mumbers
  return name.split(/(?=[A-Z0-9])/)
    .map(function(d) {
      return d.substring(0, 1)
    })
    .join('');
}

// shortens a property name to the fewest number of characters, that doesn't
// 'collide' with any of the taken names.
function findShortestName(takenNames, name) {
  // try to find the shortest substring for a given name
  function shortestUniqueSubstring(testName) {
    var length = 1;
    while (takenNames.indexOf(testName.substring(0, length)) !== -1 &&
      length < testName.length) {
      length ++;
    }
    return testName.substring(0, length);
  }

  // try the abbreviated name first
  var abbreviation = abbreviateName(name);
  abbreviation = shortestUniqueSubstring(abbreviation);
  if (takenNames.indexOf(abbreviation) === -1) {
    return abbreviation;
  }

  // if not, try the full name
  return shortestUniqueSubstring(name);
}

// adapts a function, rebinding shortened names
function adapt(source) {
  var adapted = function() {
    var adaptee = source.apply(this, arguments);
    if (!adaptee.__wrapped__) {
      shortenObject(adaptee);
      adaptee.__wrapped__ = true;
    }
    return adaptee;
  }
  // copy across the long names
  fc.util.rebindAll(adapted, source);

  // create the short names
  Object.keys(source)
    .forEach(function(key) {
      var shortName = findShortestName(Object.keys(adapted), key)
      var mapping = {};
      mapping[shortName] = key;
      fc.util.rebind(adapted, source, mapping);
    });

  return adapted;
}

function appendPath(path, key) {
    return path ? path + "." + key : undefined;
}

// Recursively adds shortened names to all the properties of an object
function shortenObject(obj, enumerator, path, shortPath) {
  enumerator = enumerator || Object.keys;
  enumerator(obj)
    .forEach(function(key) {
      var shortName = findShortestName(enumerator(obj), key);
      var propertyPath = appendPath(path, key);
      var shortPropertyPath = appendPath(shortPath, shortName);

      var target = obj[key];
      if (target && typeof target === 'object'
        // explicitely exclude the namespace object, adding additional properties to this object
        // makes things go quite screwy!
        && key !== 'ns') {
        shortenObject(target, enumerator, propertyPath, shortPropertyPath);
      }
      if (target && typeof target === 'function') {
        target = adapt(target);
      }
      if (shortName !== key) {
        obj[shortName] = target;
        if (path) {
          console.log(propertyPath + " => " + shortPropertyPath);
        }
      }
    });
  return obj;
}

// Adds shortened names to the given prototype
function shortenPrototype(prototype) {
  Object.keys(prototype)
    .forEach(function(key) {
      prototype[findShortestName(Object.keys(prototype), key)] = prototype[key];
    });
}
