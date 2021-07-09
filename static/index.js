//import createComment from "./utilities/createComment"
const commentData = [
    {
        author: "AK#7755",
        content: "Hello World!"
    },
    {
        author: "AK#7755",
        content: "Hello World!"
    }
]

const commentSection = document.getElementById('commentSection')


function renderComments() {
    let comment;
    for (let i = 0; i < commentData.length; i++) {
        comment = createComment(commentData[i].author, commentData[i].content)
        commentSection.appendChild(comment)
    } 
}

renderComments()

/**
 * 
 * @param {string} author 
 * @param {string} content 
 * @param {number} date 
 * @returns HTMLElement 
 */
function createComment(author, content) {
    const div = document.createElement('div')
    const authorTextArea = createAuthorTextArea(author)
    const contentTextArea = createContentTextArea(content)


    div.appendChild(authorTextArea)
    div.appendChild(contentTextArea)
    
    div.className = 'comment'



    return div
}

/**
 * 
 * @param {string} author 
 * @returns HTMLElement
 */
function createAuthorTextArea(author) {
    let textarea = document.createElement('textarea')
    textarea.appendChild(document.createTextNode(author))
    textarea.className = 'author'
    return textarea
}

/**
 * 
 * @param {string} content 
 * @returns HTMLElement
 */
function createContentTextArea(content) {
    let textarea = document.createElement('textarea')
    textarea.appendChild(document.createTextNode(content))
    textarea.className = 'content'
    return textarea
}