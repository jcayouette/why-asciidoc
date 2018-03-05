// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
var attributes = {'reveal.js/': 'node_modules/reveal.js@'};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
asciidoctor.convertFile('why-asciidoc.adoc', options);
