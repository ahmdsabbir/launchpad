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
                url: node.url
            });
        }
        if (node.children) {
            bookmarks = bookmarks.concat(traverseBookmarks(node.children));
        }
    }
    return bookmarks;
}



// Example usage:
getBookmarks((bookmarks) => {
    console.log(bookmarks);
});