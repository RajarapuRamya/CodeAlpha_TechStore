const postForm =
document.getElementById("postForm");

const postsContainer =
document.getElementById("postsContainer");

let posts = JSON.parse(
localStorage.getItem("posts")) || [];

function displayPosts(){

    if(!postsContainer) return;

    postsContainer.innerHTML = "";

    posts.forEach((post,index)=>{

        postsContainer.innerHTML += `
        <div class="post">

            <div class="post-header">
                <img src="../images/default-avatar.png">
                <h4>${post.user}</h4>
            </div>

            <p>${post.content}</p>

            <div class="post-actions">

                <button onclick="likePost(${index})">
                    ❤️ ${post.likes}
                </button>

            </div>

        </div>
        `;
    });
}

if(postForm){

    postForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const content =
        document.getElementById("postContent").value;

        if(content.trim() !== ""){

            posts.unshift({

                user:"John Doe",

                content,

                likes:0,

                comments:[]

            });

            localStorage.setItem(
            "posts",
            JSON.stringify(posts));

            displayPosts();

            postForm.reset();
        }
    });

}

displayPosts();