import React from "react";
import chroma from "chroma-js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "react-select";

const colourStyles = {
  control: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: "white",
      width: "240px",
      height: "40px",
      left: "30px",
      top: "586px",
      background: "#ffffff",
      boxSizing: "border-box",
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
    label: "Select state",
    color:'#ffffff'
    
  },
  {
    value: "2",
    label: "Andhra Pradesh",
    
  },
  {
    value: "3",
    label: "Arunachal Pradesh",
    
  },
  {
    value: "4",
    label: "Assam",

  },
  {
    value: "5",
    label: "Bihar",
    
  },
  {
    value: "6",
    label: "Chhattisgarh",
    
  },{
    value: "7",
    label: "Goa",
    
  },{
    value: "8",
    label: "Haryana",
    
  },{
    value:'9',
    label:"Himachal Pradesh"
  },{
    value:'10',
    label:'Jharkhand'
  },
  {
    value:'11',
    label:'Karnataka'
  },{
    value:'12',
    label:'Madhya Pradesh'
  },{
    value:'13'
    ,label:'Maharashtra'
  },{
    value:'14',
    label:'Manipur'
  },{
    value:'15',
    label:'Meghalaya'
  },{
    value:'16',label:"Mizoram"
  },{
    value:'17',label:'Nagaland'
  },{value:'18',label:'Odisha'},
  {value:'19',label:'Punjab',},
  {value:'20',label:'Rajasthan'},
  {value:'21',label:'Sikkim'}
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

const StateDropdown = () => (
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
export default StateDropdown;
