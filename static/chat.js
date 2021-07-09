//import createComment from "./utilities/createComment"
// get the data from the api

const HOST = 'localhost'
const PORT = 3000

/**
 * 
 * @param {string} dir 
 * @returns {string}
 */
function getURL(dir) {
    return `http://${HOST}:${PORT.toString()}/${dir}`
}

const commentSection = document.getElementById('commentSection')


async function renderComments() {
    const commentDataRequest = await fetch(getURL('view_comments'))
    const commentDataJSON = await commentDataRequest.json()
    commentDataJSON.reverse()

    let comment;
    for (let i = 0; i < commentDataJSON.length; i++) {
        comment = createComment(commentDataJSON[i].author, commentDataJSON[i].content)
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
    textarea.readOnly = true
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
    textarea.readOnly = true
    return textarea
}