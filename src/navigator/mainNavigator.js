import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile56064Navigator from '../features/UserProfile56064/navigator';
import Tutorial56063Navigator from '../features/Tutorial56063/navigator';
import NotificationList56035Navigator from '../features/NotificationList56035/navigator';
import Settings56034Navigator from '../features/Settings56034/navigator';
import Settings56026Navigator from '../features/Settings56026/navigator';
import UserProfile56024Navigator from '../features/UserProfile56024/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile56064: { screen: UserProfile56064Navigator },
Tutorial56063: { screen: Tutorial56063Navigator },
NotificationList56035: { screen: NotificationList56035Navigator },
Settings56034: { screen: Settings56034Navigator },
Settings56026: { screen: Settings56026Navigator },
UserProfile56024: { screen: UserProfile56024Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
