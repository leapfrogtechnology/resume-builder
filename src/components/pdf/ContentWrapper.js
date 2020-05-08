/**
 * HOC that renders other components
 * @param {string} heading Title to show.
 * @param {data} data Data to pass to WrappedComponent.
 * @param {React.Component} WrappedComponent Component to render.
 */
const ContentWrapper = ({ heading, data, WrappedComponent, experience = null }) => {
  if (!data) {
    return <></>;
  }

  const filteredData = data.filter(value => !value.hidden); //Remove hidden data

  if (filteredData.length < 1) {
    return <></>;
  } else {
    if (experience) {
      return <WrappedComponent heading={heading} data={filteredData} experience={experience} />;
    }
    return <WrappedComponent heading={heading} data={filteredData} />;
  }
};

export default ContentWrapper;
