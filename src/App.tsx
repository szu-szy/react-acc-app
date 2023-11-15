import React, { useState } from "react";
import "./App.scss";
import { Child } from "./components/Child/Child";
import { Parent } from "./components/Parent/Parent";
import { Toggler } from "./components/Toggler/Toggler";
import { ToDo } from "./components/ToDo/ToDo";
import { Counter } from "./components/Counter/Counter";
import { ProfileList, ProfileType } from "./components/ProfileList";
import { EffectComponent } from "./components/EffectComponent";
import { CounterEffect } from "./components/CounterEffect";
import { useCounterEffect } from "./components/CounterEffect/hooks/useCounterEffect";
import { ClassComponent } from "./components/ClassComponent";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./components/Redux/hooks";
import { addItem } from "./components/Redux/counterSlice";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { ListItem } from "./pages/ListItem";
import { List } from "./pages/List";
import { Home } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
import { ProfileForm } from "./pages/ProfileForm";

// eventy w js:
// click, change, submit
// event w React:
// onClick, onChange, onSubmit

// starsze rozwiazanie dla linii 24 (button)
// const button = document.querySelector(..)
// const updateState = () => {}
// button.addEventListener('click', updateState)

// operatory logiczne
// && , ||

export const PROFILE_LIST = [
  {
    id: "profile-list-1",
    username: "Andrzej",
    tag: "Tag Andrzej",
    location: "bstok",
    phone: "+48 123 123 123",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    stats: "stats Andrzeja",
  },
  {
    id: "profile-list-2",
    username: "Andrzej 1",
    tag: "Tag Andrzej",
    location: "bstok",
    phone: "+48 123 123 123",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    stats: "stats Andrzeja",
  },
  {
    id: "profile-list-3",
    username: "Andrzej 2",
    tag: "Tag Andrzej",
    location: "bstok",
    phone: "+48 123 123 123",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    stats: "stats Andrzeja",
  },
  {
    id: "profile-list-4",
    username: "Andrzej 3",
    tag: "Tag Andrzej",
    location: "bstok",
    phone: "+48 123 123 123",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    stats: "stats Andrzeja",
  },
];

const App = () => {
  const [profileList, setProfileList] = useState<ProfileType[]>(PROFILE_LIST);
  const navigate = useNavigate();

  // obiekty do zadania z Profile
  const profile = {
    id: "123",
    username: "Andrzej",
    tag: "Tag Andrzej",
    location: "bstok",
    phone: "+48 123 123 123",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    stats: "stats Andrzeja",
  };

  const { username, tag, location, phone, avatarUrl, stats } = profile;

  const addProfile = (item: ProfileType) => {
    setProfileList((prev) => [...prev, item]);
    navigate("/");
  };

  const removeItem = (id: string) => {
    setProfileList((prev) => prev.filter((profile) => profile.id !== id));
  };

  // redux

  // const list = useAppSelector((state) => state.appReducer.list);
  // const dispatch = useAppDispatch();

  // const handleAddItem = () =>
  //   dispatch(
  //     addItem({
  //       id: "a",
  //       text: "123",
  //     })
  //   );

  // brak w trasach url localhost:3000
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Przyklady + zadanie 1 */}
        {/* <Route path="/" element={<ProfileList list={profileList} />} />
        <Route path="/home" element={<ProfileList list={profileList} />} />
        <Route path="/list" element={<List list={profileList} />} />
        <Route path="/list/:id" element={<ListItem />} />
        <Route path="/form" element={<ProfileForm addItem={addProfile} />} /> */}
        {/* Zadanie 2 */}
        <Route path="/" element={<Home list={profileList} />} />
        {/* <Route path="/profiles" element={<ProfileList/>}/> */}
        <Route
          path="/profiles/:profileID"
          element={<ProfilePage list={profileList} />}
        />
        <Route
          path="/profiles/new"
          element={<ProfileForm addItem={addProfile} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
