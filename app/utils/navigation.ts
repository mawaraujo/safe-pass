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

  static setParams(params: object): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.setParams(params as never);
    }
  }
}

export default Navigation;
