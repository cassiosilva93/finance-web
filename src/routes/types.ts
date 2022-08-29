import { ComponentType } from 'react';
import { RouteProps as ReactDOMRouteProps } from 'react-router-dom';

export default interface PrivateRouteProps extends ReactDOMRouteProps {
  isPrivate: boolean;
  component: ComponentType;
}
