import React from 'react';
import useWindowDimensions from './useWindowDimensions';
import MobileHeader from './MobileHeader';
import Header from './Header';

const ResponsiveComponent = ({ toggle, theme }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 1280;

  return (
    <div>
      {width < breakpoint ? <MobileHeader /> : <Header toggle={toggle} theme={theme}/>}
    </div>
  );
};

export default ResponsiveComponent;
