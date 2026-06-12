function addComment(index,comment){

    posts[index].comments.push(comment);

    localStorage.setItem(
    "posts",
    JSON.stringify(posts));

}