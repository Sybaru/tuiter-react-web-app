function WhoToFollowListItem(who) {
    return(`
   <a href="" class="list-group-item">
        <div class="row">
            <div class="col-12 col-lg-3 col-xxl-2">
                <img class="wd-profile-pic"
                    src=${who.avatarIcon}
                />
            </div>
            <div class="col-12 col-lg-5 col-xxl-7">
                <div class="d-inline-block wd-bold">
                    ${who.userName}
                    <i style="color: #1da1f2" class="fas fa-check-circle"></i>
                </div>
                <div class="wd-light-txt">@${who.handle}</div>
            </div>
            <div class="col-12 col-lg-4 col-xxl-3 pt-2">
                <button class="btn btn-primary btn-lg wd-tuit">
                    Follow
                </button>
            </div>
        </div>
    </a>
 `);
}
export default WhoToFollowListItem;