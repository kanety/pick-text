# pick-text

Select and copy text from html element.

## Installation

Install from npm:

    $ npm install @kanety/pick-text --save

## Usage

```html
<div id="target">sample text</div>
```

```javascript
import PickText from '@kanety/pick-text';
PickText.run('#target');
```

### Options

Disable copy:

```javascript
PickText.run('#target', { copy: false });
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
