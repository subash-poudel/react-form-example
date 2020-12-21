import React, { Component } from "react";

class SearchWidgetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
    };
    this.initWidget();
  }

  initWidget() {
    // timeout is required because of script execution order
    setTimeout(() => {
      console.log(window.vyagutaSearch, 'init widget react')
      window.vyagutaSearch.init();
      window.vyagutaSearch.searchFunc = () => {};

      // window.vyagutaSearch.search = somefunc;
    }, 100);
  }

  componentDidMount() {
  
  }

  componentWillUnmount() {
    if (window.vyagutaSearch) {
      window.vyagutaSearch.destroy();
    }
  }

  render() {
    return <div id="vyaguta-widget">Search Widget</div>;
  }
}

export default SearchWidgetContainer;
