import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CartWidget from "./CartWidget";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
const classes = useStyles();

    return (
        <AppBar position="static" style={{background: "#e6b960"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            CookApp
          </Typography>
          <Button color="inherit">Categoría 1</Button>
          <Button color="inherit">Categoría 2</Button>
          <Button color="inherit">Categoría 3</Button>
          <Button color="inherit">Categoría 4</Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    )
};
