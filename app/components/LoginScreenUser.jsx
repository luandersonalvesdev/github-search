import UserAvatar from './UserAvatar';
import UserName from './UserName';

export default function LoginScreenProfile() {
  return (
    <div>
      <UserAvatar
        width="100px"
        height="100px"
      />
      <UserName />
    </div>
  );
}
