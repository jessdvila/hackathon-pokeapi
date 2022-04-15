
const contents = document.getElementById('contents')
const contentsParent = contents.parentElement()
contents.parentNode.removeChild(contents)
contentsParent.firstChild.prepend('<img id="theimage" src = "https://twitter.com/jessdvila/photo" />'

