interface DefaultAvatarProps {
  firstName: string;
  lastName?: string;
  size?: number;
}

const DefaultAvatar = ({
  firstName,
  lastName = "",
  size = 64,
}: DefaultAvatarProps) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`
    .toUpperCase()
    .trim();

  return (
    <div
      className="flex items-center justify-center rounded-full bg-gray-700 text-white font-semibold select-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
      }}
    >
      {initials || "?"}
    </div>
  );
};

export default DefaultAvatar;