import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

export const Titles = () => {
  const {titlePosts, setTitlePosts, title, setTitle, setAuthor, setAuthorPosts} = useContext(GlobalContext);

  // Get all the titles
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/subreddits.json`)
      .then(res => {
        //console.log(res);
        
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
          setTitlePosts(newPosts);
          setAuthor('');
          setAuthorPosts([]);
    });
  }, []);

  function setFields(e){
    setTitle(e.target.value);
    setAuthor('');
    setAuthorPosts([]);
  };
 
  const mainURL = "https://www.reddit.com/";

  return(
    <div>
      <div className="flex">
        <label htmlFor="title" className="flexChild">Select Title: </label>
        <select id="title" name="titles" className="flexChild" onChange={(e) => (
          setFields(e)
        )}>
        {titlePosts.map(post => (
          <option key={post.id} value={post.display_name_prefixed}>{post.display_name_prefixed}</option>
        ))}  
        </select>
      </div>
      <div className="flex selectionArea">
        <span className="flexChild">You have selected: </span><span className="red flexChild">
        <a href={mainURL+title} target="_blank" rel="noopener noreferrer">{title}</a>
        </span>
      </div>
    </div>

  )
}