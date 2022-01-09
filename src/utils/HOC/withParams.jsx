import { useParams } from 'react-router-dom';

// HOC wrapes class component and gives access to che react router hook
export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
