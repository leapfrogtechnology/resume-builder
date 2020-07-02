import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "@react-pdf/renderer";
import * as pdfStyles from "components/pdf/pdf.styles.js";

const List = ({ title, items }) => {
  const listItems = items.map((item, index) => (
    <ListItem key={index} item={item} />
  ));

  if (items.length < 1) {
    return <></>;
  }

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text>{title}</Text>
      <View>{listItems}</View>
    </View>
  );
};

const ListItem = ({ item }) => {
  return (
    <Text style={pdfStyles.workExpStyles.list}>&#8226; {item.trim()}</Text>
  );
};

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

ListItem.propTypes = {
  item: PropTypes.string,
};

export default List;
