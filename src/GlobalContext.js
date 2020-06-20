import React, { createContext, useState} from 'react';

const initialPosts = [];

export const GlobalContext = createContext();

export const GlobalProvider = ( {children} ) => {
  const [titlePosts, setTitlePosts] = useState(initialPosts);
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState('');
  const [authorPosts, setAuthorPosts] = useState([]);
  
  return(
    <GlobalContext.Provider value = 
    {{titlePosts, setTitlePosts, title, setTitle
      , authorPosts, setAuthorPosts
    ,author, setAuthor, authors, setAuthors}}
    >{children}</GlobalContext.Provider>
  )
}
