import ApplicationBg from "./application-bg";
import HighlightRect1 from "./highlight-rect1";
import CreditPack from "./credit-pack";
import PropTypes from "prop-types";

const Guarantee = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute top-[8782px] left-[0px] flex flex-row items-start justify-start max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-left text-base text-slate-700 font-paragraph-minus-1 hover:flex hover:w-full hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full ${className}`}
    >

      <img
        className="h-[605.7px] w-[503.4px] absolute !m-[0] top-[618px] right-[-149.4px] bg-mistyrose flex [filter:blur(300px)] z-[1] hover:bg-mistyrose hover:flex hover:w-[503.4px] hover:h-[605.7px] hover:[filter:blur(300px)]"
        alt=""
        src="/guarantee-item.svg"
      />
      <img
        className="h-[605.7px] w-[503.4px] absolute !m-[0] top-[394px] left-[-82px] bg-aliceblue flex [filter:blur(300px)] z-[1] hover:bg-aliceblue hover:flex hover:w-[503.4px] hover:h-[605.7px] hover:[filter:blur(300px)]"
        alt=""
        src="/guarantee-item1.svg"
      />
       
      <div className="h-[2211px] flex-1 [background:linear-gradient(180deg,_rgba(255,_248,_223,_0),_rgba(255,_255,_255,_0.2)),_#fefdf8] flex flex-col items-end justify-start pt-[421px] px-[69px] pb-0 box-border relative max-w-full gap-[0px] [transform:rotate(0deg)] hover:[background:linear-gradient(180deg,_rgba(255,_248,_223,_0),_rgba(255,_255,_255,_0.2)),_#fefdf8] hover:flex hover:flex-1 hover:h-[2211px] hover:flex-col hover:gap-[0px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[421px] hover:px-[69px] hover:pb-0 hover:box-border hover:max-w-full mq800:h-auto mq1325:pl-[34px] mq1325:pr-[34px] mq1325:box-border">
        <img
          className="w-[83px] h-[43px] absolute !m-[0] top-[-8px] left-[714px] object-contain bg-milk-light flex z-[6] hover:bg-milk-light hover:flex hover:w-[83px] hover:h-[43px]"
          alt=""
          src="/guarantee-shape.svg"
        />
        {/* <div>
          <div className=" !m-[0] right-[652px] bottom-[721px] text-lgi font-semibold flex w-auto [align-self:unset] h-auto z-[5] hover:font-semibold hover:font-paragraph-minus-1 hover:text-lgi hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
            WHY WORK WITH US?
          </div>
          <div className=" !m-[0] bottom-[650px] left-[calc(50%_-_290px)] text-21xl font-extrabold flex w-auto [align-self:unset] h-auto z-[5] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-13xl mq450:text-5xl">
            So, Why Choose Webmattic?
          </div>
        </div> */}
       
        <div className="w-[815px] !m-[0] absolute top-[471px] left-[349px] flex flex-row items-start justify-start max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[815px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
          <div className="h-[713px] w-[978.8000000000002px] absolute !m-[0] top-[-461px] right-[-217.8px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[978.8000000000002px] hover:h-[713px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="absolute top-[61px] left-[280px] w-[698.8px] h-[568.6px] bg-paleturquoise-200 flex [filter:blur(400px)] z-[2] hover:bg-paleturquoise-200 hover:flex hover:w-[698.8px] hover:h-[568.6px] hover:[filter:blur(400px)]"
              alt=""
              src="/templated-icon.svg"
            />
            <div className="absolute h-[713px] top-[0px] bottom-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-mediumvioletred-200 w-[713px] flex z-[4] hover:bg-mediumvioletred-200 hover:flex hover:w-[713px] hover:h-[713px] hover:[filter:blur(300px)]" />
          </div>

          <div className="relative leading-[24px]  max-w-full h-auto z-[5] hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700  hover:h-auto hover:max-w-full">
            <span>{` `}</span>
            <b className="[text-decoration:underline]">
              We don’t believe in templated responses
            </b>
            <span>
              . Our design team combines years of it’s industry experience with
              cutting-edge techniques to deliver designs that are not only
              beautiful but also strategically effective.
            </span>
          </div>
        </div>
        <div className="w-[317px] absolute !m-[0] top-[653px] right-[347px] text-2xs flex h-auto z-[5] hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:w-[317px] hover:h-auto">
          Don’t like what you see, no problem you get your money back, without
          any questions asked.
        </div>
        <div className="w-[317px] absolute !m-[0] top-[752px] right-[347px] text-2xs flex h-auto z-[4] hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:w-[317px] hover:h-auto">
          From graphics to digital marketing, content and copywriting, we do it
          all.
        </div>
        <div className="w-[309px] absolute !m-[0] top-[710px] right-[355px] leading-[24px] flex h-auto z-[5] hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:w-[309px] hover:h-auto">
          <b>{`One-Stop `}</b>
          <span>Design Solution</span>
        </div>
        <div className="w-[1285.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[134.29999999999927px] box-border relative gap-[68px] max-w-full shrink-0 h-auto [transform:rotate(0deg)] hover:flex hover:w-[1285.4px] hover:h-auto hover:flex-col hover:gap-[68px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[134.29999999999927px] hover:box-border hover:max-w-full hover:shrink-0 mq800:gap-[34px] mq450:gap-[17px]">
          <div className="w-[1088px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[1088px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border hover:max-w-full">
            <div className="w-[926px] flex flex-col items-start justify-start gap-[19.199999999999815px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[926px] hover:h-auto hover:flex-col hover:gap-[19.199999999999815px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
              {/* <div className="absolute !m-[0] right-[652px] bottom-[721px] text-lgi font-semibold flex w-auto [align-self:unset] h-auto z-[5] hover:font-semibold hover:font-paragraph-minus-1 hover:text-lgi hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                WHY WORK WITH US?
              </div>
              <div className="absolute !m-[0] bottom-[650px] left-[calc(50%_-_290px)] text-21xl font-extrabold flex w-auto [align-self:unset] h-auto z-[5] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-13xl mq450:text-5xl">
                So, Why Choose Webmattic?
              </div> */}
              <div className="self-stretch flex flex-row items-start justify-end max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:max-w-full">
                <div className="w-[815px] relative leading-[24px] flex shrink-0 max-w-full h-auto z-[5] hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:w-[815px] hover:h-auto hover:max-w-full">
                  <p className="m-0">
                    <span className="font-paragraph-minus-1">{`Unlike other design agencies, `}</span>
                    <b>{`we are obsessively ROI focussed. `}</b>
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
              <div className="w-[805.8px] flex flex-col items-start justify-start pt-[73px] px-[110px] pb-[42.60000000000037px] box-border relative gap-[170px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[805.8px] hover:h-auto hover:flex-col hover:gap-[170px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[73px] hover:px-[110px] hover:pb-[42.60000000000037px] hover:box-border hover:max-w-full mq1125:gap-[85px] mq1125:pl-[55px] mq1125:pr-[55px] mq1125:box-border mq450:gap-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start py-0 px-px box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] text-lgi hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-px hover:box-border">
                  <div className="relative font-semibold flex w-auto [align-self:unset] h-auto z-[5] hover:font-semibold hover:font-paragraph-minus-1 hover:text-lgi hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                    Critical Reasons To Work With Us
                  </div>
                </div>
                <div className="w-[482px] flex flex-col items-start justify-start gap-[32px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[482px] hover:h-auto hover:flex-col hover:gap-[32px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[16px]">

                  <div className="w-[458px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[458px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-px hover:pb-[9px] hover:box-border hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[14px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[19px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[19px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24] flex gap-[0px] z-[4] hover:flex hover:w-6 hover:h-6 hover:gap-[0px] hover:min-h-[24]"
                          alt=""
                          src="/time02.svg"
                        />
                        <div className="flex-1 relative leading-[24px] flex max-w-[calc(100%_-_43px)] h-auto z-[5] hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:flex-1 hover:h-auto hover:max-w-[calc(100%_-_43px)]">
                          <span>{`You `}</span>
                          <b>save on design time.</b>
                        </div>
                      </div>
                      <div className="w-[400px] flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-2xs hover:flex hover:w-[400px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[42px] hover:box-border hover:max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                        <div className="flex-1 relative flex h-auto z-[5] hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:flex-1 hover:h-auto">
                          Our Service comes with a 24 Hour Response window.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* com2 */}
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap hover:gap-[20px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[3px] hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-[0px] z-[4] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                        alt=""
                        src="/piggybank.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[15px] min-w-[256] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[15px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-0 hover:box-border hover:min-w-[256] hover:max-w-full">
                      <div className="w-[337px] relative leading-[24px] flex max-w-full h-auto z-[5] hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:w-[337px] hover:h-auto hover:max-w-full">
                        <p className="m-0">
                          <span className="font-paragraph-minus-1">{`You `}</span>
                          <b>save on exorbitant design costs</b>
                          <span className="font-paragraph-minus-1">{` `}</span>
                        </p>
                        <p className="m-0">from fancy design agencies.</p>
                      </div>
                      <div className="w-[317px] relative text-2xs flex h-auto z-[4] hover:font-paragraph-minus-1 hover:text-2xs hover:text-left hover:text-slate-700 hover:flex hover:w-[317px] hover:h-auto">
                        Our Credit Pack purchase and Monthly subscription
                        pricing system empowers you to choose service as per
                        your need and requirement.
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-[0px] z-[5] hover:flex hover:w-6 hover:h-6 hover:gap-[0px]"
                        alt=""
                        src="/marketing.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[698.8px] h-[568.6000000000004px] absolute !m-[0] top-[0px] right-[107px] bottom-[0px] left-[0px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[698.8px] hover:h-[568.6000000000004px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full bg-lightpink flex [filter:blur(300px)] z-[3] hover:bg-lightpink hover:flex hover:w-full hover:h-full hover:[filter:blur(300px)]"
                    alt=""
                    src="/team-icon.svg"
                  />
                  <div className="absolute top-[220px] left-[119px] rounded-[50%] box-border w-1.5 h-1.5 flex z-[5] border-[1px] border-solid border-slate-700 hover:flex hover:w-1.5 hover:h-1.5 hover:box-border hover:border-[1px] hover:border-solid hover:border-slate-700" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-9xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-px hover:box-border">
                  <b className="relative flex font-bold w-auto [align-self:unset] h-auto z-[4] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-slate-700 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-3xl">{`Highly Experienced Team `}</b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-1.5 hover:box-border hover:max-w-full">
                <div className="w-[815px] relative leading-[24px] flex shrink-0 max-w-full h-auto z-[2] hover:font-paragraph-minus-1 hover:text-base hover:leading-[24px] hover:text-left hover:text-slate-700 hover:flex hover:w-[815px] hover:h-auto hover:max-w-full">
                  You get to deal with highly experienced team members, who are
                  just an email or a call away. The collective Webmattic team
                  has more than 35 years of experience managing and executing
                  digital campaigns.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-end pt-[326px] px-[187px] pb-[9.700000000000728px] box-border relative max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-21xl text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-[326px] hover:px-[187px] hover:pb-[9.700000000000728px] hover:box-border hover:max-w-full mq800:pl-[46px] mq800:pr-[46px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:pl-[93px] mq1325:pr-[93px] mq1325:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-full hover:h-full hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <img
                className="absolute top-[294px] left-[782px] w-[503.4px] h-[605.7px] bg-aliceblue flex [filter:blur(300px)] z-[1] hover:bg-aliceblue hover:flex hover:w-[503.4px] hover:h-[605.7px] hover:[filter:blur(300px)]"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute top-[207px] left-[0px] w-[503.4px] h-[605.7px] bg-mistyrose flex [filter:blur(300px)] z-[1] hover:bg-mistyrose hover:flex hover:w-[503.4px] hover:h-[605.7px] hover:[filter:blur(300px)]"
                alt=""
                src="/vector4.svg"
              />
              <img
                className="absolute top-[0px] left-[341px] w-[517px] h-[221px] object-cover mix-blend-multiply flex z-[2] hover:mix-blend-multiply hover:flex hover:w-[517px] hover:h-[221px]"
                alt=""
                src="/image-29@2x.png"
              />
            </div>
            <div className="w-[856px]  flex flex-col items-start justify-start pt-[42px] px-[76px] pb-[69px] box-border relative gap-[51px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[856px] hover:h-auto hover:flex-col hover:gap-[51px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[42px] hover:px-[76px] hover:pb-[69px] hover:box-border hover:max-w-full mq1125:pl-[38px] mq1125:pr-[38px] mq1125:box-border mq450:gap-[25px]">
              {/* <ApplicationBg /> */}
              <div className="w-[671px] relative flex flex-col items-start justify-start gap-[28px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[671px] hover:h-auto hover:flex-col hover:gap-[28px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-[22px] hover:box-border">
                  <div className="relative font-extrabold flex w-auto [align-self:unset] h-auto z-[3] hover:font-extrabold hover:font-paragraph-minus-1 hover:text-21xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq800:text-13xl mq450:text-5xl">
                    So, listen! if you 
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border flex w-auto z-[3] border-t-[1px] border-solid border-lightgray border-[1px] hover:flex hover:self-stretch hover:w-auto hover:h-px hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-2 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-4xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-2 hover:box-border hover:max-w-full">
                <div className="w-[641px] flex flex-col items-start justify-start gap-[45px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[641px] hover:h-auto hover:flex-col hover:gap-[45px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[22px]">
                  <div className="flex flex-row items-start justify-start py-0 px-px box-border max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-px hover:box-border hover:max-w-full">
                    <div className="flex flex-row items-start justify-start relative max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <div className="h-[55px] w-[415px] absolute !m-[0] top-[-14px] left-[-5px] rounded-3xs bg-highlighter-dark flex z-[3] hover:bg-highlighter-dark hover:flex hover:w-[415px] hover:h-[55px] hover:rounded-3xs" />
                      <div className="relative font-semibold flex w-auto [align-self:unset] h-auto z-[4] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-lg">
                        Are tired of designers charging more and providing less
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[31px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[15px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-px box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[7px] hover:pl-px hover:box-border hover:max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                        <div className="h-[55px] w-[267px] absolute !m-[0] top-[-14px] left-[-5px] rounded-3xs bg-highlighter-light-green flex z-[3] hover:bg-highlighter-light-green hover:flex hover:w-[267px] hover:h-[55px] hover:rounded-3xs" />
                        <div className="relative font-semibold whitespace-pre-wrap flex w-auto [align-self:unset] h-auto z-[4] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-lg">
                          Want better converting graphic designs for your
                          product
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[55px] relative max-w-full flex w-auto gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-[55px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                      <HighlightRect1
                        propTop="0px"
                        propLeft="282px"
                        propWidth="359px"
                        propHeight="55px"
                        propMargin="unset"
                        propBottom="unset"
                      />
                      <div className="absolute top-[14px] left-[0px] font-semibold flex h-auto z-[4] hover:font-semibold hover:font-paragraph-minus-1 hover:text-4xl hover:text-left hover:text-black hover:flex hover:h-auto mq450:text-lg">
                        Are looking for designers who understand your business
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CreditPack
                prop="👉"
                buyOurCreditPack="Buy our Credit Pack"
                propAlignSelf="unset"
                propWidth="671px"
              />
            </div>
          </div>
          <img
            className="w-[83px] h-[43px] absolute !m-[0] bottom-[0px] left-[557px] object-contain bg-darkslategray-100 flex z-[1] hover:bg-darkslategray-100 hover:flex hover:w-[83px] hover:h-[43px]"
            alt=""
            src="/polygon-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

Guarantee.propTypes = {
  className: PropTypes.string,
};

export default Guarantee;
