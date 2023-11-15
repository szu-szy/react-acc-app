import { Link } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { ProfileType } from "../../components/ProfileList";
import { useState } from "react";

type Props = {
  list: ProfileType[];
};

export const Home = ({ list }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section>
      <h1>Homepage - wyswietla liste profili</h1>
      <label htmlFor="searchInput">
        Wyszukaj:
        <input
          type="text"
          id="searchInput"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <ul>
        {searchValue.length > 3
          ? list
              .filter((profile) => profile.username.includes(searchValue))
              .map((profile) => (
                <li key={profile.id}>
                  <Profile {...profile} />
                  <Link to={`/profiles/${profile.id}`}>Przejdz na profil</Link>
                </li>
              ))
          : list.map((profile) => (
              <li key={profile.id}>
                <Profile {...profile} />
                <Link to={`/profiles/${profile.id}`}>Przejdz na profil</Link>
              </li>
            ))}
      </ul>
    </section>
  );
};
