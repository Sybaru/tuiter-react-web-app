import PostItem from "./PostItem.js";
import post from "./post.js"

const PostList = () => {
    var listItems = `
    <div class="list-group wd-black">`;
    post.forEach(element => {
        listItems = listItems.concat(
            PostItem(element)
        )
    });
    listItems = listItems.concat('</div>')


   return (listItems); 
}

export default PostList;