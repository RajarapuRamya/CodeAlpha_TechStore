let following = false;

function toggleFollow(btn){

    following = !following;

    btn.textContent =
    following ?
    "Following" :
    "Follow";

}