import { ChangeEvent, FormEvent, useState } from "react";
import { ProfileType } from "../../ProfileList";

type Props = {
  addItem: (item: ProfileType) => void;
};

type Data = {
  profile: ProfileType;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useProfileForm = ({ addItem }: Props): Data => {
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

  return {
    profile,
    handleSubmit,
    handleInput,
  };
};
