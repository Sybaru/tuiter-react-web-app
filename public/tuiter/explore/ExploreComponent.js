import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-12 col-sm-11">
                    <div class="input-group">
                        <div class="wd-search-prepend input-group-prepend wd-border-1">
                            <span class="wd-search-text input-group-text bg-transparent">
                            <i class="fa fa-search" style="color:grey"></i>
                            </span>
                        </div>
                        <input
                            class="form-control wd-search"
                            type="text"
                            placeholder="Search Tuiter"
                            name="search"
                        />
                    </div>
                </div>
                <div class="col-12 col-sm-1">
                    <a href="explore-settings.html">
                        <i class="pt-1 fas fa-cog fa-2x"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">
                        Entertainment
                    </a>
                </li>
            </ul>
            <div class="position-relative">
                <img class="w-100" src="images/starship.png" />
                <span class="wd-big-text">SpaceX's Starship</span>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
