
import './App.css';
import copy from './copy.json';

function App() {




  return (
    <div className="App">
     <h1>My Favorite Posts</h1>

     <div>
      {copy.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Auuthor: {post.author}</p>
          <p>Date: {post.date}</p>
          <p>{post.content}</p>

          </div>
      )) }
     </div>

  
    
    </div>
  );
}

export default App;
