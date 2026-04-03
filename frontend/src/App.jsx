import "./App.css";
import { Editor } from "@monaco-editor/react";
const App = () => {
  return (
    <main className="flex h-screen w-full bg-gray-950 p-4 gap-2">
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg"></aside>
      <section className=" bg-neutral-900 h-full w-3/4 rounded-lg">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// Code Here...."
        />
      </section>
    </main>
  );
};

export default App;
