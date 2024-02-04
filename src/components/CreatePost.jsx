import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost=()=>{
  let navigate = useNavigate();
  const {addPost} = useContext(PostList);

const userIdElement =useRef();
const postTitleElement  =useRef();
const postBodyElement  =useRef();
const reactionsElement  =useRef();
const tagsElement  =useRef();


const handleSubmit=(event)=>{
event.preventDefault();
const userId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const reactions = reactionsElement.current.value;
const tags = tagsElement.current.value.split(" ");
userIdElement.current.value=" ";
postTitleElement.current.value=" ";
postBodyElement.current.value=" ";
reactionsElement.current.value=" ";
tagsElement.current.value=" ";



fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title:postTitle,
    body:postBody,
    reaction: reactions,
    userId:userId,
    tags:tags
  })
})
.then(res => res.json())
.then((post)=>{addPost(post);
  
navigate ("/")
})


navigate ("/")



















}


  return  (<form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">User ID</label>
    <input type="text" ref={userIdElement } className="form-control" id="userId" placeholder="Enter your User Id here"/>
    
  </div>



  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post-Title</label>
    <input type="text" ref={postTitleElement } className="form-control" id="title" placeholder="How are you feeling today?"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post content</label>
    
    <textarea rows={4} type="text" ref={postBodyElement } className="form-control" id="body" placeholder="Tell us more about it !!"/>
   
   
    
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Enter reactions</label>
    <input type="text"  ref={reactionsElement } className="form-control" id="reactions" placeholder="Number of reactions on post"/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Tags</label>
    <input type="text" ref={tagsElement } className="form-control" id="tags" placeholder="Write your tags here"/>
    
  </div>


  <button type="submit" className="btn btn-primary">Post</button>
</form>)

}

export default CreatePost;