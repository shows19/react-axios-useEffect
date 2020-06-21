import React, { createContext, useReducer} from 'react';

//const initialPosts = [];

function globalContextReducer(state, action){
  switch (action.type) {
    case 'TITLE_POSTS':
      return {
        ...state,
        titlePosts: action.posts,
        author :'',
        authorPosts: []
      }
      case 'CHANGE_TITLE':
        return {
          ...state,
          title: action.title,
          author :'',
          authorPosts: []
        }
        case 'SET_AUTHORS':
          return {
            ...state,
            authors: action.authors,
            author :'',
            authorPosts: action.authors  // show all posts in the start
          }  
          case 'CHANGE_AUTHOR':
            return {
              ...state,
              author :action.author,
              // if show all authors then show all posts else filter posts by selected author
              authorPosts: action.author === "" ? state.authors : state.authors.filter((item) => (item.author === action.author))
            }  
      default:
      return state;
  }
};

export const GlobalContext = createContext();

const initialState = {
  titlePosts : [],
  title : '',
  authors : [],
  author : '',
  authorPosts : []
};

export const GlobalProvider = ( {children} ) => {
 
  // create reducer
  const [state, dispatch] = useReducer(globalContextReducer,initialState);
  // set elements whose whose state needs to be managed
  const { titlePosts,title,authors,author,authorPosts } = state;

  function setTitlePosts(newPosts){
    dispatch({type:'TITLE_POSTS' , posts: newPosts})
  };

  function changeTitle(newTitle){
    dispatch({type:'CHANGE_TITLE' , title: newTitle})
  };

  function setAuthors(newAuthors){
    dispatch({type:'SET_AUTHORS' , authors: newAuthors})
  };

  function changeAuthor(newAuthor){
    dispatch({type:'CHANGE_AUTHOR' , author: newAuthor})
  };

  return(
    <GlobalContext.Provider value = 
    { {titlePosts,title,authors,author,authorPosts, setTitlePosts, changeTitle, setAuthors, changeAuthor}
    /* {titlePosts, setTitlePosts, title, setTitle
      , authorPosts, setAuthorPosts
    ,author, setAuthor, authors, setAuthors} */
    }
    >{children}</GlobalContext.Provider>
  )
}
