// Base
import Card from "./Base/Cards";
import Footer from "./Base/Footer";
// ImageLists
import QuiltedImageList from "./ImageLists/QuiltedImageList";
import StandardImageList from "./ImageLists/StandardImageList";
import WovenImageList from "./ImageLists/WovenImageList";
// ProgressIndicators
import CircularIndicator from "./ProgressIndicators/CircularIndicator";
import LinearIndicator from "./ProgressIndicators/LinearIndicator";
// Templates
import Templates from "./Templates/SinglePage";
import Restaurant from "./Templates/SinglePage";
import NonProfit from "./Templates/SinglePage";
// Buttons
import ActionButton from "./Buttons/ActionButton";
import DryButton from "./Buttons/IconButtons";
import ToggleButton from "./Buttons/ToggleButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import ContainedButton from "./Buttons/ContainedButton";
import TextButton from "./Buttons/TextButton";

// Lists
import Divider from "./Lists/Divider";
import SingleLineList from "./Lists/SingleLineList";
import ThreeLineList from "./Lists/ThreeLineList";
import TwoLineList from "./Lists/TwoLineList";
// UserHelpers
import Banner from "./UserHelpers/Banner";
import Snackbar from "./UserHelpers/Snackbar";
import Tooltip from "./UserHelpers/Tooltip";
// Menus
import Accordion from "./Menus/Accordion";
import BottomSheet from "./Menus/BottomSheet";
import SideSheet from "./Menus/SideSheet";
import AccordionSingle from "./Menus/AccordionSingle";
import DropdownMenu from "./Menus/DropdownMenu";
import Tab from "./Menus/Tab";
import BottomBar from "./Menus/BottomBar";
import NavigationDrawer from "./Menus/NavigationDrawer";
import TopBar from "./Menus/TopBar";
import BottomNavigation from "./Menus/BottomNavigation";
import NavigationRail from "./Menus/NavigationRail";
// Forms
import Checkbox from "./FormHelpers/Checkbox";
import Label from "./FormHelpers/Label";
import SelectionControl from "./FormHelpers/SelectionControl";
import Chip from "./FormHelpers/Chip";
import Password from "./FormHelpers/Password";
import Slider from "./FormHelpers/Slider";
import DatePicker from "./FormHelpers/DatePicker";
import Radio from "./FormHelpers/Radio";
// import Switch from "./FormHelpers/Switch";
import Input from "./FormHelpers/Input";
import Select from "./FormHelpers/Select";
import FileUpload from "./FormHelpers/FileUpload";
// Modals
import AlertDialog from "./Modals/AlertDialog";
import ModalBox from "./Modals/ModalBox";
import ConfirmationDialog from "./Modals/ConfirmationDialog";
import SimpleDialog from "./Modals/SimpleDialog";

// Icons
import { Icon } from "./Icons/Icon";
import { Icons } from "./Icons/Icon";

// Features
import About from "./Features/About";
import ImageCarousel from "./Features/ImageCarousel";
import Team from "./Features/Team";
import Header1 from "./Features/Header1";
import Pricing from "./Features/Pricing";
import Hours from "./Features/Hours";
import SpotlightGallery from "./Features/SpotlightGallery";
import Menu from "./Features/Menu";
const allFeatures = {
  About: About.exampleData,
  ImageCarousel: ImageCarousel.exampleData,
  Team: Team.exampleData,
  Header1: Header1.exampleData,
  Pricing: Pricing.exampleData,
  Hours: Hours.exampleData,
  SpotlightGallery: SpotlightGallery.exampleData,
  Menu: Menu.exampleData
};

export {
  Card,
  Footer,
  QuiltedImageList,
  StandardImageList,
  WovenImageList,
  CircularIndicator,
  LinearIndicator,
  Templates,
  Restaurant,
  NonProfit,
  ActionButton,
  DryButton,
  ToggleButton,
  OutlinedButton,
  ContainedButton,
  TextButton,
  Divider,
  SingleLineList,
  ThreeLineList,
  TwoLineList,
  Banner,
  Snackbar,
  Tooltip,
  Accordion,
  BottomSheet,
  SideSheet,
  AccordionSingle,
  DropdownMenu,
  Tab,
  BottomBar,
  NavigationDrawer,
  TopBar,
  BottomNavigation,
  NavigationRail,
  Checkbox,
  Label,
  SelectionControl,
  Chip,
  Password,
  Slider,
  DatePicker,
  Radio,
  // Switch,
  Input,
  Select,
  FileUpload,
  AlertDialog,
  ModalBox,
  ConfirmationDialog,
  SimpleDialog,
  Icon,
  Icons,
  About,
  ImageCarousel,
  Team,
  Header1,
  Pricing,
  Hours,
  SpotlightGallery,
  Menu,
  allFeatures
};
