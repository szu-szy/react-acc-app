import { Link } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { ProfileType } from "../../components/ProfileList";

type Props = {
  list: ProfileType[]; // mozna zapisac rowniez Array<ProfileType>
};

export const List = ({ list }: Props) => {
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
