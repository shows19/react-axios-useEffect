import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

export const Authors = () => {
  const {title, author, authors, setAuthors, changeAuthor} = useContext(GlobalContext);
  
  // fetch posts as per selected title
  const fetchTitlePosts = () => {
    axios.get(`https://www.reddit.com/${title}.json`)
      .then(res => {
        //console.log(res);
        
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
          setAuthors(newPosts);
      });
  };

  // Get all the titles
  React.useEffect(fetchTitlePosts, [title]);

  function setFields(e){
    changeAuthor(e.target.value);
  };

  const mainURL = "https://www.reddit.com/user/";

  return(
    <div>
      <div className="flex">
        <label htmlFor="authors" className="flexChild">Select Author:</label>
        <select id="author" name="authors" className="flexChild" onChange={(e) => (
          setFields(e)
        )}>
          <option key="0" value="">All Authors</option>
        {authors.map(post => (
          <option key={post.id} value={post.author}>{post.author}</option>
        ))}  
        </select>
      </div>
      <div className="flex selectionArea">
        <span className="flexChild">You have selected: </span><span className="red flexChild">
        <a href={mainURL+author} target="_blank" rel="noopener noreferrer">{author}</a>
        </span>
      </div>
    </div>

  )
}