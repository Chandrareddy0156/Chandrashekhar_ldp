import Button from "@mui/material/Button";
import { Box, ImageList, ImageListItem,Avatar,Stack,TextField,Rating} from "@mui/material";

import { deepOrange } from "@mui/material/colors";

import * as React from 'react';
import ColorRadioButtons from './Practice/Colorradio'
import ResponsiveAppBar from './Practice/AppbarMui'

interface ItemData {
  img: string;
  title: string;
}

const itemData: ItemData[] = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
     
    },
];


function Practice() {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <>
    <Stack spacing={1} direction='column'>
    <ResponsiveAppBar />    
    
      
      
      <TextField label="Email" />
    <ColorRadioButtons />
    </Stack>
    <Stack   direction='column' width='200px' spacing={2} >
    <Button variant="contained" >Hello world</Button>
      
      <Button variant="outlined" color="secondary" >Fetch data</Button>
      <Button variant="text" href="https://google.com"   color="error">Fetch data</Button>
      </Stack>
      <Stack direction="column" spacing={5} >

      <Avatar sx={{ bgcolor: deepOrange[500] }}>CH</Avatar>
      
      
      
   

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      
      </Stack>
   
      <Box sx={{ width: 400, height: 450, overflowY: "scroll",flexWrap:"wrap" }}>
     
        <ImageList variant="masonry" cols={2} gap={2} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        
      </Box>
      
    </>
  );
}

export default Practice;
