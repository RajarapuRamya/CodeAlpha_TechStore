const Notification =
    require("../models/Notification");

const createNotification = async (
    sender,
    receiver,
    type,
    post = null
) => {

    return await Notification.create({
        sender,
        receiver,
        type,
        post
    });
};

const getUserNotifications =
    async (userId) => {

        return await Notification.find({
            receiver: userId
        })
        .populate(
            "sender",
            "name username profilePic"
        )
        .sort({ createdAt: -1 });
};

const markAsRead = async (
    notificationId
) => {

    return await Notification.findByIdAndUpdate(
        notificationId,
        {
            isRead: true
        },
        {
            new: true
        }
    );
};

module.exports = {
    createNotification,
    getUserNotifications,
    markAsRead
};