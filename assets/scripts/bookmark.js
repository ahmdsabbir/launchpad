const element = document.querySelector('#bookmarks-container');

function getBookmarks(callback) {
    chrome.bookmarks.getTree((nodes) => {
        const bookmarks = traverseBookmarks(nodes);
        if (typeof callback === 'function') {
            callback(bookmarks);
        }
    });
}

function traverseBookmarks(nodes) {
    let bookmarks = [];
    for (let node of nodes) {
        if (node.url) {
            bookmarks.push({
                title: node.title,
                url: node.url,
                firstChar: getFirstChar(node.url)
            });
        }
        if (node.children) {
            bookmarks = bookmarks.concat(traverseBookmarks(node.children));
        }
    }
    return bookmarks;
}

function getFirstChar(url) {
    const host = new URL(url).host;
    if(!host.includes('.')) {
        return host
    }

    const arr = host.split('.')
    if (arr.length > 2) {
        return arr[1]
    } else {
        return arr[0]
    }
}

getBookmarks((bookmarks) => {
    let elm = ''
    for (let bookmark of bookmarks) {
        elm += `
            <a href="${bookmark.url}" title="${bookmark.url}" class="bookmark">${bookmark.title.trim() !== '' || !bookmark.title ? bookmark.firstChar: bookmark.title}</a>
        `
    }
    element.innerHTML = elm
});