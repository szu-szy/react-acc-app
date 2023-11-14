import { Profile } from "../Profile";

export type ProfileType = {
  id: string;
  username: string;
  tag: string;
  location: string;
  phone: string;
  stats: string;
  avatarUrl?: string;
};

type Props = {
  list: ProfileType[]; // mozna zapisac rowniez Array<ProfileType>
  addItem: (item: ProfileType) => void;
};

export const ProfileList = ({ list, addItem }: Props) => {
  return (
    <>
      <ul>
        {list.map((profile) => (
          <li key={profile.id}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
      {/* <button onClick={() => addItem(profil)}>Dodaj Profil</button> */}
    </>
  );
};
