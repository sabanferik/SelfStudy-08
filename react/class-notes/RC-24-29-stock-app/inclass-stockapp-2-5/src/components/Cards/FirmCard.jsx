import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useStockCall from "../../hooks/useStockCall";

export default function FirmCard({_id, name, address, image, phone, handleOpen, setInitialState}) {
  const {deleteStockData} = useStockCall();
  
  const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      sx={{
        height: 390,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
        "&:hover": {
          boxShadow: hovered ? "0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "none",
          transform: hovered ? "scale(1.03)" : "none",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        component="img"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: 2
      }}>
        <EditIcon onClick={() => {
          handleOpen();
          setInitialState({_id, name, phone, image, address})
        }} />
        <DeleteOutlineIcon onClick={() => deleteStockData("firms", _id)} />
      </CardActions>
    </Card>
  );
}
