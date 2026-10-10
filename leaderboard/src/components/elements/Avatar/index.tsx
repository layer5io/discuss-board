import React from 'react';

interface AvatarProps {
  image: string | null;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, className }) => {
  return (
    <div className="avatar">
      <div className={[`rounded-full`, className].join(' ')}>
        <img src={image!} alt="profile" />
      </div>
    </div>
  );
};

export default Avatar;
