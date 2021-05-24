import React from "react";
import chroma from "chroma-js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "react-select";

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 5,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 8,
    width: 8,
    

  },
});

const colourStyles = {
  control: (styles, { isDisabled }) => {
    return {
      ...styles,
    //   backgroundColor: "white",
      position: "absolute",
      width: "145px",
    //   height: "40px",
      left: "-6px",
      top: "-20px",
      height:'40px',

    //   marginLeft:'12px',
          background: "#ffffff",
    //   marginTop:'256px',
    //   border: "1px solid #036FCB",
      // padding:'1px',
      boxSizing: "border-box",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
      borderRadius: "8px",
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

  input: (styles) => {
    return { ...styles, };
  },
  placeholder: (styles) => {
    return { ...styles, };
  },
  singleValue: (styles, { data }) => {
    return { ...styles };
  },
};
const data = [
  {
    value: "1",
    label: "Past 3 months",
    
  },
  {
    value: "2",
    label: "Past 3 months",
    // color: "#27AE60",
  },
  {
    value: "3",
    label: "Past 9 months",
    // color: "#F2994A",
  },
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

const Monthdropdown = () => (
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
export default Monthdropdown;
