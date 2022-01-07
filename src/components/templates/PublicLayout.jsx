import { PageHeader } from '../organizms/PageHeader';
import { Component } from 'react';

export class PublicLayout extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div style={{ paddingTop: 80 }}>{this.props.children}</div>
      </div>
    );
  }
}
