import { useMemo } from "react";
import PropTypes from "prop-types";

const CreditPack = ({
  className = "",
  prop,
  buyOurCreditPack,
  propAlignSelf,
  propWidth,
}) => {
  const creditPackStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-center text-4xl text-black font-paragraph-minus-1 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-px hover:pl-0 hover:box-border hover:max-w-full ${className}`}
      style={creditPackStyle}
    >
      <div className="w-[421px] flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[421px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <div className="h-full w-full absolute !m-[0] right-[0px] bottom-[-9px] left-[0px] rounded-21xl bg-gainsboro-100 flex z-[1] hover:bg-gainsboro-100 hover:flex hover:w-full hover:h-full hover:rounded-21xl" />
        <div className="flex-1 rounded-21xl bg-black flex flex-row items-start justify-start pt-[26px] px-[41px] pb-[19px] box-border gap-[42px] max-w-full h-auto [transform:rotate(0deg)] z-[2] hover:bg-black hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[42px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-21xl hover:pt-[26px] hover:px-[41px] hover:pb-[19px] hover:box-border hover:max-w-full mq800:flex-wrap mq450:gap-[21px]">
          <div className="w-8 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-8 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
            <div className="self-stretch relative font-semibold flex w-auto h-auto z-[3] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-center hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lg">
              {prop}
            </div>
          </div>
          <div className="relative font-semibold text-white flex w-auto [align-self:unset] h-auto z-[3] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-center hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-lg">
            {buyOurCreditPack}
          </div>
        </div>
      </div>


    </div>
  );
};



CreditPack.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  buyOurCreditPack: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CreditPack;
