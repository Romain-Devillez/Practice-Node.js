const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Andrew ');

fs.appendFileSync('notes.txt', 'and my surname is Romain.')