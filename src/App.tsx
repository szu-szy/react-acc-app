import React, { useState } from "react";
import "./App.scss";
import { Child } from "./components/Child/Child";
import { Parent } from "./components/Parent/Parent";
import { Toggler } from "./components/Toggler/Toggler";
import { List } from "./components/List/List";
import { ToDo } from "./components/ToDo/ToDo";
import { Counter } from "./components/Counter/Counter";
import { Profile } from "./components/Profile";
import { ProfileList, ProfileType } from "./components/ProfileList";
import { ProfileForm } from "./components/ProfileForm";
import { EffectComponent } from "./components/EffectComponent";
import { CounterEffect } from "./components/CounterEffect";
import { useCounterEffect } from "./components/CounterEffect/hooks/useCounterEffect";

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

const PROFILE_LIST = [
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
  };

  const removeItem = (id: string) => {
    setProfileList((prev) => prev.filter((profile) => profile.id !== id));
  };

  type ObjectType = {
    text?: string;
  };

  return (
    <div className="App">
      <CounterEffect />
      {/* <EffectComponent /> */}
      {/* <ProfileForm addItem={addProfile} />
      <h2>Zadanie ProfileList</h2>
      <ProfileList list={profileList} addItem={addProfile} />
      <button onClick={() => addProfile(profile)}>Add profile</button>
      <button onClick={() => removeItem("profile-list-1")}>Usun element</button> */}
    </div>
  );
};

export default App;
