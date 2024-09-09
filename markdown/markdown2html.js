const fs = require("fs")

const input = fs.readFileSync("demo.md", "utf-8") + "\n"

let output = input
                .replace(/\> (.*?)\n/g, '<blockquote>$1</blockquote>\n')
                .replace(/\#\#\#\#\#\# (.*?)\n/g, '<h6>$1</h6>')
                .replace(/\#\#\#\#\# (.*?)\n/g, '<h5>$1</h5>')
                .replace(/\#\#\#\# (.*?)\n/g, '<h4>$1</h4>')
                .replace(/\#\#\# (.*?)\n/g, '<h3>$1</h3>')
                .replace(/\#\# (.*?)\n/g, '<h2>$1</h2>')
                .replace(/\# (.*?)\n/g, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<i>$1</i>')
                .replace(/`(.*?)`/g, '<code>$1</code>')
                .replace(/\n(.*?)\n\n/g, '\n<p>$1</p>\n')
                .replace(/\n(.*?)\n\n/g, '\n<p>$1</p>\n')
                .replace(/\<p\>-{3,}\<\/p\>/g, '<hr/>')

console.log(output)
