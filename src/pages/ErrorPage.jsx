import { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../components/atoms/buttons/Button';
import HeadingSecondary from '../components/atoms/typography/HeadingSecondary';
import { PublicLayout } from '../components/templates/PublicLayout';

class ErrorPage extends Component {
  render() {
    const history = this.props.history;

    return (
      <PublicLayout>
        <div className="error-page">
          <HeadingSecondary>404</HeadingSecondary>
          <HeadingSecondary>Page not found</HeadingSecondary>
          <Button
            className="error-page__go-home"
            onClick={() => history.replace('/')}
          >
            go on home page
          </Button>
        </div>
      </PublicLayout>
    );
  }
}

export default withRouter(ErrorPage);
