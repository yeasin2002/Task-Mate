import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Board, Loading, Nav } from "./components";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Board />
      <Toaster position="top-right" />
    </Suspense>
  );
};

export default App;
