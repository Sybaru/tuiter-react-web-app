import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    var listItems = `
    <div class="list-group">
        <div class="list-group-item">
            <b>Who to follow</b>
        </div>`;
    who.forEach(element => {
        listItems = listItems.concat(
            WhoToFollowListItem(element)
        )
    });
    listItems = listItems.concat('</div>')


   return (listItems); 
}

export default WhoToFollowList;