import { useMemo } from "react";
import PropTypes from "prop-types";

const ApplicationBg = ({ className = " z-[2]", propWidth, propRight }) => {
  const applicationBgStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div
      className={`w-[824px] h-[564px] !m-[0] absolute top-[0px] right-[32px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full gap-[0px] z-[2] hover:flex hover:w-[824px] hover:h-[564px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:max-w-full ${className}`}
      style={applicationBgStyle}
    >
      <div className=" z-[2] self-stretch flex-1 relative rounded-xl bg-white box-border max-w-full flex h-auto border-[2px] border-dashed border-gainsboro-200 hover:bg-white hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:rounded-xl hover:box-border hover:max-w-full hover:border-[2px] hover:border-dashed hover:border-gainsboro-200" />
    </div>
  );
};

ApplicationBg.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default ApplicationBg;
