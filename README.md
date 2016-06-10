# HaikunatorJS-Indonesia

Generate Heroku-like random names to use in your node applications, in Bahasa Indonesia.

## Installation

```
npm install haikunator-indonesia
```

## Usage

Haikunator is pretty simple.

```javascript
var haikunate = require("haikunator");

// default usage
haikunate() // => "daun-bundar-1161"

// custom length (default=4)
haikunate({tokenLength: 6}) // => "siput-tulus-352420"

// use hex instead of numbers
haikunate({tokenHex: true}) // => "pohon-nasionalis-df2d"

// use custom chars instead of numbers/hex
haikunate({tokenChars: "HAIKUNATE"}) // => "gelombang-kosong-EUIA"

// don't include a token
haikunate({tokenLength: 0}) // => "panda-universal"

// use a different delimiter
haikunate({delimiter: "."}) // => "bebek.modern.1462"

// no token, space delimiter
haikunate({tokenLength: 0, delimiter: " "}) // => "kue kelabu"

// no token, empty delimiter
haikunate({tokenLength: 0, delimiter: ""}) // => "sopsejati"
```

## Options

The following options are available:

```javascript
haikunate({
  delimiter: "-",
  tokenLength: 4,
  tokenHex: false,
  tokenChars: "0123456789",
  seed: null
});
```
*If ```tokenHex``` is true, it overrides any tokens specified in ```tokenChars```*

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/atrox/haikunatorjs/issues)
- Fix bugs and [submit pull requests](https://github.com/atrox/haikunatorjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

## Other Languages

Haikunator is also available in other languages. Check them out:

- .NET: https://github.com/Atrox/haikunator.net
- Python: https://github.com/Atrox/haikunatorpy
- PHP: https://github.com/Atrox/haikunatorphp
- Java: https://github.com/Atrox/haikunatorjava
- Go: https://github.com/Atrox/haikunatorgo
- Perl: https://github.com/Atrox/haikunatorperl
- Dart: https://github.com/Atrox/haikunatordart
- Ruby: https://github.com/usmanbashir/haikunator
- Rust: https://github.com/nishanths/rust-haikunator
