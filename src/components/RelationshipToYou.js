import React from "react";
import chroma from "chroma-js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "react-select";

const colourStyles = {
  control: (styles, { isDisabled }) => {
    return {
      ...styles,
      position: "absolute",
      width: "240px",
      height: "40px",
      left: "300px",
      top: "502px",
      borderRadius: "3px",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  menu: (css) => ({
    ...css,
    width: "150px",
    
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log("option-data", data);
    const color = data.color;
    return {
      ...styles,
      width: "150px",
      

      backgroundColor: isSelected ? "#F1F4F5" : "#FFFFFF",
      Color: isSelected ? "black" : "black",

      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : "black",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },


};
const data = [
  {
    value: "1",
    label: "Others",
    color:'#ffffff'
    
  },
  {
    value: "2",
    label: "Child",
    
  },
  {
    value: "3",
    label: "Mother",
    
  },
  {
    value: "4",
    label: "Father",

  },
  {
    value: "5",
    label: "Daughter",
    
  }
];
const Option = (props) => {
  console.log("props", props);
  const { data, isSelected, innerRef, innerProps } = props;
  const { color, label, value } = data;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: isSelected ? "#E5E5E5" : "#FFFFFF",
        height: "40px",
        flex: 1,
        padding:'20px',
        alignItems: "center",
      }}
    >
      {value === "1" ? null : (
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            margin:'10px',
            verticalAlign:'center',
            backgroundColor: color,
          }}
        ></div>
      )}
      <div>{label}</div>
    </div>
  );
};

const RelationshipToYou = () => (
  <Select
    classNamePrefix="select"
    defaultValue={data[1]}
    label="Single select"
    options={data}
    styles={colourStyles}
    style={{ width: "150px" }}
    menuPosition={"fixed"}
    menuPlacement={"auto"}
    components={{
      DropdownIndicator: () => <ExpandMoreIcon />,
      IndicatorSeparator: () => null,
      Cursor: () => null,
      Option,
    }}
  />
);
export default RelationshipToYou;
