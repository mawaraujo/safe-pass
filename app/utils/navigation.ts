import {Screens} from '../res';
import {createNavigationContainerRef} from '@react-navigation/native';

class Navigation {
  static navigationRef = createNavigationContainerRef()

  static goBack() {
    if (this.navigationRef.isReady()) {
      this.navigationRef.goBack();
    }
  }

  static getIcon(routeName: string) {
    switch (routeName) {
      case Screens.mainStack.name:
        return Screens.mainStack.icon;

      default: '';
    }
  }

}

export default Navigation;
