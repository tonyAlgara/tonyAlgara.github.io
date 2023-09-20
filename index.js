const source = document.getElementById("resume").innerHTML;
const template = Handlebars.compile(source);
const html = template(resume);
document.getElementById("resume-placeholder").innerHTML = html;

Object.keys(basicStyles).forEach((key) => {
    const isClass = key.startsWith(".")
    const elements = isClass ? document.getElementsByClassName(key.substring(1)) : document.getElementsByTagName(key)
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        basicStyles[key].forEach((style) => {
            element.classList.add(style)
        })
    }
})