import { useNavigate } from 'react-router-dom';

// HOC wraps class component and gives access to the router navigation hook
export function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
