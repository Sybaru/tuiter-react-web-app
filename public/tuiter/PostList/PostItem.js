function PostItem(post) {
    if (post.title == '' || post.title == null) {
        return(`
    <div class="list-group-item wd-black">
      <div class="wd-image-container">
        <p class="wd-info">⋯</p>
      </div>
      <div>
        <img 
            src=${post.profilePic} 
            class="wd-user-image wd-image-container" />
        <span class="wd-username">
          <b class="wd-name">${post.userName} </b> @${post.handle}  · ${post.time}
        </span>
        <p class="wd-paragraph wd-padding-left">
            ${post.content} 
        </p>
        <div>
          <div>
            <img 
                src=${post.image}  
                class="wd-image-main-full" />
        </div>
        </div>
        <ul class="wd-interactions">
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-comment"></i>  
                ${post.comment} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-retweet"></i>
                ${post.retweet} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-heart"></i>
                ${post.like} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-share"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    `)
    }


    return(`
    <div class="list-group-item wd-black">
      <div class="wd-image-container">
        <p class="wd-info">⋯</p>
      </div>
      <div>
        <img 
            src=${post.profilePic} 
            class="wd-user-image wd-image-container" />
        <span class="wd-username">
          <b class="wd-name">${post.userName} </b> @${post.handle}  · ${post.time}
        </span>
        <p class="wd-paragraph wd-padding-left">
            ${post.content} 
        </p>
        <div>
          <div>
            <img 
                src=${post.image}  
                class="wd-image-main" />
            </div>
          <div class="wd-image-description">
            <div class="padding-12">
              <div class="wd-post wd-post-header">
                <b>${post.title} </b>
              </div>
              <div class="wd-post wd-post-body">
                ${post.description} 
              </div>
            </div>
          </div>
        </div>
        <ul class="wd-interactions">
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-comment"></i>  
                ${post.comment} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-retweet"></i>
                ${post.retweet} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-heart"></i>
                ${post.like} 
            </a>
          </li>
          <li class="wd-interaction-element">
            <a href="#" class="wd-interact">
                <i class="fas fa-share"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    `)

}

export default PostItem;