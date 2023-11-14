import { ChangeEvent, FormEvent, useState } from "react";
import { ProfileType } from "../ProfileList";

type Props = {
  addItem: (item: ProfileType) => void;
};

export const ProfileForm = ({ addItem }: Props) => {
  const [profile, setProfile] = useState<ProfileType>({} as ProfileType);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // const propName = e.target.name;
    // const propValue = e.target.value;
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem({
      ...profile,
      id: `${Math.floor(Math.random() * 10000)}`,
    });
  };

  return (
    <>
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="tag">
          Tag:
          <input
            type="text"
            id="tag"
            name="tag"
            value={profile.tag}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            value={profile.location}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="stats">
          Stats:
          <input
            type="text"
            id="stats"
            name="stats"
            value={profile.stats}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="avatar">
          Avatar url:
          <input
            type="text"
            id="avatar"
            name="avatarUrl"
            value={profile.avatarUrl}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};
