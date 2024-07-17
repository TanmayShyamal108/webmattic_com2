import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-slate-700 flex flex-col items-start justify-start pt-[265px] px-[133px] pb-[170px] box-border relative gap-[298px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-15xl text-light-slate font-paragraph-minus-1 hover:bg-slate-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[298px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[265px] hover:px-[133px] hover:pb-[170px] hover:box-border hover:max-w-full mq800:gap-[149px] mq800:pt-[47px] mq800:px-[66px] mq800:pb-[30px] mq800:box-border mq1125:pt-[73px] mq1125:pb-[46px] mq1125:box-border mq450:gap-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:pt-28 mq1325:pb-[71px] mq1325:box-border ${className}`}
    >
      <div className="w-[958px] flex flex-col items-start justify-start gap-[103px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[958px] hover:h-auto hover:flex-col hover:gap-[103px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[26px] mq1125:gap-[51px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[37px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-[37px] hover:box-border hover:max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[47px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[23px]">
            <img
              className="w-8 h-[29px] relative overflow-hidden shrink-0 object-contain flex gap-[0px] z-[1] hover:flex hover:w-8 hover:h-[29px] hover:gap-[0px]"
              alt=""
              src="/untitled-21-1@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:max-w-full">
              <div className="w-[670px] flex flex-col items-start justify-start gap-[11px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[670px] hover:h-auto hover:flex-col hover:gap-[11px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
                <b className="self-stretch relative flex font-bold w-auto h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-15xl hover:text-left hover:text-light-slate hover:flex hover:self-stretch hover:w-auto hover:h-auto mq800:text-8xl mq450:text-xl">
                  Want to see more of our work in action?
                </b>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-9xl hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                  <b className="w-[278px] relative flex shrink-0 font-bold h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-light-slate hover:flex hover:w-[278px] hover:h-auto mq450:text-3xl">
                    Take a look at our...
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[349px] px-[174px] pb-[89px] box-border relative gap-[33px] max-w-full w-auto [align-self:unset] h-auto [transform:rotate(0deg)] text-smi hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[33px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:pt-[349px] hover:px-[174px] hover:pb-[89px] hover:box-border hover:max-w-full mq800:gap-[16px] mq800:pt-[227px] mq800:px-[87px] mq800:pb-[58px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="w-[666px] h-[666px] absolute !m-[0] top-[0px] right-[63px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full flex z-[2] hover:flex hover:w-[666px] hover:h-[666px]"
            alt=""
            src="/portfoliobgcircle.svg"
          />
          <b className="relative text-9xl flex font-bold w-auto [align-self:unset] h-auto z-[3] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-light-slate hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-3xl">
            TCN NUTRITION
          </b>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
            <div className="relative flex w-auto [align-self:unset] h-auto z-[3] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-light-slate hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
              <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
              <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
              <p className="m-0">{`consectetur magna eu ullamcorper morbi sit vitae. Posuere `}</p>
              <p className="m-0">{`fames vestibulum commodo diam. Dictum eget dolor sed `}</p>
              <p className="m-0">magna nibh ut et.</p>
            </div>
          </div>
          <div className="absolute !m-[0] top-[64px] right-[-362px] text-141xl font-black text-danger flex [text-shadow:0px_4px_30px_rgba(0,_0,_0,_0.1)] w-auto [align-self:unset] h-auto z-[3] hover:font-black hover:font-paragraph-minus-1 hover:text-141xl hover:text-left hover:text-danger hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:[text-shadow:0px_4px_30px_rgba(0,_0,_0,_0.1)] mq800:text-45xl mq450:text-21xl">
            PORTFOLIO
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
            <div className="relative flex w-auto [align-self:unset] h-auto z-[4] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-light-slate hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
              <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
              <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
              <p className="m-0">consectetur magna eu.</p>
            </div>
          </div>
          <div className="w-[873px] h-[727px] absolute !m-[0] right-[-432px] bottom-[-104px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[873px] hover:h-[727px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="absolute top-[0px] left-[0px] w-[750px] h-[257px] bg-crimson-300 flex [filter:blur(200px)] z-[1] hover:bg-crimson-300 hover:flex hover:w-[750px] hover:h-[257px] hover:[filter:blur(200px)]"
              alt=""
              src="/vector5.svg"
            />
            <img
              className="absolute top-[138px] left-[335px] w-[538px] h-[589px] object-contain flex z-[4] hover:flex hover:w-[538px] hover:h-[589px]"
              alt=""
              src="/untitled-23-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2.5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-smi text-white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[7px] hover:pl-2.5 hover:box-border hover:max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[200.5px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[200.5px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq800:gap-[50px] mq450:gap-[25px] mq1325:gap-[100px]">
          <div className="w-[1191px] flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[1191px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
            <div className="h-[823px] w-12 absolute !m-[0] top-[-130.2px] left-[347px] [filter:blur(300px)] rounded-[50%] [background:linear-gradient(180deg,_#7dffe8,_#fff)] [transform:rotate(-25.68deg)] [transform-origin:0_0] flex z-[4] hover:[background:linear-gradient(180deg,_#7dffe8,_#fff)] hover:flex hover:w-12 hover:h-[823px] hover:[transform:rotate(-25.68deg)] hover:[filter:blur(300px)]" />
            <div className="flex-1 [backdrop-filter:blur(100px)] rounded-xl bg-darkslategray-200 flex flex-row items-start justify-start py-[51px] pr-[114px] pl-[115px] box-border gap-[43px] max-w-full h-auto z-[5] hover:bg-darkslategray-200 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[43px] hover:items-start hover:justify-start hover:rounded-xl hover:py-[51px] hover:pr-[114px] hover:pl-[115px] hover:box-border hover:[backdrop-filter:blur(100px)] hover:max-w-full mq800:gap-[21px] mq800:py-[33px] mq800:px-7 mq800:box-border mq1325:flex-wrap mq1325:pl-[57px] mq1325:pr-[57px] mq1325:box-border">
              <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[381] max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-5 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[381] hover:max-w-full mq1125:min-w-full mq1325:flex-1">
                <div className="flex flex-col items-start justify-start gap-[33px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[33px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:gap-[16px]">
                  <div className="flex flex-col items-start justify-start gap-[21px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[21px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <b className="relative flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                      Assignment: UX / UI / Mobile App / Web App
                    </b>
                    <b className="relative text-9xl flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-3xl">
                      EXPLORIUS
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                    <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                      <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                      <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                      <p className="m-0">{`consectetur magna eu ullamcorper morbi sit vitae. Posuere `}</p>
                      <p className="m-0">{`fames vestibulum commodo diam. Dictum eget dolor sed `}</p>
                      <p className="m-0">magna nibh ut et.</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                    <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                      <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                      <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                      <p className="m-0">consectetur magna eu.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[458px] flex-1 flex flex-row items-start justify-start relative min-w-[350] max-w-full z-[1] hover:flex hover:flex-1 hover:h-[458px] hover:flex-row hover:items-start hover:justify-start hover:min-w-[350] hover:max-w-full mq1125:min-w-full">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-full hover:h-full hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[538px] h-[423.6px] object-cover flex hover:flex hover:w-[538px] hover:h-[423.6px]"
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <img
                    className="absolute top-[261px] left-[295px] w-[197px] h-[197px] object-contain flex z-[1] hover:flex hover:w-[197px] hover:h-[197px]"
                    alt=""
                    src="/untitled-24-2-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-6 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:pr-3.5 hover:pl-6 hover:box-border hover:max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
              <div className="h-[337.5px] w-12 absolute !m-[0] top-[-62.2px] left-[34px] [filter:blur(300px)] rounded-[50%] [background:linear-gradient(180deg,_#7dffe8,_#fff)] [transform:rotate(-25.68deg)] [transform-origin:0_0] flex z-[4] hover:[background:linear-gradient(180deg,_#7dffe8,_#fff)] hover:flex hover:w-12 hover:h-[337.5px] hover:[transform:rotate(-25.68deg)] hover:[filter:blur(300px)]" />
              <div className="flex-1 [backdrop-filter:blur(100px)] rounded-xl bg-darkslategray-200 flex flex-row items-end justify-start pt-[49px] px-36 pb-12 box-border gap-[78px] max-w-full h-auto z-[5] hover:bg-darkslategray-200 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[78px] hover:items-end hover:justify-start hover:rounded-xl hover:pt-[49px] hover:px-36 hover:pb-12 hover:box-border hover:[backdrop-filter:blur(100px)] hover:max-w-full mq800:gap-[19px] mq800:pt-8 mq800:px-9 mq800:pb-[31px] mq800:box-border mq1325:flex-wrap mq1325:gap-[39px] mq1325:pl-[72px] mq1325:pr-[72px] mq1325:box-border">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[76px] box-border min-w-[381] min-h-[341] max-w-full w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-0 hover:px-0 hover:pb-[76px] hover:box-border hover:min-w-[381] hover:min-h-[341] hover:max-w-full mq1125:min-w-full mq1325:flex-1">
                  <div className="flex flex-col items-start justify-start gap-[33px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[33px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[21px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[21px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                      <b className="relative flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        Assignment: UX / UI / Mobile App / Web App
                      </b>
                      <b className="relative text-9xl flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-3xl">
                        EXPLORIUS
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                      <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                        <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                        <p className="m-0">{`consectetur magna eu ullamcorper morbi sit vitae. Posuere `}</p>
                        <p className="m-0">{`fames vestibulum commodo diam. Dictum eget dolor sed `}</p>
                        <p className="m-0">magna nibh ut et.</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                      <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                        <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                        <p className="m-0">consectetur magna eu.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[463px] flex-1 relative min-w-[289] max-w-full flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-[463px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[289] hover:max-w-full">
                  <img
                    className="absolute h-[463px] top-[0px] bottom-[0px] left-[0px] max-h-full w-[273px] object-cover flex z-[1] hover:flex hover:w-[273px] hover:h-[463px]"
                    alt=""
                    src="/untitled-25-1@2x.png"
                  />
                  <img
                    className="absolute top-[122px] left-[267px] w-[177px] h-[310px] object-cover flex z-[2] hover:flex hover:w-[177px] hover:h-[310px]"
                    alt=""
                    src="/untitled-26-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[38px] pl-0 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:pr-[38px] hover:pl-0 hover:box-border hover:max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
              <div className="h-[337.5px] w-12 absolute !m-[0] top-[-114.3px] right-[-77.98px] [filter:blur(300px)] rounded-[50%] [background:linear-gradient(180deg,_#7dffe8,_#fff)] [transform:rotate(28.43deg)] [transform-origin:0_0] flex z-[1] hover:[background:linear-gradient(180deg,_#7dffe8,_#fff)] hover:flex hover:w-12 hover:h-[337.5px] hover:[transform:rotate(28.43deg)] hover:[filter:blur(300px)]" />
              <div className="flex-1 [backdrop-filter:blur(100px)] rounded-xl bg-darkslategray-200 flex flex-row items-start justify-start pt-[75px] px-[102px] pb-[75.70000000000073px] box-border gap-[68px] max-w-full h-auto z-[2] hover:bg-darkslategray-200 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[68px] hover:items-start hover:justify-start hover:rounded-xl hover:pt-[75px] hover:px-[102px] hover:pb-[75.70000000000073px] hover:box-border hover:[backdrop-filter:blur(100px)] hover:max-w-full mq800:gap-[17px] mq800:py-[49px] mq800:px-[25px] mq800:box-border mq1325:flex-wrap mq1325:gap-[34px] mq1325:pl-[51px] mq1325:pr-[51px] mq1325:box-border">
                <div className="flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border min-w-[381] max-w-full shrink-0 w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-12 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[381] hover:max-w-full hover:shrink-0 mq1125:min-w-full mq1325:flex-1">
                  <div className="flex flex-col items-start justify-start gap-[33px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[33px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[21px] w-auto [align-self:unset] h-auto [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[21px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                      <b className="relative flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        Assignment: UX / UI / Mobile App / Web App
                      </b>
                      <b className="relative text-9xl flex font-bold w-auto [align-self:unset] h-auto z-[1] hover:font-bold hover:font-paragraph-minus-1 hover:text-9xl hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto mq450:text-3xl">
                        EXPLORIUS
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                      <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                        <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                        <p className="m-0">{`consectetur magna eu ullamcorper morbi sit vitae. Posuere `}</p>
                        <p className="m-0">{`fames vestibulum commodo diam. Dictum eget dolor sed `}</p>
                        <p className="m-0">magna nibh ut et.</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-1 hover:box-border">
                      <div className="relative flex w-auto [align-self:unset] h-auto z-[1] hover:font-paragraph-minus-1 hover:text-smi hover:text-left hover:text-white hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto">
                        <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sed morbi odio cras `}</p>
                        <p className="m-0">{`et aliquet enim diam massa adipiscing. Enim facilisi laoreet `}</p>
                        <p className="m-0">consectetur magna eu.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[409.3px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[350] flex z-[1] hover:flex hover:flex-1 hover:h-[409.3px] hover:min-w-[350] hover:max-w-full mq1125:min-w-full"
                  alt=""
                  src="/untitled-27-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[69.5px] h-[66.5px] absolute !m-[0] top-[403px] right-[134px] overflow-hidden shrink-0 object-contain mix-blend-overlay flex gap-[0px] z-[1] hover:mix-blend-overlay hover:flex hover:w-[69.5px] hover:h-[66.5px] hover:gap-[0px]"
        alt=""
        src="/untitled-20-2@2x.png"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
