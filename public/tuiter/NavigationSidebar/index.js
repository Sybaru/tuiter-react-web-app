const NavigationSidebar = () => {
  return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="list-group-item" href="../HomeScreen/index.html">
            <i class="fas fa-home fa-hashtag wd-bg-trans"></i>
            <span>Home</span>
        </a>
        <a class="list-group-item" href="../explore/index.html">
            <i class="fas fa-fw fa-hashtag wd-bg-trans"></i>
            <span>Explore</span>
        </a>
        <a class="list-group-item" href="#Notifications">
            <i class="fas fa-fw fa-bell"></i>
            <span>Notifications</span>
        </a>
        <a class="list-group-item" href="#Messages">
            <i class="fas fa-fw fa-envelope"></i>
            <span>Messages</span>
        </a>
        <a class="list-group-item" href="#Bookmarks">
            <i class="fas fa-fw fa-bookmark"></i>
            <span>Bookmarks</span>
        </a>
        <a class="list-group-item" href="#Lists">
            <i class="fas fa-fw fa-list"></i>
            <span>Lists</span>
        </a>
        <a class="list-group-item" href="#Profile">
            <i class="fas fa-fw fa-user"></i>
            <span>Profile</span>
        </a>
        <a class="list-group-item" href="#More">
            <i class="fas fa-fw fa-circle"></i>
            <span>More</span>
        </a>
               
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;
