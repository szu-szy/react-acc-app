import { useEffect, useState } from "react";
import { ProfileType } from "../../components/ProfileList";
import { useParams } from "react-router-dom";
import { Profile } from "../../components/Profile";

type Props = {
  list: ProfileType[];
};

export const ProfilePage = ({ list }: Props) => {
  const [currProfile, setCurrProfile] = useState<ProfileType>();
  const { profileID } = useParams();

  useEffect(() => {
    if (profileID) {
      const [profile] = list.filter((item) => item.id === profileID);
      if (profile) setCurrProfile(profile);
      else setCurrProfile(undefined);
    }
  }, [profileID]);

  return (
    <div>{currProfile ? <Profile {...currProfile} /> : "Brak danych"}</div>
  );
};
