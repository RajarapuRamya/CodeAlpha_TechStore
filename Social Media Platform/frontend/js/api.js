const API = {

    users: [],

    posts: [],

    notifications: [],

    getUsers() {
        return this.users;
    },

    getPosts() {
        return this.posts;
    },

    addPost(post) {
        this.posts.unshift(post);
    },

    addNotification(message) {
        this.notifications.unshift(message);
    }

};