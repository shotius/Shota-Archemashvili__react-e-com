import { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../components/atoms/buttons/Button';
import HeadingSecondary from '../components/atoms/typography/HeadingSecondary';
import TextOnMiddleOfPage from '../components/molecules/TextOnMiddleOfPage';
import { PublicLayout } from '../components/templates/PublicLayout';

class ErrorPage extends Component {
  render() {
    const history = this.props.history;

    return (
      <PublicLayout>
        <TextOnMiddleOfPage>
          <HeadingSecondary>404</HeadingSecondary>
          <HeadingSecondary>Page not found</HeadingSecondary>
          <Button
            className="error-page__go-home"
            onClick={() => history.replace('/')}
          >
            go on home page
          </Button>
        </TextOnMiddleOfPage>
      </PublicLayout>
    );
  }
}

export default withRouter(ErrorPage);
