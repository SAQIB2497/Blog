import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError("");
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setContentError("");
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    setAuthorError("");
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    let isValid = true;

    if (title.trim() === "") {
      setTitleError("Title is required");
      isValid = false;
    }

    if (content.trim() === "") {
      setContentError("Content is required");
      isValid = false;
    }

    if (author.trim() === "") {
      setAuthorError("Author is required");
      isValid = false;
    }

    if (isValid) {
      const postData = {
        title: title,
        content: content,
        author: author,
      };

      console.log("Form submitted:", postData);

      fetch("http://localhost:4000/api/post", {
        // Your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              throw new Error(err.message || "Server error");
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setTitle("");
          setContent("");
          setAuthor("");
          setSubmitSuccess(true); // Set success to true
          setSubmitError(""); // Clear any previous errors
          window.location.reload(); // Reload the page after successful submission
        })
        .catch((error) => {
          console.error("Error:", error);
          setSubmitError(error.message); // Set error message
          setSubmitSuccess(false); // Set success to false
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Create Post</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmitButton}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            id="title"
            value={title}
            className={`w-full px-3 py-2 border bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              titleError ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleTitleChange}
          />
          {titleError && <p className="text-red-500">{titleError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block font-bold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            placeholder="Enter Content here"
            className={`w-full px-3 py-2 border bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 ${
              contentError ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleContentChange}
          />
          {contentError && <p className="text-red-500">{contentError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="block font-bold mb-2">
            Author:
          </label>
          <input
            type="text"
            placeholder="Enter Author Name"
            id="author"
            value={author}
            className={`w-full px-3 py-2 bg-transparent border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              authorError ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleAuthorChange}
          />
          {authorError && <p className="text-red-500">{authorError}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      {submitSuccess && (
        <p className="mt-4 text-green-500">Post submitted successfully!</p>
      )}
      {submitError && (
        <p className="mt-4 text-red-500">Error: {submitError}</p>
      )}
    </div>
  );
};

export default Home;
