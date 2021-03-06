import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({val}) {
  return (
    <Card sx={{ maxWidth: 345 , marginBottom: 5  }} onClick={()=>{console.log(val.author)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={val.urlToImage}
          alt=""
        />
        <CardContent>
          <Typography className="desc" gutterBottom variant="h6" component="div" >
            {val.title}
          </Typography>
          <Typography className="desc1" variant="body2" color="text.secondary">
            {val.description}
          </Typography>
          <Typography className="desc1" variant="body2" color="text.secondary">
            {val.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions maxWidth='100%'>
        <Button size="small" color="primary" onClick={()=> window.open(val.url, "_blank")}>
           Read More
        </Button>
        <Typography width='70%' align='right' variant="caption" display="block" gutterBottom>
        {val.author}
      </Typography>
      </CardActions>
    </Card>
  );
}
