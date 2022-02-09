import { useParams } from 'react-router-dom';

// HOC wrapes class component and gives access to che react router hook
// I left this FC here doe to its flexibility of getting pathname out of props
// 'withRouter' hoc has deep nesting
export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
