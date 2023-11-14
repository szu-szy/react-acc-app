import { useState } from "react";

type ProfileProps = {
  id: string;
  username: string;
  tag: string;
  location: string;
  phone: string;
  stats: string;
  avatarUrl?: string;
};

export const Profile = ({
  id,
  username,
  tag,
  location,
  phone,
  avatarUrl,
  stats,
}: ProfileProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      Username: {username}
      <button onClick={() => setIsCollapsed((prev) => !prev)}>
        {isCollapsed ? "Zwin" : "Rozwin"}
      </button>
      {/* <button onClick={() => removeItem(id)}>Usun</button> */}
      {isCollapsed ? (
        <ul>
          <li>Tag: {tag}</li>
          <li>Location: {location}</li>
          <li>Phone: {phone}</li>
          <li>Stats: {stats}</li>
          <li>
            {avatarUrl ? (
              <img src={avatarUrl} alt="avatar profilu" />
            ) : (
              <img
                src="https://www.blexar.com/avatar.png"
                alt="domyslny avatar"
                width="200"
                height="200"
              />
            )}
          </li>
        </ul>
      ) : null}
    </div>
  );
};
