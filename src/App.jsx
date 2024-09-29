
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Jobs from "./jobs";
import JobsDetailedView from "./jobsDetailedView";
import NotFound from "./notFound";
import ProtectedRout from "./protectedRout";

const App = () => {

  return (

    <Routes>

      <Route path="/" element={<ProtectedRout Component={Home} />} ></Route>

      <Route path="/login" element={<Login />} ></Route>

      <Route path="/jobs" element={<ProtectedRout Component={Jobs} />} ></Route>

      <Route path="/jobs/:id" element={<ProtectedRout Component={JobsDetailedView} />} ></Route>

      <Route path="/*" element={<NotFound />} ></Route>

    </Routes>


  )


}








export default App;