import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export const Posts = () => {
  const { authorPosts } = useContext(GlobalContext);

  return(
    <div>
      <h3><span className="green">All posts by selected Author</span></h3>
      <table>
        <thead>
        <tr>
          <th className="red">Author</th>
          <th className="red">Posts</th>
        </tr>
        </thead>
        <tbody>
          {authorPosts.map(post =>(
            <tr key={post.id}>
              <td>
                {post.author}
              </td>
              <td>
                <ul className="noListStyle">
                <li key={post.id}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}