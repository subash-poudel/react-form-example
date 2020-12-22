import React from "react";
import { useSearchLoader } from "./useSearchLoader";

const SearchWidgetContainer = () => {
  return (
    <div id="vyaguta-widget">
      <SearchWidget />
    </div>
  );
};

const SearchWidget = () => {
  const { loading, error } = useSearchLoader(() => {
    if (window.vyagutaSearch) {
      window.vyagutaSearch.init();
    }
  });

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Script loading error....</div>;
  }

  return <div />;
};

export default SearchWidgetContainer;
