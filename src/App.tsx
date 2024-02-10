import { Suspense } from "react";
import { Board, Loading, Nav } from "./components";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Board />
    </Suspense>
  );
};

export default App;
