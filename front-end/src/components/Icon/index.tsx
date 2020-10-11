import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from 'icomoon-react';
import useIcoMoon from '../../utils/useIcoMoon';

interface IconProps {
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  color = '',
  size = '100%',
  icon,
  className = '',
}) => {
  const iconSet = useIcoMoon();
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  className: '',
  color: '',
  size: '100%',
};

export default Icon;
