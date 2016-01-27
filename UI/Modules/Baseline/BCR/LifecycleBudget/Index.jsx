// import the generic LifecycleBudget component (capable of being used in WBS Dashboard or BCR)
import LifecycleBudget from 'LifecycleBudget';


class BCRLifecycleBudget extends React.Component {

  // Handle fetching data, dispatching actions, etc...

  handleFoo() {

    dispatch(someAction);
  }


  // oversimplified for example sake
  render() {
    return <LifecycleBudget items={this.props.items} onFoo="handleFoo" />;
  }
}


// Do redux connect() and mapStateToProps type stuff...
