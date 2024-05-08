import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
interface ITodoListItem {
  todo: ITodoType;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
  return (
    <ListItem
      disableGutters
      sx={{padding:"1rem",cursor:"pointer"}}
      secondaryAction={
        <IconButton sx={{"&:hover":{color:"red"}}} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText sx={{wordWrap:"break-word"}} primary={todo.task} />
    </ListItem>
  );
};

export default TodoListItem;
