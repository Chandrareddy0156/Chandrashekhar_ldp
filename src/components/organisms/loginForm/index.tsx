// organisms/LoginForm/index.tsx
import { Box ,Button} from "@mui/material";
import { Input } from "../../atoms/input/index";


export const LoginForm = () => (
  <Box display="flex" flexDirection="column" gap={2} >
    <Input placeholder="Email" />
    <Input placeholder="Password" type="password"  />
    <Button sx={{width:'300px',background:'#2CE080',color:'#03314B',font:'Cera Pro',textTransform:'none'}}>Log in with email</Button>

  </Box>
);
