const notificationContainer =
document.getElementById(
"notificationContainer"
);

const notifications = [

    "Sarah liked your post",

    "David followed you",

    "Emma commented on your post"

];

if(notificationContainer){

    notifications.forEach(item=>{

        notificationContainer.innerHTML += `
        <div class="notification">
            ${item}
        </div>
        `;
    });

}