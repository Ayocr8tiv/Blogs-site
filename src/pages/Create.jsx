import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(undefined);

  const [isLoading, setIsLoading] = useState (false)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log({title, content, image, author});

  //   setTitle('');
  //   setContent('');
  //   setAuthor('');
  //   setImage(null);
    
  // };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const blog = {title,content, author}

      try {
        const response = await fetch("http://localhost:8000/blogs",{
          method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(blog)

            })
            if (!response.ok) {
                throw new Error("failed to submit blog")
                
            }
            setTitle("")
            setContent("")
            setAuthor("")
            alert("blog submitted successfully")
      } catch (error) {
        console.log(error);
        
      }
  }

  return (
    <main className="bg-gray-100 flex items-center min-h-screen flex-col">
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl underline text-slate-800">
          Add a blog
        </h2>
        <form onSubmit={handleSubmit} className="shadow-xl p-10 bg-white rounded mt-10">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              id="title"
            />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              className="h-20 w-full bg-gray-100 shadow-xs p-2 mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your content here..."
              id="content"
            />
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input className="bg-gray-100 p-2 shadow-xs mb-2" type="file" id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
             />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <select 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              className="ms-2 bg-gray-100 p-2 shadow-xs" 
              id="author"
            >
              <option value="">Select Author</option>
              <option value="Ayokunle">Ayokunle</option>
              <option value="Olakitan">Olakitan</option>
              <option value="Damola">Damola</option>
            </select>
          </div>

          <button
          
            className="w-full py-2 text-center rounded bg-blue-500 hover:bg-blue-800 mt-4 text-white"
            type="submit"
          >
            Add blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default Create;