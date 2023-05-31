import ProfileAvatar from './ProfileAvatar';
import UsernameProfile from './UsernameProfile';

export default function LoginScreenProfile() {
  return (
    <div>
      <ProfileAvatar
        width="100px"
        height="100px"
      />
      <UsernameProfile />
    </div>
  );
}
