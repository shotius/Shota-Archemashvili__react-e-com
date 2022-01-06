import { PageHeader } from '../organizms/PageHeader';
import { Component } from 'react';

export class PublicLayout extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
