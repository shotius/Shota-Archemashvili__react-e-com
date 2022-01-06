import { Component } from 'react';

export class PageHeader extends Component {
  render() {
    return (
      <div className="-center ">
        <div className="page_wrap_out -justify-between -position-relative">
          <div className='-justify-between navigation '>
            <p className='text__regular'>woman</p>
            <p className='text__regular'>men</p>
            <p className='text__regular'>kids</p>
          </div>
          <h1 className='-position-absolute -center-absolute'>rect</h1>
          <div className='-justify-between'>
            <div className='-mx-10'>$</div>
            <div>basket</div>
          </div>
        </div>
      </div>
    );
  }
}
