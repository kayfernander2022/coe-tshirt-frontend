import styled from 'styled-components'

function Section({title,text}) {
  return (
    <Wrap>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
      <Buttons>
      <Button>
        VIEW ALL
      </Button>
      <DownArrow src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"/>
      </Buttons>
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
width: 100vw;
height:100vh;
background:orange;
display:flex;
flex-direction: column;
justify-content:space-between;//vertical
align-items:center; //horizontal
`

const Text=styled.div`
padding-top:15vh;
text-align: center;
`
const Button=styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
text-align:center;
margin-bottom:32px;
cursor:pointer;
`

const DownArrow=styled.img`
margin-top:20px;
height:40px;
animation: animateDown infinite 1.5s;
`
const Buttons=styled.div`
text-align:center;
`