import {
    createMuiTheme
  } from "@material-ui/core/styles"

  const arcWhite='#FFFFFF  ';
  const arcOrange="#FFBA60";
  const color="#E5E5E5"



export default createMuiTheme({
    palette:{
        common:{
            White:`${arcWhite}`,
            Orange:`${arcOrange}`
        },
        primary:{
            main:`${arcWhite}`
        },
        secondary:{
            main:`${arcOrange}`
        },
    
    },
    background:{
        default:`$`
    }

})