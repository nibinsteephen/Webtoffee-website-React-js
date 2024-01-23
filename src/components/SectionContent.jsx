import styled from "styled-components";
import Heading from "./Heading";
import BoxContent from "./BoxContent";
import Button from "./Button";
import Specifications from "./Specification";

export default function SectionContent({
    lefttitle,
    midtitle,
    righttitle,
    boxtext,
    boxtextcolor,
    boxtextfont,
    boxtextsize,
    box2 = "false",
    boxtext2,
    boxtextcolor2,
    boxtextfont2,
    boxtextsize2,
    firstpara,
    secondpara,
    thirdpara,
    paragraphcolor,
    buttontext,
    sectionimage,
    sectionbackground,
    flip,
    leftrightcolor,
    marginbottom,
    paddingbottom,
    gdprdisplay = 'false',
}) {
    return (
        <Container
            className="background"
            $sectionbackground={sectionbackground}
            $marginbottom={marginbottom}
            $paddingbottom={paddingbottom}
        >
            <Wrapper
                className="wrapper"
                $paragraphcolor={paragraphcolor}
                $flip={flip}
                $box2={box2}
                $gdprdisplay={gdprdisplay}
            >
                <div className="left">
                    <div className="headingContainer">
                        <Heading
                            lefttitle={lefttitle}
                            midtitle={midtitle}
                            righttitle={righttitle}
                            leftrightcolor={leftrightcolor}
                        />
                    </div>
                    <BoxContent
                        boxtext={boxtext}
                        boxtextcolor={boxtextcolor}
                        boxtextfont={boxtextfont}
                        boxtextsize={boxtextsize}
                    />
                    <p className="firstParagraph">{firstpara}</p>
                    <p className="secondParagraph">{secondpara}</p>
                    <p className="thirdParagraph">{thirdpara}</p>
                    <div className="box2">
                        <BoxContent
                            boxtext={boxtext2}
                            boxtextfont={boxtextfont2}
                            boxtextcolor={boxtextcolor2}
                            boxtextsize={boxtextsize2}
                        />
                    </div>
                    <div className="gdprPluginContainer">
                        <div className="gdprPlugin">
                            <p className="gdprText">
                                This feature of the GDPR plugin allows you to
                                record the following details
                            </p>
                            <div className="specification">
                                <Specifications
                                    text="Who gave consent – using a masked IP and the user ID if the user is logged in"
                                    fontcolor="#747474"
                                    fontSize="16px"
                                    fontFamily="nunito-semibold"
                                    gap="7px"
                                />
                                <Specifications
                                    text="The time of consent – using a date and timestamp"
                                    fontcolor="#747474"
                                    fontSize="16px"
                                    fontFamily="nunito-semibold"
                                    gap="7px"
                                />
                                <Specifications
                                    text="The consent provided to each category of the cookies"
                                    fontcolor="#747474"
                                    fontSize="16px"
                                    fontFamily="nunito-semibold"
                                    gap="7px"
                                />
                            </div>
                        </div>
                        <p className="gdprPluginText">
                            This allows you to keep proof of consent of how and
                            when consent was given if you are challenged with
                            infringement.
                        </p>
                    </div>
                    <Button
                        text={buttontext}
                        width="195px"
                        padding="12px 20px"
                    />
                </div>
                <div className="right">
                    <div className="imageFrame">
                        <img src={sectionimage} alt="Section Image" />
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${(props) =>
        props.$sectionbackground && props.$sectionbackground};
    padding: 100px 0
        ${(props) => (props.$paddingbottom ? props.$paddingbottom : "50px")} 0;
    margin-bottom: ${(props) =>
        props.$marginbottom ? props.$marginbottom : "120px"};
    @media all and (max-width: 980px) {
        margin-bottom: 50px;
        padding: 50px 0;
    }
    @media all and (max-width: 640px) {
                    margin-bottom: 0;
                }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${(props) => props.$flip && props.$flip};
    flex-wrap: wrap;
    .left {
        width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media all and (max-width: 980px) {
            width: 100%;
        }
        .headingContainer {
            margin-bottom: 48px;
            @media all and (max-width: 1280px) {
                margin-bottom: 35px;
            }
            @media all and (max-width: 640px) {
                margin-bottom: 16px;
            }
            div.headline {
                p {
                    @media all and (max-width: 1280px) {
                        font-size: 30px;
                        line-height: 43px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 24px;
                        line-height: 30px;
                    }
                    span {
                        @media all and (max-width: 1280px) {
                            font-size: 30px;
                            line-height: 43px;
                        }
                        @media all and (max-width: 1080px) {
                            font-size: 27px;
                            line-height: 37px;
                        }
                        @media all and (max-width: 480px) {
                            font-size: 24px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
        div.boxMatter {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 16px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 15px;
                }
            }
        }

        .firstParagraph {
            margin-top: 32px;
            @media all and (max-width: 1280px) {
                margin-top: 26px;
            }
            @media all and (max-width: 640px) {
                margin-top: 16px;
            }
        }
        .firstParagraph,
        .secondParagraph {
            color: ${(props) =>
                props.$paragraphcolor ? props.$paragraphcolor : "#747474"};
            font-size: 17px;
            margin-bottom: 32px;
            @media all and (max-width: 1280px) {
                font-size: 15px;
                margin-bottom: 16px;
            }
        }
        .secondParagraph {
            display: ${(props) => (props.$gdprdisplay==='true' ? "none" : "block")};
        }
        .thirdParagraph {
            display: ${(props) => (props.$gdprdisplay==='true' ? "none" : "block")};
            color: ${(props) =>
                props.$paragraphcolor ? props.$paragraphcolor : "#747474"};
            margin-bottom: ${(props) =>
                props.$box2 === "true" ? "25px" : "64px"};
            font-size: 17px;
            @media all and (max-width: 1280px) {
                font-size: 15px;
                margin-bottom: ${(props) =>
                    props.$box2 === "true" ? "25px" : "40px"};
            }
            @media all and (max-width: 640px) {
                margin-bottom: 22px;
            }
        }
        .box2 {
            display: ${(props) => (props.$box2 === "true" ? "block" : "none")};
            margin-bottom: 30px;
        }
        .gdprPluginContainer {
            margin-bottom: 44px;
            display: ${(props) => (props.$gdprdisplay==='true' ? "block" : "none")};
            .gdprPlugin {
                border-radius: 8px;
                border: 1px solid #ddf0ff;
                background: #f3f9ff;
                padding: 28px 16px;
                @media all and (max-width: 640px) {
                    padding: 20px 13px;
                }
                .gdprText {
                    color: #565656;
                    font-size: 17px;
                    font-family: "nunito-medium";
                    margin-bottom: 18px;
                    @media all and (max-width: 640px) {
                        font-size: 15px;
                    }
                }
                .specification {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .eachspec {
                        .text {
                            font-size: 14px;
                        }
                    }
                }
            }
            .gdprPluginText {
                color: #747474;
                font-size: 15px;
                margin-top: 16px;
            }
        }
    }
    .right {
        width: 45%;

        display: flex;
        align-items: center;
        @media all and (max-width: 980px) {
            width: 100%;
            justify-content: center;
            margin-top: 20px;
        }
        .imageFrame {
            @media all and (max-width: 980px) {
                width: 500px;
                display: flex;
                margin-top: 10px;
            }
            @media all and (max-width: 768px) {
                width: 400px;
            }
            @media all and (max-width: 640px) {
                width: 380px;
            }
            @media all and (max-width: 640px) {
                width: 270px;
            }
        }
    }
`;