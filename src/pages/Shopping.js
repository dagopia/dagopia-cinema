import * as React from "react";
import { Box } from "@mui/system";
import ShoppingCard from "../Componenet/ShoppingCard";
export default function Shopping() {
  return (
    <Box sx={{ flex: { xs: "100%", md: "15%" }, m: 2 }}>
     <ShoppingCard Title={"Rich DAd Poor DAd"} Price={40} />
    </Box>
  )
}




