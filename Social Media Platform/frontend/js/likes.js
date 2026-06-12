function likePost(index){

    posts[index].likes++;

    localStorage.setItem(
    "posts",
    JSON.stringify(posts));

    displayPosts();
}