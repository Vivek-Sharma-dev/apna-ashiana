import Header from "./components/navbar/Header.tsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto ps-3 lg:ps-0">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
