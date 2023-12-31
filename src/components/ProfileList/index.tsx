import { useEffect } from "react";
import { Profile } from "../Profile";
import { Link, useNavigate } from "react-router-dom";

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
};

export const ProfileList = ({ list }: Props) => {
  return (
    <>
      <ul>
        {list.map((profile) => (
          <li key={profile.id}>
            <Profile {...profile} />
            <Link to={`/list/${profile.id}`}>Przejdz na profil</Link>
          </li>
        ))}
      </ul>
      <Link to="/list/111">Przejdz do elementu listy (nowa podstrona)</Link>
    </>
  );
};
