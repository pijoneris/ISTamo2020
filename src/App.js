import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddUserPage from './pages/AddUserPage';
import SchedulePage from './pages/SchedulePage';
import Marks from './pages/Marks';
import Users from './pages/AllUsersPage';
import {Route, Switch, Link } from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonIcon from '@material-ui/icons/Person';
import MarkIcon from '@material-ui/icons/BorderColor';
import ReportSheetPage from "./pages/ReportSheetPage";
import ListAltIcon from '@material-ui/icons/ListAlt';
import NewsPage1 from "./pages/NewsPage1";
import CreateNewsPage from "./pages/CreateNewsPage";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import EditNewsPage from "./pages/EditNewsPage";
import CreateNewMarkPage from "./pages/CreateNewMarkPage";
import CalculateAverageReportPage from "./pages/CalculateAverageReportPage";
import RatingsPage from "./pages/RatingsPage";
import ScheduleAddPage from "./pages/ScheduleAddPage";
import ScheduleAddTest from "./pages/ScheduleAddTest";
import ScheduleReportPage from "./pages/ScheduleReportPage";
import SettingsPage from "./pages/SettingsPage";
import SettingsIcon from '@material-ui/icons/Settings';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            E-dienynas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItem component={Link} to="/app/news" button>
            <ListItemIcon><MenuBookIcon/></ListItemIcon>
            <ListItemText>Naujienos</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/app/schedule">
            <ListItemIcon><ScheduleIcon/></ListItemIcon>
            <ListItemText>Tvarkaraštis</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/app/marks">
            <ListItemIcon><MarkIcon/></ListItemIcon>
            <ListItemText>Pažymiai</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/app/adduser/">
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText>Sukurti vartotoją</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/app/users">
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText>Vartotojai</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/app/reportsheet">
            <ListItemIcon><ListAltIcon/></ListItemIcon>
            <ListItemText>Formuoti ataskaitą</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/app/news/create">
            <ListItemIcon><NoteAddIcon/></ListItemIcon>
            <ListItemText>Sukurti naujieną</ListItemText>
          </ListItem>
            <ListItem button component={Link} to="/app/settings">
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText>Nustatymai</ListItemText>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
                <Switch>
                    <Route path="/app/settings" component={SettingsPage} />
                    <Route exact path="/app/news" component={NewsPage1} />
                    <Route path="/app/news/create" component={CreateNewsPage} />
                    <Route exact path="/app/news/:id" component={EditNewsPage} />
                    <Route path="/app/adduser/:id?" component={AddUserPage} />

                    <Route exact path="/app/schedule" component={SchedulePage} />
                    <Route exact path="/app/schedule/create/:id?" component={ScheduleAddPage} />
                    <Route exact path="/app/schedule/test" component={ScheduleAddTest} />
                    <Route exact path="/app/schedule/report" component={ScheduleReportPage} />

                    <Route path="/app/schedule" component={SchedulePage} />
                    <Route path="/app/reportsheet" component={ReportSheetPage} />

                    <Route exact path="/app/marks/average" component={CalculateAverageReportPage} />
                    <Route exact path="/app/marks/ratings" component={RatingsPage} />
                    <Route exact path="/app/marks/create/:id?" component={CreateNewMarkPage} />
                    <Route path="/app/marks" component={Marks} />
                    <Route path="/app/users" component={Users} />
                </Switch>
      </main>
    </div>
  );
}
