import { keyframes } from "@emotion/react"
import { SxProps } from "@mui/system";

export const neonColor = "#33ccff";

const neon = keyframes`
    0% {
      box-shadow: 0 0 5px 2px #33ccff;
    }
  
    50% {
      box-shadow: 0 0 20px 5px #33ccff;
    }
  
    100% {
      box-shadow: 0 0 5px 2px #33ccff;
    }
`

export default neon


export const neonSxProps: SxProps = {
  color: "#33ccff",
  backgroundColor: "background.paper",
  boxShadow: `0 0 5px 2px rgba(155,155,155,0.25)`,

  ":hover": {
    animation: `${neon} 1000ms infinite`,
    boxShadow: `0 0 20px 5px #33ccff`,
    backgroundColor: "#33ccff",
    color: "background.paper"
  }
}