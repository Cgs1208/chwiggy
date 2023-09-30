const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-xl m-2 p-2">Contact Us</h1>
      <form action="" className="flex flex-col float-left">
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-black"
        />
        <button
          type="sumbit"
          className="p-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
