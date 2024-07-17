import PropTypes from "prop-types";

const HighlightRect = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[211px] h-[55px] flex flex-row items-start justify-start gap-[0px] z-[1] hover:flex hover:w-[211px] hover:h-[55px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start ${className}`}
    >
      <div className="self-stretch flex-1 relative rounded-3xs bg-highlighter-light-green flex h-auto hover:bg-highlighter-light-green hover:flex hover:flex-1 hover:self-stretch hover:h-auto hover:rounded-3xs" />
    </div>
  );
};

HighlightRect.propTypes = {
  className: PropTypes.string,
};

export default HighlightRect;
