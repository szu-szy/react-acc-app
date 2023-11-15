import { Link, useParams } from "react-router-dom";
import { ProfileType } from "../../components/ProfileList";
import { useEffect, useState } from "react";
import { PROFILE_LIST } from "../../App";
import { Profile } from "../../components/Profile";

export const ListItem = () => {
  const [profile, setProfile] = useState<ProfileType>();
  const { id } = useParams();

  useEffect(() => {
    const [currProfile] = PROFILE_LIST.filter((item) => item.id === id);

    if (currProfile) setProfile(currProfile);
    else {
      setProfile(undefined);
    }
  }, []);

  return (
    <div>
      <Link to="/list/2">Powrót do listy elementów</Link>
      {profile ? <Profile {...profile} /> : "Błąd odczytu"}
    </div>
  );
};
