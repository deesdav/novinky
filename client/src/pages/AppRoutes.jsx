import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import NoveltyCreateForm from "./NoveltyCreateForm/NoveltyCreateForm";
import NoveltyUpdateForm from "./NoveltyUpdateForm/NoveltyUpdateForm";
import NoveltyView from "./NoveltyView/NoveltyView";
import NoveltyList from "./NoveltyList/NoveltyList";
import CreatedNovelty from "./NoveltyCreateForm/CreatedNovelty";
import Contacts from "./Contacts/Contacts";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createnovelty" element={<NoveltyCreateForm />} />
          <Route path="/updatenovelty/:id" element={<NoveltyUpdateForm />} />
          <Route path="/novelty/:id" element={<NoveltyView />} />
          <Route path="/novelties" element={<NoveltyList />} />
          <Route path="/creatednovelty/:id" element={<CreatedNovelty />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
