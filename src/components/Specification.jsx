import styled from "styled-components";

export default function Specifications({
    checkpadding,
    fontSize,
    fontcolor,
    radius,
    text,
    gap,
    fontFamily,
    containerpadding,
    containerwidth,
    containerbackground,
}) {
    return (
        <Container
            className="eachspec"
            $gap={gap}
            $checkpadding={checkpadding}
            $radius={radius}
            $fontFamily={fontFamily}
            $fontSize={fontSize}
            $fontcolor={fontcolor}
            $containerpadding={containerpadding}
            $containerwidth={containerwidth}
            $containerbackground={containerbackground}
        >
            <div className="checkbox">
                <div className="tick">
                    <img src="/icons/Check.svg" alt="Check box" />
                </div>
            </div>
            <p className="text">{text}</p>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => (props.$gap ? props.$gap : "12px")};
    padding: ${(props) =>
        props.$containerpadding ? props.$containerpadding : "0 0"};
    width: ${(props) => (props.$containerwidth ? props.$containerwidth : "auto")};
    background: ${(props) =>
        props.containerbackground ? props.containerbackground : "transparent"};
    border: ${(props) => props.$containerbackground && "1px solid #FFF"};
    border-radius: 8px;
    transition: 0.25s;
    

    &:hover {
        ${(props) =>
            props.$containerbackground &&
            `
            border: 1px solid #4aaeff;
            background-color: #acd8fb;
        `}
    }

    .checkbox {
        padding: ${(props) =>
            props.$checkpadding ? props.$checkpadding : "4px"};
        background-color: #4582f7;
        border-radius: ${(props) => (props.$radius ? props.$radius : "4px")};
        .tick {
            width: 11px;
            @media all and (max-width: 1080px) {
                width: 9px;
            }
        }
        @media all and (max-width: 1080px) {
            padding: ${(props) =>
                props.$checkpadding ? props.$checkpadding : "3px"};
        }
    }
    .text {
        font-family: ${(props) =>
            props.$fontFamily ? props.$fontFamily : "nunito-regular"};
        font-size: ${(props) => (props.$fontSize ? props.$fontSize : "24px")};
        color: ${(props) => (props.$fontcolor ? props.$fontcolor : "#F3F3F3")};
    }
`;
