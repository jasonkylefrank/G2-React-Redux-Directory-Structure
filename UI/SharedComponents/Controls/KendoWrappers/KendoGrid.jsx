import { Convert, Date } from "Utils/G2Scripts.js"



// Don't store the import so that all the
import from "somewhere/KendoGridStyles.css";


export default class KendoGrid extends React.Component {

  // pseudo code...
  componentDidMount() {
    $(GetDomNode(this.refs.root)).kendGrid(
      this.props.options;
    )//
  }

  render() {
    return (
      <div ref="root" />
    );
  }
}
