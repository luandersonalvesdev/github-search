import UserAvatar from './UserAvatar';
import UserName from './UserName';

export default function LoginScreenProfile() {
  return (
    <div className="text-center my-3 flex flex-col items-center">
      <UserAvatar
        width="125px"
        height="125px"
      />
      <UserName />
    </div>
  );
}
