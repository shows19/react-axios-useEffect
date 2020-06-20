import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export const Posts = () => {
  const { authorPosts } = useContext(GlobalContext);

  //const selectedPosts = authors.filter((item) => (item.author === {author}))

  //console.log("received",authorPosts);

  return(
    <div>
      <h3><span className="green">All posts by selected Author</span></h3>
      <table>
        <ul className="noListStyle">
        <tr>
          <th className="red">Author</th>
          <th className="red">Posts</th>
        </tr>
          {authorPosts.map(post =>(
            <tr>
              <td>
                {post.author}
              </td>
              <td>
                <li key={post.id}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </li>
              </td>
            </tr>
          ))}
        </ul>
      </table>
    </div>
  )
}