import { useMemo } from "react";
import PropTypes from "prop-types";

const HighlightRect1 = ({
  className = "",
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propMargin,
  propBottom,
}) => {
  const highlightRectStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      margin: propMargin,
      bottom: propBottom,
    };
  }, [propTop, propLeft, propWidth, propHeight, propMargin, propBottom]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[203px] h-[55px] flex flex-row items-start justify-start gap-[0px] z-[1] hover:flex hover:w-[203px] hover:h-[55px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start ${className}`}
      style={highlightRectStyle}
    >
      <div className="self-stretch flex-1 relative rounded-3xs bg-highlighter-dark flex h-auto hover:bg-highlighter-dark hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:rounded-3xs" />
    </div>
  );
};

HighlightRect1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propMargin: PropTypes.any,
  propBottom: PropTypes.any,
};

export default HighlightRect1;
