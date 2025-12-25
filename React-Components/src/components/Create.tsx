import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="site-background">
      <header className="navbar">
        <div className="brand">My Blog</div>
        <nav className="links">
          <a href="#">Home</a>
          <a href="#">Create</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="content container">
        <div className="create">
          <h2>Add a New Blog</h2>
          <form>
            <label>Blog Title:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea required></textarea>
            <label>Blog Author</label>
            <select>
              <option value="Sachintha">Sachintha</option>
              <option value="Wasundara">Wasundara</option>
              <option value="Yasmin">Yasmin</option>
            </select>
            <button type="button">Add Blog</button>
            <p>{title}</p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Create;
