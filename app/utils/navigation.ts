import {Screens} from '../res';
import {createNavigationContainerRef} from '@react-navigation/native';

class Navigation {
  static navigationRef = createNavigationContainerRef()

  static goBack(): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.goBack();
    }
  }

  /**
   * Fix this method, please
   */
  static navigate(screenName: string, params?: any): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(
        screenName as never,
        params as never,
      );
    }
  }

  static getIcon(routeName: string): string {
    switch (routeName) {
      case Screens.main.name:
        return Screens.main.icon;

      case Screens.addPassword.name:
        return Screens.addPassword.icon;

      case Screens.settings.name:
        return Screens.settings.icon;
      default:
        return '';
    }
  }

}

export default Navigation;
