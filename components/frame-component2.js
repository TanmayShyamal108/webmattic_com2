import HighlightRect1 from "./highlight-rect1";
import FrameComponent3 from "./frame-component3";
import HighlightRect from "./highlight-rect";
import CreditPack from "./credit-pack";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-left text-14xl text-slate-700 font-paragraph-minus-1 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full ${className}`}
    >
      <HighlightRect1
        propTop="unset"
        propLeft="573px"
        propWidth="267px"
        propHeight="auto"
        propMargin="0 !important"
        propBottom="527px"
      />
      <img
        className="h-[81px] w-[77px] absolute !m-[0] top-[1731px] left-[190px] object-cover mix-blend-darken flex hover:mix-blend-darken hover:flex hover:w-[77px] hover:h-[81px]"
        alt=""
        src="/wavepattern@2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[977px] box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-black hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[977px] hover:box-border hover:max-w-full mq800:pb-[113px] mq800:box-border mq1125:pb-[174px] mq1125:box-border mq1325:pb-[268px] mq1325:box-border">
        <div className="flex-1 bg-milk-light overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[135px] box-border gap-[179px] max-w-full h-auto z-[3] hover:bg-milk-light hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[179px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[135px] hover:box-border hover:max-w-full mq800:gap-[89px] mq1125:pb-6 mq1125:box-border mq450:gap-[45px] mq450:pb-5 mq450:box-border mq1325:pb-[37px] mq1325:box-border">
          <div className="self-stretch h-[1949px] relative max-w-full flex w-auto gap-[0px] items-start justify-start [transform:rotate(0deg)] text-dark-teal hover:flex hover:self-stretch hover:w-auto hover:h-[1949px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq1125:h-auto mq1125:min-h-[1949]">
            <div className="absolute top-[669px] left-[100px] [background:linear-gradient(180deg,_#eef2ff,_#e5fbff)] w-[1412px] flex flex-col items-start justify-start pt-[162px] px-[109px] pb-[63px] box-border gap-[177px] max-w-full h-auto [transform:rotate(0deg)] z-[3] hover:[background:linear-gradient(180deg,_#eef2ff,_#e5fbff)] hover:flex hover:w-[1412px] hover:h-auto hover:flex-col hover:gap-[177px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[162px] hover:px-[109px] hover:pb-[63px] hover:box-border hover:max-w-full">
              <div className="w-[619px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[619px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-0.5 hover:box-border hover:max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[40px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-[5px] hover:box-border hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[18px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <b className="relative flex font-bold w-auto [align-self:unset] h-auto z-[4] hover:font-bold hover:font-paragraph-minus-1 hover:text-14xl hover:text-left hover:text-dark-teal hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-7xl mq450:text-xl">
                        Create stunning designs On-Demand.
                      </b>
                      <div className="w-[545px] h-px relative box-border max-w-full flex z-[4] border-t-[1px] border-solid border-dark-teal border-[1px] hover:flex hover:w-[545px] hover:h-px hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-dark-teal" />
                    </div>
                  </div>
                  <div className="w-[506px] relative text-lgi text-slate-700 max-w-full h-auto z-[4] hover:text-lgi hover:text-left hover:text-slate-700  hover:w-[506px] hover:h-auto hover:max-w-full">
                    <span>{`With our `}</span>
                    <span className="font-semibold">25-Credit Pack</span>
                    <span>
                      , you can unleash your <br /> creativity and bring your vision to
                      life.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[753px] flex flex-row items-start justify-between max-w-full gap-[20px] h-auto [transform:rotate(0deg)] text-smi text-slate-700 hover:flex hover:w-[753px] hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:[transform:rotate(0deg)] hover:max-w-full mq1125:flex-wrap">
                <div className="w-[334px] flex flex-row items-start justify-start pt-[273px] pb-[15px] pr-[17px] pl-[21px] box-border relative gap-[21px] max-w-full h-auto z-[6] hover:flex hover:w-[334px] hover:h-auto hover:flex-row hover:gap-[21px] hover:items-start hover:justify-start hover:pt-[273px] hover:pb-[15px] hover:pr-[17px] hover:pl-[21px] hover:box-border hover:max-w-full mq800:flex-wrap">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover flex hover:flex hover:w-full hover:h-full"
                    alt=""
                    src="/group-4@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[7px] hover:px-0 hover:pb-0 hover:box-border">
                    <img
                      className="w-[34px] h-[34px] relative overflow-hidden shrink-0 flex gap-[0px] z-[1] hover:flex hover:w-[34px] hover:h-[34px] hover:gap-[0px]"
                      alt=""
                      src="/facebook02.svg"
                    />
                  </div>
                  <div className=" relative  min-w-[157] h-auto z-[1] hover:text-smi hover:text-left  hover:h-auto hover:min-w-[157]">
                    <p className="m-0">
                      <b className="font-paragraph-minus-1 text-slate-700">
                        <span className="[text-decoration:underline]">
                          25 Facebook Banner Ads:
                        </span>
                      </b>
                      <b className="font-paragraph-minus-1 text-slate-700">{` `}</b>
                    </p>
                    <p className="m-0">
                      <span className="font-medium font-paragraph-minus-1 text-darkgray">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-medium font-paragraph-minus-1 text-darkgray">
                        Make your social media presence impossible to ignore.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-[334px] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[26px] max-w-full h-auto z-[6] hover:bg-white hover:flex hover:w-[334px] hover:h-auto hover:flex-col hover:gap-[26px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-4 hover:box-border hover:max-w-full">
                  <img
                    className="self-stretch h-[246px] relative max-w-full overflow-hidden shrink-0 object-cover flex w-auto z-[1] hover:flex hover:self-stretch hover:w-auto hover:h-[246px]"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[26px] box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-7 hover:pl-[26px] hover:box-border">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[17px] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[17px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq800:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[9px] hover:px-0 hover:pb-0 hover:box-border">
                        <img
                          className="w-[34px] h-[34px] relative overflow-hidden shrink-0 flex gap-[0px] z-[1] hover:flex hover:w-[34px] hover:h-[34px] hover:gap-[0px]"
                          alt=""
                          src="/user.svg"
                        />
                      </div>
                      <div className=" relative  min-w-[149] h-auto z-[1] hover:text-smi hover:text-left  hover:h-auto hover:min-w-[149]">
                        <p className="m-0">
                          <span className="[text-decoration:underline]">
                            <b className="font-paragraph-minus-1">
                              25 Social Media Post Images:
                            </b>
                          </span>
                          <span className="font-medium">
                            <span className="[text-decoration:underline]">{` `}</span>
                          </span>
                        </p>
                        <p className="m-0 text-darkgray">
                          <span className="font-medium">
                            <span>&nbsp;</span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span className="font-medium">
                            <span>
                              Engage your audience with eye-catching visuals.
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-55xl text-slate-700 hover:flex hover:w-full hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
              <div className="h-[473px] w-[473px] absolute !m-[0] bottom-[-106px] left-[293px] [filter:blur(300px)] rounded-[50%] bg-paleturquoise-100 flex z-[2] hover:bg-paleturquoise-100 hover:flex hover:w-[473px] hover:h-[473px] hover:[filter:blur(300px)]" />
              <div className="flex-1 bg-milk flex flex-row items-start justify-start pt-px pb-10 pr-[31px] pl-0 box-border gap-[25px] max-w-full h-auto [transform:rotate(0deg)] hover:bg-milk hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[25px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:pb-10 hover:pr-[31px] hover:pl-0 hover:box-border hover:max-w-full mq1325:flex-wrap mq1325:pl-5 mq1325:pr-5 mq1325:box-border">
                <div className="h-[627px] w-[706px] relative min-w-[706] max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[706px] hover:h-[627px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[706] hover:max-w-full mq800:min-w-full mq1325:flex-1">
                  <div className="absolute top-[0px] left-[0px] w-full h-full max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-full hover:h-full hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                    <div className="absolute top-[0px] left-[0px] w-[622px] flex flex-row items-start justify-start max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[622px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <img
                        className="h-[622px] flex-1 relative max-w-full overflow-hidden flex z-[1] hover:flex hover:flex-1 hover:h-[622px] hover:max-w-full"
                        alt=""
                        src="/dartboardcircles.svg"
                      />
                      <div className="absolute !m-[0] right-[-37px] bottom-[247px] font-black flex w-auto [align-self:unset] h-auto z-[2] hover:font-black hover:font-paragraph-minus-1 hover:text-55xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-40xl mq450:text-25xl">
                        Just Rs.2999/-
                      </div>
                    </div>
                    <div className="absolute top-[202px] left-[97px] text-lg leading-[26px] text-dark-teal flex w-[609px] h-auto z-[2] hover:text-lg hover:leading-[26px] hover:text-left hover:text-dark-teal hover:flex hover:w-[609px] hover:h-auto">
                      <p className="m-0">
                        <span className="font-paragraph-minus-1">{`Unlock Unlimited `}</span>
                        <span className="font-semibold font-paragraph-minus-1">
                          “Customer Responses”
                        </span>
                        
                        <span>{` with Our `}</span>
                        <p className="m-0">{`25-Credit Pack for `}</p>
                      </p>
                      
                    </div>
                    <div className="absolute top-[387px] left-[97px] text-3xl leading-[28px]  h-auto z-[2] text-steelblue hover:text-3xl hover:leading-[28px] hover:text-left hover:h-auto mq450:text-lg mq450:leading-[22px]">
                      <p className="m-0">
                        <span className="font-medium font-paragraph-minus-1 text-steelblue">{`Exclusive Offer for the `}</span>
                        <span className="font-black font-paragraph-minus-1">
                          <span className="text-slate-700">
                            First 30 Customers Only
                          </span>
                        </span>
                        <span>
                          <span className="font-black font-paragraph-minus-1">{` – `}</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="[text-decoration:underline] font-medium">
                            Act Now to Secure Your Spot!!
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[558px] left-[100px] flex flex-row items-start justify-start py-[25px] pr-[74px] pl-[75px] box-border whitespace-nowrap w-auto [align-self:unset] h-auto gap-[0px] z-[3] text-base text-dark-teal hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-[25px] hover:pr-[74px] hover:pl-[75px] hover:box-border hover:whitespace-nowrap">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-milk box-border flex border-[1px] border-solid border-dark-teal hover:bg-milk hover:flex hover:w-full hover:h-full hover:rounded-3xs hover:box-border hover:border-[1px] hover:border-solid hover:border-dark-teal" />
                    <b className="relative flex min-w-[96] font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-base hover:text-left hover:text-dark-teal hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[96]">
                      GET IT NOW
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[114px] px-0 pb-0 box-border min-w-[487] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[114px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[487] hover:max-w-full mq800:min-w-full">
                  <div className="self-stretch h-[736px] relative flex w-auto gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-[736px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="absolute top-[11px] left-[25px] [filter:blur(300px)] rounded-[50%] bg-crimson-100 w-[725px] h-[725px] flex z-[1] hover:bg-crimson-100 hover:flex hover:w-[725px] hover:h-[725px] hover:[filter:blur(300px)]" />
                    <div className="absolute top-[0px] left-[0px] w-[672.8px] h-[499px] flex z-[3] hover:flex hover:w-[672.8px] hover:h-[499px]">
                      <div className="absolute top-[127.75px] left-[0px] [filter:blur(30px)] bg-darkslategray-300 w-[569.2px] h-[381px] [transform:rotate(-12.97deg)] [transform-origin:0_0] flex hover:bg-darkslategray-300 hover:flex hover:w-[569.2px] hover:h-[381px] hover:[transform:rotate(-12.97deg)] hover:[filter:blur(30px)]" />
                      <div className="absolute top-[102.21px] left-[48.7px] bg-salmon w-[569.2px] h-[381px] [transform:rotate(-7.42deg)] [transform-origin:0_0] flex z-[1] hover:bg-salmon hover:flex hover:w-[569.2px] hover:h-[381px] hover:[transform:rotate(-7.42deg)]" />
                      <img
                        className="absolute top-[39px] left-[76px] w-[596.8px] h-[422.3px] object-contain flex z-[2] hover:flex hover:w-[596.8px] hover:h-[422.3px]"
                        alt=""
                        src="/image-13@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1126.1px] left-[1139px] w-[373px] h-[804.8000000000001px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[373px] hover:h-[804.8000000000001px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="absolute top-[0px] left-[0px] w-[675px] h-[742.9px] flex z-[4] hover:flex hover:w-[675px] hover:h-[742.9px]"
                alt=""
                src="/girlsmiling.svg"
              />
              <img
                className="absolute top-[681.9px] left-[190.1px] w-[224.5px] h-[122.9px] object-contain bg-milk-light flex z-[5] hover:bg-milk-light hover:flex hover:w-[224.5px] hover:h-[122.9px]"
                alt=""
                src="/ellipse-1974.svg"
              />
            </div>
            <div className="absolute top-[1597px] left-[210px] bg-white w-[334px] h-[352px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[26px] z-[6] text-smi text-darkgray hover:bg-white hover:flex hover:w-[334px] hover:h-[352px] hover:flex-col hover:gap-[26px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-4 hover:box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover flex w-auto z-[1] hover:flex hover:self-stretch hover:w-auto hover:flex-1"
                alt=""
                src="/mask-group@2x.png"
              />
              <FrameComponent3
                google="/google.svg"
                googleAdBanners="25 Google Ad Banners: "
                driveTrafficAndBoostConve="Drive traffic and boost conversions with compelling ad banners."
              />
            </div>
            <div className="absolute top-[1597px] left-[628px] bg-white w-[334px] h-[352px] flex flex-col items-end justify-start pt-0 px-0 pb-4 box-border gap-[26px] z-[6] hover:bg-white hover:flex hover:w-[334px] hover:h-[352px] hover:flex-col hover:gap-[26px] hover:items-end hover:justify-start hover:pt-0 hover:px-0 hover:pb-4 hover:box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover flex w-auto z-[1] hover:flex hover:self-stretch hover:w-auto hover:flex-1"
                alt=""
                src="/mask-group@2x.png"
              />
              <FrameComponent3
                google="/shoppingcartcheck02.svg"
                googleAdBanners="25 Ecommerce Ads/ Cards:"
                driveTrafficAndBoostConve="Showcase your products like never before."
              />
            </div>
          </div>
          <div className="w-[1428px] flex flex-row items-start justify-center pt-0 px-5 pb-[621px] box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-lgi hover:flex hover:w-[1428px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:pt-0 hover:px-5 hover:pb-[621px] hover:box-border hover:max-w-full mq800:pb-[171px] mq800:box-border mq1325:pb-[263px] mq1325:box-border">
            <div className="w-[1010px] flex flex-col items-start justify-start pt-[177px] px-0 pb-0 box-border relative gap-[81px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1010px] hover:h-auto hover:flex-col hover:gap-[81px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[177px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full mq800:gap-[20px] mq800:pt-[49px] mq800:box-border mq1125:gap-[40px] mq1125:pt-[75px] mq1125:box-border mq1325:pt-[115px] mq1325:box-border">
              <img
                className="w-[99px] h-[3px] absolute !m-[0] top-[0px] right-[414px] flex box-border border-[3px] border-solid border-milk hover:flex hover:w-[99px] hover:h-[3px] hover:box-border hover:border-[3px] hover:border-solid hover:border-milk"
                alt=""
                src="/line-29.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[103px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-[103px] hover:box-border hover:max-w-full mq800:pl-[51px] mq800:box-border mq450:pl-5 mq450:box-border">
                <div className="w-[671px] flex flex-col items-start justify-start gap-[15px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[671px] hover:h-auto hover:flex-col hover:gap-[15px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                    <div className="relative font-semibold flex w-auto [align-self:unset] h-auto hover:font-semibold hover:font-paragraph-minus-1 hover:text-lgi hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                      WHY WORK WITH US?
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto gap-[-434px] [transform:rotate(0deg)] text-center text-21xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[-434px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[5px] hover:px-0 hover:pb-0 hover:box-border hover:max-w-full">
                      <div className=" text-black self-stretch relative font-extrabold flex w-auto h-auto z-[1] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-center hover:text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto mq800:text-13xl mq450:text-5xl">
                        We provide Designs that Convert.
                      </div>
                    </div>
                    {/* <div className="h-[61px] w-[441px] relative bg-highlighter-light-green max-w-full flex ml-[-434px] hover:bg-highlighter-light-green hover:flex hover:w-[441px] hover:h-[61px] hover:max-w-full " /> */}
                  
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-14 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-base hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-14 hover:box-border hover:max-w-full mq1125:pl-7 mq1125:pr-7 mq1125:box-border">
                <div className="w-[815px] relative leading-[24px]  shrink-0 max-w-full h-auto hover:text-base hover:leading-[24px] hover:text-left hover:text-black  hover:w-[815px] hover:h-auto hover:max-w-full">
                  <p className="m-0">{`We have been designing, developing for more than a decade now. Webmattic started in late Oct’2011. And now with over a decade of expertise in digital marketing, design, and development, Webmattic serves as a dedicated in-house team to many brands and corporate team. This, minus the prevalent exorbitant costs. `}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    <span>{`Our aim is to drive your business growth by offering end-to-end digital solutions, including `}</span>
                    <b className="font-paragraph-minus-1">
                      <span className="[text-decoration:underline]">
                        on-demand custom graphic designs
                      </span>
                    </b>
                    <b className="font-paragraph-minus-1">,</b>
                    <span className="font-paragraph-minus-1">
                      {" "}
                      web and mobile app development, plus high-conversion
                      digital marketing strategies.
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[51px] pb-[55px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-4xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-[51px] hover:pb-[55px] hover:box-border hover:max-w-full mq800:pb-9 mq800:box-border mq1125:pl-[25px] mq1125:pr-[25px] mq1125:box-border mq450:pb-[23px] mq450:box-border">
                <div className="w-[824px] flex flex-col items-start justify-start gap-[25px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[824px] hover:h-auto hover:flex-col hover:gap-[25px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                <div className="self-stretch rounded-xl bg-white box-border flex flex-col items-start justify-start pt-[39px] px-[74px] pb-[43px] gap-[51px] max-w-full w-auto h-auto border-[2px] border-dashed border-gainsboro-200 hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[51px] hover:items-start hover:justify-start hover:rounded-xl hover:pt-[39px] hover:px-[74px] hover:pb-[43px] hover:box-border hover:max-w-full hover:border-[2px] hover:border-dashed hover:border-gainsboro-200 mq800:pt-[25px] mq800:pb-7 mq800:box-border mq1125:pl-[37px] mq1125:pr-[37px] mq1125:box-border mq450:gap-[25px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[28px] w-auto h-auto [transform:rotate(0deg)] text-21xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[28px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                      <div className="flex flex-row items-start justify-start py-0 px-px box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-px hover:box-border">
                        <div className="relative font-extrabold flex w-auto [align-self:unset] h-auto z-[1] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-13xl mq450:text-5xl">
                          If you want to:
                        </div>
                      </div>
                      <div className="self-stretch h-px relative box-border flex w-auto z-[1] border-t-[1px] border-solid border-lightgray border-[1px] hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray" />
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-[59px] pb-[22px] box-border max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-[59px] hover:pb-[22px] hover:box-border hover:max-w-full mq800:pl-[29px] mq800:pr-[29px] mq800:box-border">
                      <div className="w-[545px] flex flex-col items-start justify-start gap-[45px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[545px] hover:h-auto hover:flex-col hover:gap-[45px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[22px]">
                        <div className="flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[5px] hover:box-border hover:max-w-full">
                          <div className="flex flex-row items-start justify-start relative max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                            <div className="h-[55px] w-[243px] absolute !m-[0] top-[-14px] left-[-5px] rounded-3xs bg-highlighter-dark flex z-[1] hover:bg-highlighter-dark hover:flex hover:w-[243px] hover:h-[55px] hover:rounded-3xs" />
                            <div className="relative font-semibold flex w-auto [align-self:unset] h-auto z-[2] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-lg">
                              Improve conversions on your landing pages
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[31px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[15px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-[5px] hover:box-border hover:max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                              <div className="h-[55px] w-[334px] absolute !m-[0] top-[-14px] left-[-5px] rounded-3xs bg-highlighter-dark flex z-[1] hover:bg-highlighter-dark hover:flex hover:w-[334px] hover:h-[55px] hover:rounded-3xs" />
                              <div className="relative font-semibold flex w-auto [align-self:unset] h-auto z-[2] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-lg">
                                Increase average order value in your online
                                store
                              </div>
                            </div>
                          </div>
                          <div className="w-[383px] h-[55px] relative max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[383px] hover:h-[55px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                            <HighlightRect1 />
                            <div className="absolute top-[14px] left-[4px] font-semibold flex h-auto z-[2] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:h-auto mq450:text-lg">
                              Improve retention in your web app
                            </div>
                          </div>
                          <div className="w-[382px] h-[55px] relative max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[382px] hover:h-[55px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                            <HighlightRect />
                            <div className="absolute top-[14px] left-[4px] font-semibold flex h-auto z-[2] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:h-auto mq450:text-lg">
                              Save on expensive designer costs
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CreditPack
                      prop="👉"
                      buyOurCreditPack="Buy our Credit Pack"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-center text-2xs text-dark-teal hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[21px] hover:pl-5 hover:box-border hover:max-w-full">
                    <div className="w-[457px] flex flex-row flex-wrap items-start justify-start gap-[9px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[457px] hover:h-auto hover:flex-row hover:flex-wrap hover:gap-[9px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <img
                        className="h-[51px] w-[123px] relative object-cover flex hover:flex hover:w-[123px] hover:h-[51px]"
                        alt=""
                        src="/testimonialavatar@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[211] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-2 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[211] hover:max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[5px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                          <b className="relative flex font-bold w-auto [align-self:unset] h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-2xs hover:text-center hover:text-dark-teal hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">{`Kjersti Halvosen, Shikhar Bhaduria, and 22 others `}</b>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-px hover:box-border hover:max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-center gap-[8px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:max-w-full mq450:flex-wrap">
                              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[146] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0.5 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[146]">
                                <div className="relative flex w-auto [align-self:unset] h-auto hover:font-paragraph-minus-1 hover:text-2xs hover:text-center hover:text-dark-teal hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                                  are already profiting, since our association.
                                </div>
                              </div>
                              <i className="relative flex min-w-[92] italic w-auto [align-self:unset] h-auto hover:flex hover:italic hover:font-paragraph-minus-1 hover:text-2xs hover:text-center hover:text-dark-teal hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[92]">
                                Read their stories
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[159px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[159px] hover:box-border hover:max-w-full">
                <img
                  className="w-[935px] relative max-h-full object-cover mix-blend-multiply max-w-full flex hover:mix-blend-multiply hover:flex hover:w-[935px] hover:max-w-full"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
              <div className="w-[560px] flex flex-col items-start justify-start gap-[53px] max-w-full h-auto [transform:rotate(0deg)] text-2xs hover:flex hover:w-[560px] hover:h-auto hover:flex-col hover:gap-[53px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[26px]">
                <div className="w-[446px] flex flex-col items-start justify-start gap-[17px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[446px] hover:h-auto hover:flex-col hover:gap-[17px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                  <div className="flex flex-col items-start justify-start gap-[6px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[6px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-0.5 hover:box-border">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 flex gap-[0px] z-[6] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                        alt=""
                        src="/bookopen01.svg"
                      />
                    </div>
                    <b className="relative flex font-bold w-auto [align-self:unset] h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">{`1.CASE STUDY - HOME & DECOR`}</b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-14xl text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-px hover:box-border hover:max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <b className="flex-1 relative flex max-w-full font-bold h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-14xl hover:text-left hover:text-slate-700 hover:flex hover:flex-1 hover:h-auto hover:max-w-full mq800:text-7xl mq450:text-xl">
                        Lorem ipsum dolor sit amet consectetur.
                      </b>
                      <div className="h-[1113.1000000000004px] w-[1183px] absolute !m-[0] right-[-857px] bottom-[-935.1px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[1183px] hover:h-[1113.1000000000004px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                        <img
                          className="absolute top-[20.2px] left-[402.9px] w-[347.3px] h-[410.5px] object-contain bg-crimson-200 flex [filter:blur(350px)] z-[7] hover:bg-crimson-200 hover:flex hover:w-[347.3px] hover:h-[410.5px] hover:[filter:blur(350px)]"
                          alt=""
                          src="/vector2.svg"
                        />
                        <div className="absolute top-[312px] left-[245.3px] w-[535.3999999999999px] h-[496.3000000000002px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[535.3999999999999px] hover:h-[496.3000000000002px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full bg-teal flex [filter:blur(350px)] z-[6] hover:bg-teal hover:flex hover:w-full hover:h-full hover:[filter:blur(350px)]"
                            alt=""
                            src="/home-decor-right-icon.svg"
                          />
                          <img
                            className="absolute top-[20px] left-[217.2px] w-[104.4px] h-[90px] flex z-[8] hover:flex hover:w-[104.4px] hover:h-[90px]"
                            alt=""
                            src="/arrow2.svg"
                          />
                        </div>
                        <div className="absolute top-[0px] left-[629px] w-[753px] h-[1082px] flex z-[8] hover:flex hover:w-[753px] hover:h-[1082px]">
                          <div className="absolute h-[1079px] top-[0px] bottom-[3px] left-[54px] bg-dimgray w-[699px] flex hover:bg-dimgray hover:flex hover:w-[699px] hover:h-[1079px]" />
                          <img
                            className="absolute top-[27px] left-[0px] w-[708px] h-[1055px] object-cover flex z-[1] hover:flex hover:w-[708px] hover:h-[1055px]"
                            alt=""
                            src="/home--decor-1@2x.png"
                          />
                        </div>
                        <div className="absolute top-[464px] left-[0px] w-[616.4px] h-[649.1px] flex z-[7] hover:flex hover:w-[616.4px] hover:h-[649.1px]">
                          <img
                            className="absolute top-[34.7px] left-[0px] w-[532.1px] h-[614.4px] object-contain bg-silver flex [filter:blur(100px)] hover:bg-silver hover:flex hover:w-[532.1px] hover:h-[614.4px] hover:[filter:blur(100px)]"
                            alt=""
                            src="/rectangle-2082.svg"
                          />
                          <img
                            className="absolute top-[0px] left-[16px] w-[600.3px] h-[632.5px] object-contain flex z-[1] hover:flex hover:w-[600.3px] hover:h-[632.5px]"
                            alt=""
                            src="/image-24@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[433px] flex flex-row items-start justify-start pt-0 px-px pb-[21px] box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-slate-700 hover:flex hover:w-[433px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-px hover:pb-[21px] hover:box-border hover:max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[25px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                    <div className="self-stretch relative flex w-auto h-auto hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                      Lorem ipsum dolor sit amet consectetur. Non enim mauris
                      integer consequat nisl vel amet urna. Lectus a dictum
                      morbi mauris amet. Suspendisse cursus ultrices id sed nec
                      elit. Viverra scelerisque donec in tempus est lectus
                      neque.
                    </div>
                    <div className="self-stretch relative flex w-auto h-auto hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                      Lorem ipsum dolor sit amet consectetur. Non enim mauris
                      integer consequat nisl vel amet urna. Lectus a dictum
                      morbi mauris amet. Suspendisse cursus ultrices id sed nec
                      elit. Viverra scelerisque donec in tempus est lectus
                      neque.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-xs text-dark-teal font-lora hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)]">
                  <i className="relative italic w-auto [align-self:unset] h-auto z-[8]  hover:italic hover:font-lora hover:text-xs hover:text-left hover:text-dark-teal hover:w-auto hover:[align-self:unset] hover:h-auto">
                    <p className="m-0">{`Home & Decor’s transition from a cluttered `}</p>
                    <p className="m-0">{`layout to an refreshing, luxurious and `}</p>
                    <p className="m-0">elegant an presentation .</p>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-2xs hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border hover:max-w-full">
            <div className="w-[1288px] flex flex-col items-end justify-start gap-[181px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1288px] hover:h-auto hover:flex-col hover:gap-[181px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[45px] mq450:gap-[23px] mq1325:gap-[90px]">
              <div className="w-[1205px] flex flex-row items-start justify-end py-0 px-3 box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[1205px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-3 hover:box-border hover:max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[119px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[119px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[30px] mq1325:gap-[59px]">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[40px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[40px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[20px] mq1125:flex-wrap">
                    <div className="w-[446px] flex flex-col items-start justify-end pt-0 px-0 pb-[34px] box-border min-w-[446] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[446px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[34px] hover:box-border hover:min-w-[446] hover:max-w-full mq800:min-w-full mq1125:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[53px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[26px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[17px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                          <div className="flex flex-col items-start justify-start gap-[7px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[7px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                            <div className="flex flex-row items-start justify-start py-0 px-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-1 hover:box-border">
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 flex gap-[0px] z-[6] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                                alt=""
                                src="/bookopen01.svg"
                              />
                            </div>
                            <b className="relative flex whitespace-pre-wrap font-bold w-auto [align-self:unset] h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                              2.CASE STUDY - IGNITE PREMIUM WATER PURIFIER
                            </b>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-14xl text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-px hover:box-border hover:max-w-full">
                            <b className="flex-1 relative flex max-w-full font-bold h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-14xl hover:text-left hover:text-slate-700 hover:flex hover:flex-1 hover:h-auto hover:max-w-full mq800:text-7xl mq450:text-xl">
                              Lorem ipsum dolor sit amet consectetur.
                            </b>
                          </div>
                        </div>
                        <div className="w-[433px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-slate-700 hover:flex hover:w-[433px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-px hover:box-border hover:max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[25px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                            <div className="self-stretch relative flex w-auto h-auto hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                              Lorem ipsum dolor sit amet consectetur. Non enim
                              mauris integer consequat nisl vel amet urna.
                              Lectus a dictum morbi mauris amet. Suspendisse
                              cursus ultrices id sed nec elit. Viverra
                              scelerisque donec in tempus est lectus neque.
                            </div>
                            <div className="self-stretch relative flex w-auto h-auto hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                              Lorem ipsum dolor sit amet consectetur. Non enim
                              mauris integer consequat nisl vel amet urna.
                              Lectus a dictum morbi mauris amet. Suspendisse
                              cursus ultrices id sed nec elit. Viverra
                              scelerisque donec in tempus est lectus neque.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[494px] flex-1 relative min-w-[451] max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-[494px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[451] hover:max-w-full mq800:min-w-full">
                      <img
                        className="absolute top-[30px] left-[0px] w-[347.3px] h-[410.5px] object-contain bg-crimson-200 flex [filter:blur(350px)] z-[6] hover:bg-crimson-200 hover:flex hover:w-[347.3px] hover:h-[410.5px] hover:[filter:blur(350px)]"
                        alt=""
                        src="/water-purifier-image-item.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[347px] w-[347.3px] h-[410.5px] object-contain bg-crimson-200 flex [filter:blur(350px)] z-[7] hover:bg-crimson-200 hover:flex hover:w-[347.3px] hover:h-[410.5px] hover:[filter:blur(350px)]"
                        alt=""
                        src="/water-purifier-image-item.svg"
                      />
                      <img
                        className="absolute top-[113px] left-[203px] w-[381px] h-[381px] object-contain flex z-[8] hover:flex hover:w-[381px] hover:h-[381px]"
                        alt=""
                        src="/image-25@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] text-base hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[3px] hover:box-border">
                    <div className="flex flex-row items-start justify-start gap-[15px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[15px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
                        <b className="relative [text-decoration:underline] flex font-bold w-auto [align-self:unset] h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-base hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                          READ MORE CASE-STUDIES
                        </b>
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[6] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                        alt=""
                        src="/linksquare.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[68px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-14xl text-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[68px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[34px] mq450:gap-[17px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                  <b className="relative flex font-bold w-auto [align-self:unset] h-auto hover:font-bold hover:font-paragraph-minus-1 hover:text-14xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-7xl mq450:text-xl">
                    Success Stories
                  </b>
                </div>
                <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start pt-[63px] px-[23px] pb-[57px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:bg-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:rounded-xl hover:pt-[63px] hover:px-[23px] hover:pb-[57px] hover:box-border hover:max-w-full">
                  <img
                    className="w-[1221px] relative max-h-full object-cover mix-blend-hard-light max-w-full flex z-[6] hover:mix-blend-hard-light hover:flex hover:w-[1221px] hover:max-w-full"
                    alt=""
                    src="/image-26@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute !m-[0] right-[652px] bottom-[721px] text-lgi font-semibold flex w-auto [align-self:unset] h-auto z-[5] hover:font-semibold hover:font-paragraph-minus-1 hover:text-lgi hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
        WHY WORK WITH US?
      </div>
      <div className="absolute !m-[0] bottom-[650px] left-[calc(50%_-_290px)] text-21xl font-extrabold flex w-auto [align-self:unset] h-auto z-[5] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-13xl mq450:text-5xl">
        So, Why Choose Webmattic?
      </div> */}
      <b className="w-[309px] absolute !m-[0] right-[355px] bottom-[342px] text-base leading-[24px] flex font-bold h-auto z-[5] hover:font-bold hover:font-paragraph-minus-1 hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:w-[309px] hover:h-auto">
        Money back guarantee
      </b>
      <img
        className="h-6 w-6 absolute !m-[0] right-[683px] bottom-[343px] overflow-hidden shrink-0 flex gap-[0px] z-[6] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
        alt=""
        src="/moneynotfound01.svg"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
