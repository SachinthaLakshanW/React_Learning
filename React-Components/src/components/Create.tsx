import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  return (
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
        <label>Blog Auther</label>
        <select>
          <option value="Sachintha">Sachintha</option>
          <option value="Wasundara">Wasundara</option>
          <option value="Yasmin">Yasmin</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
      </form>
    </div>
  );
};

export default Create;
