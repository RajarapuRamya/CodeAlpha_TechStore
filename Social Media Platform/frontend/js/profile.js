let following = 320;

document.getElementById("followBtn")
.addEventListener("click", function(){

    following++;

    document.getElementById("followingCount")
    .innerText = following;

    this.innerText = "Following";
});


function uploadPost(){

    const file =
    document.getElementById("postFile").files[0];

    if(!file){
        alert("Select Image or Video");
        return;
    }

    const gallery =
    document.getElementById("gallery");

    const url =
    URL.createObjectURL(file);

    if(file.type.startsWith("image")){

        const img =
        document.createElement("img");

        img.src = url;
        img.classList.add("image-post");

        gallery.prepend(img);
    }

    else if(file.type.startsWith("video")){

        const video =
        document.createElement("video");

        video.controls = true;
        video.classList.add("video-post");

        video.innerHTML =
        `<source src="${url}">`;

        gallery.prepend(video);
    }

    let count =
    document.getElementById("postCount");

    count.innerText =
    parseInt(count.innerText)+1;
}


function showAll(){

    document
    .querySelectorAll(".image-post,.video-post")
    .forEach(item=>{
        item.style.display="block";
    });
}


function showImages(){

    document
    .querySelectorAll(".image-post")
    .forEach(item=>{
        item.style.display="block";
    });

    document
    .querySelectorAll(".video-post")
    .forEach(item=>{
        item.style.display="none";
    });
}


function showVideos(){

    document
    .querySelectorAll(".image-post")
    .forEach(item=>{
        item.style.display="none";
    });

    document
    .querySelectorAll(".video-post")
    .forEach(item=>{
        item.style.display="block";
    });
}