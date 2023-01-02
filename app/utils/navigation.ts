import {Screens} from '../res';
import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

function getIcon(routeName: string) {
  switch (routeName) {
    case Screens.mainStack.name:
      return Screens.mainStack.icon;

    default: '';
  }
}

export default {
  navigationRef,
  navigate,
  goBack,
  getIcon,
};
