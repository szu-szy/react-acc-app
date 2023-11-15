import { ProfileType } from "../../components/ProfileList";
import { useProfileForm } from "./hooks/useProfileForm";

type Props = {
  addItem: (item: ProfileType) => void;
};

export const ProfileForm = ({ addItem }: Props) => {
  const { profile, handleSubmit, handleInput } = useProfileForm({ addItem });

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
