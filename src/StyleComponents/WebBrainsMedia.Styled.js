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
background:transparent;
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
gap:10px;
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
padding:0 120px;
`
export const ResponseTitle = styled.h4`
text-align:${props => props.TeamsLargeSection ? "center" : "left"};
font-size:2.5rem;
text-transform:capitalize;
`
export const ResponseDesc = styled.p`
text-align:${props => props.TeamsLargeSection ? "center" : "left"};
font-size: 18px;
line-height:28px;
margin:${props => props.TeamsLargeSection ? "15px" : "30px"};
display:${props => props.TeamsLargeSection ? "inline-block" : "block"};


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
justify-content:space-between;
`
export const SpanWithIcon = styled.span`
background-color:gray;
padding:10px;
border-radius:40px;
display:flex;
align-items:center;
gap:8px;
`