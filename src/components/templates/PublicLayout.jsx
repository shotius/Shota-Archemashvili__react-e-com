import PageHeader from '../organizms/page-header/PageHeader';
import { Component } from 'react';

export class PublicLayout extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div className="-center_content -pt-72">
          <div className="container--lg">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
