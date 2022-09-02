import styled from "styled-components";


export const Nav = styled.nav`
width:100%;
display:flex;
padding:20px 120px;
justify-content:space-between;
background:transparent;
position:fixed;
top:0;
left:0;
transition:.6s;
border-radius:60px;
`
export const Ul = styled.ul`
display:flex;
align-items:center;
gap:30px;
color:white;
`
export const TalkToSalesBtn = styled.button`
border:${props => props.icon ? "1px solid #541554" : "1px solid white"};
padding:15px 25px;
background:${props => props.NewDigitaBtn ? "#fff" : "transparent"};
color:${props => props.icon ? "#541554" : "#fff"};
border-radius:5px;
text-transform:uppercase;
font-weight:bolder;
`
export const TryForFreeBtn = styled.button`
border:1px solid white;
padding:15px 25px;
background:${props => props.icon ? "#541554" : "#fff"};
border-radius:5px;
text-transform:uppercase;
color: ${props => props.icon ? "#fff" : "#541554"};
font-weight:bolder;

`

//banner section
export const BannerSection = styled.section`
padding-top:100px;
height:80vh;
width:100%;
background:#541554;
display:flex;
justify-content:space-between;
padding-left:120px;
`
export const Title = styled.h1`
color:white;
font-size:60px;
margin-top:50px
`
export const P = styled.p`
font-size:22px;
margin:20px 0;
color:white;
`
export const ButtonDiv = styled.div`
display:flex;
justify-content:center;
gap:10px;
margin-top:${props => props.NewDigitaBtnCont && "30px"}
`
export const Span = styled.span`
color:#ecb22e;
`

//brand section
export const BrandSection = styled.section`
padding:50px 0;
background:#f4ede4;

`
export const H3 = styled.h3`
text-align:center;
font-size:.875rem;
text-transform:uppercase;
`
export const BrandIconCont = styled.div`
display:flex;
justify-content:center;
gap:40px;
margin-top:40px
`
export const BrandTwoSideContent = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:100px;
margin-top:70px;
padding:${props => props.another ? "0" : "0 120px"};
`
export const RoundedDiv = styled.video`
border-top-right-radius: 900px;
border-bottom-right-radius: 900px;
`
export const ResponseTitle = styled.h4`
text-align:${props => !props.TeamsLargeSection ? "left" : "center"};
font-size: ${props => props.decFontSize ? "2rem" : "2.5rem"};
text-transform:capitalize;
color:${props => !props.WhiteColor ? "#000" : "#fff"}
`
export const ResponseDesc = styled.p`
text-align:${props => props.TeamsLargeSection ? "center" : "left"};
font-size: ${props => props.italic ? "25px" : "18px"};
line-height:28px;
margin:${props => props.TeamsLargeSection ? "15px" : "0"};
display:${props => props.TeamsLargeSection ? "inline-block" : "block"};
font-style:${props => props.italic ? "italic" : "normal"};
margin-left:${props => props.marginRemove && "0"};


`
export const ResponseExternalLink = styled.a`
color:#1264a3;
display: flex;
align-items:center;
gap:10px
`

//Teams large section
export const TeamsLargeSectionStyled = styled.section`
padding:40px 120px;
`
export const TeamsLargeIconDiv = styled.div`
padding:${props => props.firstIcon ? " 0 100px " : "0"};
display:flex;
justify-content:${props => props.secondIcon ? "flex-start" : "space-between"}};
gap:100px
`
export const TeamsLargeIconThird = styled.div`
display:flex;
justify-content:flex-end;
gap:150px;
margin-top:30px;
`
export const SpanWithIcon = styled.span`
background-color:rgba(0.5,0.5,8,.1);
padding:10px 20px;
border-radius:40px;
display:flex;
align-items:center;
gap:8px;
`
export const ParcentCont = styled.div`
display:flex;
gap:220px;
padding:100px 100px 0 100px;
justify-content:space-between;
`
export const NameTitle = styled.div`
margin:20px 0;
`
export const NameTitleP = styled.p`
font-weight:bold;
`

export const ParcentSpan = styled.span`
color:#541554;
font-size:60px;
font-weight:bold;
`
export const TeamsP = styled.p`
text-align:center;
padding:40px 100px 10px;
`

//NewWay ToWork Section
export const NewWayToWorkSection = styled.section`
padding:58px 120px;
background-color:#f4ede4;
`
export const CardContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
gap:20px;
margin-top:30px;
`
export const Card = styled.div`
padding:10px;
width:260px;
height:400px;
background-color:${props => props.BgColorCard ? "#4a154b" : "#fff"};
color:${props => props.BgColorCard ? "#fff" : "#000"};
display:flex;
flex-direction:column;
justify-content:space-between
`
export const CardLink = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-end;
height:80px;
text-transform:uppercase;
color:${props => !props.WhiteLinkText ? "#1264a3" : "#fff"}
`

//new digital hq
export const NewDigitalHqSection = styled.section`
padding:100px 0;
;
text-align:center;
background-color:#541554;
border-bottom-left-radius:110px;
border-bottom-right-radius:110px;
`