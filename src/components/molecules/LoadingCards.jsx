import { Component } from 'react';

class LoadingCards extends Component {
  render() {
    return (
      <>
        {[null, null, null].map((_, i) => (
          <div
            key={i}
            className="skeleton"
            style={{
              flexBasis: '32%',
              height: '400px',
            }}
          />
        ))}
      </>
    );
  }
}

export default LoadingCards;
