const source = document.getElementById("resume").innerHTML;
const template = Handlebars.compile(source);
const html = template(resume);
document.getElementById("resume-placeholder").innerHTML = html;

Object.keys(basicStyles).forEach((key) => {
    console.log(document.getElementsByTagName(key))
    const elements = document.getElementsByTagName(key)
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        basicStyles[key].forEach((style) => {
            element.classList.add(style)
        })
    }
})