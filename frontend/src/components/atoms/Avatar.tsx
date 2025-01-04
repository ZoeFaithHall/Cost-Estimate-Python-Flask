interface AvatarProps {
    src: string;
    alt: string;
  }
  
  const Avatar = ({ src, alt }: AvatarProps) => {
    return (
      <img
        src={src}
        alt={alt}
        className="w-14 h-14 rounded-full border border-gray-300 object-cover"
      />
    );
  };
  
  export default Avatar;