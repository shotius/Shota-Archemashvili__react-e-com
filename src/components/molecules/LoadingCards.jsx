import { Component } from 'react';

class LoadingCards extends Component {
  render() {
    return (
      <>
        {[null, null, null].map((_, i) => (
          <div key={i} className="skeleton skeleton--card" />
        ))}
      </>
    );
  }
}

export default LoadingCards;
