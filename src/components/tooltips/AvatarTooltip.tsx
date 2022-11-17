import { Avatar, Dropdown, Tooltip } from "flowbite-react";
import AuthService from "src/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const name = user.name;
const userName = user.userName;
const role = user.role;
const logout = AuthService.logout;

const AvatarTooltip = () => {
  return (
    <div className="flex items-center">
      <Dropdown
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        }
        arrowIcon={false}
        inline={true}
      >
        <Dropdown.Header>
          <span className="block text-sm">{userName}</span>
          <span className="block truncate text-sm font-medium">{role}</span>
        </Dropdown.Header>

        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default AvatarTooltip;
