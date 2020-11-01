import React from 'react';
import Room from '../../types/room';

interface SpecialRoomProps extends Room {
  className?: string;
}

const SpecialRoom: React.FC<SpecialRoomProps> = ({ className }) => {
  return <div className={className}></div>;
};

export default SpecialRoom;
