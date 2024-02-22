chrome.bookmarks.getTree((bookmarks) => {
    console.log('#####', bookmarks)
    bookmarks.forEach((bookmark) => {
        console.log(bookmark.title, bookmark.url);
    });
});