import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from './features/characters/pages/PageListCharacters';
import { PageListGame } from "./features/games/pages/PageListGame";
import { PageNoMatch } from './pages/PageNoMatch'
import { PageHome } from "./pages/PageHome";
import { Login } from "./features/authentication/components/Login";
import { PrivateRoute } from "./features/authentication/components/PrivateRoute";
import { PageCreateGame } from "./features/games/pages/PageCreateGame";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/" element={<PrivateRoute><PageHome></PageHome></PrivateRoute>} />
      <Route path="/characters" element={<PrivateRoute><PageListCharacters></PageListCharacters></PrivateRoute>} />
      <Route path="/games" element={<PrivateRoute><PageListGame></PageListGame></PrivateRoute>} />
      <Route path="/games/new" element={<PrivateRoute><PageCreateGame></PageCreateGame></PrivateRoute>} />
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
