import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    var listItems = `
    <div class="list-group">`;
    posts.forEach(element => {
        listItems = listItems.concat(
            PostSummaryItem(element)
        )
    });
    listItems = listItems.concat('</div>')


   return (listItems); 
}

export default PostSummaryList;