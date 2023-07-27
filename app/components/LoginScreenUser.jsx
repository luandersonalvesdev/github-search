import UserAvatar from './UserAvatar';
import UserName from './UserName';

export default function LoginScreenProfile() {
  return (
    <div className="text-center mb-4 flex flex-col items-center">
      <UserAvatar
        width="135px"
        height="135px"
      />
      <UserName />
    </div>
  );
}
