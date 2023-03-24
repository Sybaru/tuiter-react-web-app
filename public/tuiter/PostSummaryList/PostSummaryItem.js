function PostSummaryItem(post) {
    var topic = "";
    var userName = "";
    var time = "";
    var title = "";
    var image = "";
    var tweets = "";

    if (post.topic != '' && post.topic != null) {
        topic = `
        <div class="wd-light-txt">
            ${post.topic}
        </div>
        `;
    }

    if (post.userName != '' && post.userName != null) {
        userName = `
            <div class="d-inline-block wd-bold">
                ${post.userName}
                <i class="fas fa-check-circle"></i>
            </div>
        `;
    }

    if (post.time != '' && post.time != null) {
        time = `<div class="wd-light-txt d-inline-block">- ${post.time}</div>`;
    }

    if (post.title != '' && post.title != null) {
        title = `
            <div class="d-inline-block wd-bold">
                ${post.title}
            </div>
        `;
    }

    if (post.tweets != '' && post.tweets != null) {
        tweets = `<div class="wd-light-txt">${post.tweets} Tuits</div>`
    }

    if (post.image != '' && post.image != null) {
        image = `
            <div>
                <img
                    class="wd-image"
                    src=${post.image}
                />
            </div>
            `;
    }


    return (`
    <div class="list-group-item">
        <div class="d-flex justify-content-between">
            <div>
                ${topic}
                ${userName}
                ${time}
                ${title}
                ${tweets}
            </div>
            ${image}
        </div>
    </div>
    `)

}

export default PostSummaryItem;