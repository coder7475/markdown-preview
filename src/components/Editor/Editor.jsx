const Editor = () => {
    const id = 1;
    return (
        <div className="border-solid w-96 mx-auto mt-5">
            <label htmlFor={id} className="font-bold flex justify-start p-2 border-solid border-collapse border-2 bg-green-600 text-white">Editor</label>
            <textarea name="editor" id={id} className="w-full h-48 border-solid border-2 border-collapse bg-green-300"></textarea>           
        </div>
    );
};

export default Editor;