import Comp1 from "./testComponents/Comp1";
import Comp2 from "./testComponents/Comp2";
import Comp3 from "./testComponents/Comp3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MyNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Comp1 />} />
          <Route path="comp1" element={<Comp2 />} />
          <Route path="comp2" element={<Comp3 />} />
          <Route path="*" element={<p>Text</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 export default MyNav;
