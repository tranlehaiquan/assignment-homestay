import React from 'react';
import Slider, { Settings } from 'react-slick';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    '@global': {
      '.slick-next:before, .slick-prev:before': {
        fontSize: 40,
      },

      '.slick-next, .slick-prev': {
        width: 40,
        height: 40,
        zIndex: 2,
      },

      '.slick-prev': {
        left: 0,
      },

      '.slick-next': {
        right: 0,
      },
    },
  },
}));

interface CustomSliderProps extends Settings {
  className?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  className,
  ...restProps
}) => {
  const classes = useStyles();
  const settingSlider: Settings = {};

  const mergeSetting = { ...settingSlider, ...restProps };

  return (
    <Slider className={clsx(className, classes.root)} {...mergeSetting}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
