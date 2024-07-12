import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SingleSelectTreeView from "../Components/Tree-View";
import { Routes, Route, useNavigate } from "react-router-dom";
import TransferStudentScreen from "../Pages/Student/Transfer-Student-Screen";
import StudentAddEdit from "../Pages/Student/Add-Edit";
import StudentList from "../Pages/Student/Student-List";
import TeacherList from "../Pages/Teacher/TeacherList";
import TeacherAddEdit from "../Pages/Teacher/TeacherAdd";
import TeacherAllocation from "../Pages/Teacher/TeacherAllowcation";
import SubjectList from "../Pages/Subject/SubjectList";
import SubjectAdd from "../Pages/Subject/SubjectAdd";
import Rejistration from "../Pages/School/Registration";
import Addmission from "../Pages/Admission/Admission";
import Classlist from "../Pages/Class/Class-list";
import ClassFrom from "../Pages/Class/Class-from";
import ExamResult from "../Pages/Exam/Exam-Result";
import ExamSchedule from "../Pages/Exam/Exam-Schedule";
import FeeStructure from "../Pages/Fees/Fee-Structure";
import FeeSubmition from "../Pages/Fees/Fee-Submition";
import FeeVouchner from "../Pages/Fees/Fee-Voucher";
import SyllabusFrom from "../Pages/Syllabus/Syllabus-From";
import Syllabuslist from "../Pages/Syllabus/Syllabus-list";
import EditStudent from "../Pages/Student/Student-Edit";
const drawerWidth = 240;

interface Props {
  window?: () => Window;
  value1?: string;
  value2?: string;
  path?: string;
  path2?: string;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { value1, value2, path, path2 } = props;
 const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [Drawers, setDrawers] = React.useState([
    {
      NodeName: "Student",
      child: [
        {
          name: "Add/Edit",
          route: "StudentAdd",
        },
        {
          name: "StudentList",
          route: "StudentList",
        },
        {
          name: "Studentedit",
          route: "StudentEdit",
        },
        { name: "StudentTransfer", route: "StudentTransfer" },
      ],
    },
    {
      NodeName: "Teacher",
      child: [
        {
          name: "Teacher-Add/Edit",
          route: "TeacherAdd",
        },
        {
          name: "TeacherList",
          route: "TeacherList",
        },
        { name: "TeacherAllowlocation", route: "TeacherAllowcation" },
      ],
    },
    {
      NodeName: "Subject",
      child: [
        {
          name: "Subject-Add/Edit",
          route: "SubjectAdd",
        },
        {
          name: "SubjectList",
          route: "SubjectList",
        },
      ],
    },
    {
      NodeName: "School",
      child: [
        {
          name: "Rejistration",
          route: "Rejistration",
        },
       
      ],
    },
    {
      NodeName: "Admission",
      child: [
        {
          name: "Admission-form",
          route: "Admission",
        },
      ],
    },
    {
      NodeName: "Class",
      child: [
        {
          name: "Class-from",
          route: "Classform",
        },
         {
          name: "Class-list",
          route: "Classlist",
        },
      ],
    },
    {
      NodeName: "Exam",
      child: [
        {
          name: "Exam-Result",
          route: "ExamResult",
        },
         {
          name: "Exam-Schedule",
          route: "ExamSchedule",
        },
      ],
    },
    {
      NodeName: "Fees",
      child: [
        {
          name: "Fee-Structure",
          route: "FeeStructure",
        },
         {
          name: "Fee-Submition",
          route: "FeeSubmition",
        },
        {
          name: "Fee-Voucher",
          route: "FeeVoucher",
        },
      ],
    },
    {
      NodeName: "Syllabus",
      child: [
        {
          name: "Syllabus-from",
          route: "SyllabusFrom",
        },
         {
          name: "Syllabus-list",
          route: "Syllabuslist",
        },
      ],
    },
  ]);

  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <SingleSelectTreeView Drawers={Drawers} />
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=>navigate('/Login')}>Login</MenuItem>
      <MenuItem onClick={()=>navigate('/')}>Dashbord</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-black">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
          EduManage
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }  }}
        aria-label="mailbox folders"
        
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Your main content goes here */}
        <Routes>
          <Route path="StudentTransfer" element={<TransferStudentScreen />} />
          <Route path="StudentAdd" element={<StudentAddEdit />} />
          <Route path="StudentEdit" element={<EditStudent />} />
          <Route path="StudentList" element={<StudentList />} />
          <Route path="TeacherList" element={<TeacherList />} />
          <Route path="TeacherAdd" element={<TeacherAddEdit />} />
          <Route path="TeacherAllowcation" element={<TeacherAllocation />} />
          <Route path="SubjectList" element={<SubjectList />} />
          <Route path="SubjectAdd" element={<SubjectAdd />} />
          <Route path="Rejistration" element={<Rejistration />} />
          <Route path="Admission" element={<Addmission />} />
          <Route path="Classform" element={<ClassFrom />} />
          <Route path="Classlist" element={<Classlist />} />
          <Route path="ExamResult" element={<ExamResult />} />
          <Route path="ExamSchedule" element={<ExamSchedule />} />
          <Route path="FeeStructure" element={<FeeStructure />} />
          <Route path="FeeSubmition" element={<FeeSubmition />} />
          <Route path="FeeVoucher" element={<FeeVouchner />} />
          <Route path="SyllabusFrom" element={<SyllabusFrom />} />
          <Route path="Syllabuslist" element={<Syllabuslist />} />
        </Routes>
      </Box>
    </Box>
  );
}
