import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  google,
  googleAdBanners,
  driveTrafficAndBoostConve,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[22px] box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-left text-smi text-darkgray font-paragraph-minus-1 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[31px] hover:pl-[22px] hover:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[19px] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[19px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[5px] hover:px-0 hover:pb-0 hover:box-border">
          <img
            className="w-[34px] h-[34px] relative overflow-hidden shrink-0 flex gap-[0px] z-[1] hover:flex hover:w-[34px] hover:h-[34px] hover:gap-[0px]"
            alt=""
            src={google}
          />
        </div>
        <div className=" relative  h-auto z-[1] hover:text-smi hover:text-left hover:h-auto">
          <p className="m-0 text-slate-700">
            <b className="[text-decoration:underline]">{googleAdBanners}</b>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">{driveTrafficAndBoostConve}</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  google: PropTypes.string,
  googleAdBanners: PropTypes.string,
  driveTrafficAndBoostConve: PropTypes.string,
};

export default FrameComponent3;
