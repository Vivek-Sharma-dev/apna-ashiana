// import Header from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
