import styled from "styled-components";


export const Nav = styled.nav`
width:1140px ;
margin:4px 102px 0;
display:flex;
padding:15px 30px;
justify-content:space-between;
align-items:center;
background:transparent;
position:fixed;
top:0;
left:0;
transition:.6s;
border-radius:60px;

@media (max-width: 600px){
    width:300px ;
    padding:15px 10px;
    margin:4px 5px 0;

}
`
export const MenuBtn = styled.span`
color: #fff;
font-size:40px;
cursor:pointer;

@media (min-width: 600px){
    display:none;
}
`
export const Ul = styled.ul`
display:flex;
align-items:center;
gap:30px;
color:white;

@media (max-width: 600px){
    display:none;
}
`
export const TalkToSalesBtn = styled.button`
border:${props => props.icon ? "1px solid #541554" : "1px solid white"};
padding:15px 25px;
background:${props => props.NewDigitaBtn ? "#fff" : "transparent"};
color:${props => props.icon ? "#541554" : "#fff"};
border-radius:5px;
text-transform:uppercase;
font-weight:bolder;

@media (max-width: 600px){
display: ${props => props.BtnNone && "none"}
}

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

@media(max-width: 600px){
    flex-direction:column;
    padding:10px 20px;
    height:100vh;
    text-align:center;  

}
`
export const Title = styled.h1`
color:white;
font-size:60px;
margin-top:50px;

@media(max-width: 600px){
    font-size:45px;
    margin-top:80px;
}
`
export const P = styled.p`
font-size:22px;
margin:20px 0;
color:white;
`
export const ButtonDiv = styled.div`
display:flex;
justify-content:${props => props.NewDigitaBtnCont && "center"};
gap:10px;
margin-top:${props => props.NewDigitaBtnCont && "30px"};
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
text-align:${props => props.DefaultAlign ? "left" : "center"};
font-size:.875rem;
text-transform:uppercase;

@media(max-width:600px){
    padding-top:280px;
}
`
export const BrandIconCont = styled.div`
text-align:center;
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

@media(max-width: 600px){
    flex-direction:column;
    padding: 0 20px;
    gap:10px;
    margin-top:12px;

}
`
export const VideoPart = styled.video`
min-width:600px;
height:400px;

@media(max-width:600px){
    min-width:300px;
}
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
color:${props => props.Black ? "#000" : "#1264a3"};
display: flex;
align-items:center;
gap:10px
`

//Teams large section
export const TeamsLargeSectionStyled = styled.section`
padding:40px 120px;

@media(max-width:600px){
    padding:40px 20px;
}
`
export const TeamsLargeIconDiv = styled.div`
padding:${props => props.firstIcon ? " 0 100px " : "0"};
display:flex;
justify-content:${props => props.secondIcon ? "flex-start" : "space-between"}};
gap:100px
@media(max-width:600px){
    display:none
}
`
export const TeamsLargeIconThird = styled.div`
display:flex;
justify-content:flex-end;
gap:150px;
margin-top:30px;

@media(max-width:600px){
    display:none;
    margin-top:10px;
    gap:20px;
}
`
export const SpanWithIcon = styled.span`
background-color:rgba(0.5,0.5,8,.1);
padding:10px 20px;
border-radius:40px;
display:flex;
align-items:center;
gap:8px;

@media(max-width:600px){
    display:none
}
`
export const ParcentCont = styled.div`
display:flex;
gap:220px;
padding:100px 100px 0 100px;
justify-content:space-between;

@media(max-width:600px){
    flex-direction:column;
    padding:40px 10px 10px;
    gap:20px;


}
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

@media(max-width:600px){
    padding:58px 10px;

}
`
export const CardContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
gap:20px;
margin-top:30px;

@media(max-width:600px){
    display:flex;
    flex-direction:column;
    align-items:center;
}
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
padding:150px 0 150px;
text-align:center;
background-image:url('https://i.ibb.co/vjvX46R/bg-new-digital.png');
background-size:cover;
background-repeat:no-repeat;
`

//footer section
export const FooterSection = styled.section`
display:grid;
grid-template-columns:repeat(6,1fr);
padding:0 120px;

@media(max-width: 600px){
grid-template-columns:1fr 1fr 1fr;
padding:020px;
}
`
export const FooterElement = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
export const FooterBottom = styled.div`
padding:40px 120px;

@media(max-width: 600px){
    padding:40px 10px;   
}
`
export const Hr = styled.hr`
color:gray;
`
export const SocialLinks = styled.div`
font-weight:bold;
display:flex;
justify-content:space-between;
align-items:center;
height:50px;

@media(max-width: 600px){
    flex-direction:column;
    padding:20px;
    align-items:flex-start;
}
`
export const LinkCont = styled.div`
display:flex;
gap:10px;

@media(max-width: 600px){
    flex-direction:column;   
}
`
export const AnohterLink = styled.a`
color:#1264a3;
`
export const CopyRightText = styled.p`
font-size:12px;
`