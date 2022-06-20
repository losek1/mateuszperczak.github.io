import { useState, createElement, useEffect } from "react";
import styled from "@emotion/styled";
import { useSpring } from "react-spring";
import Icon from "../Icon/Icon";
import ComboBoxList from "./ComboBoxList";

const StyledComboBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 150px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const ComboBox = ({
  itemsSource = [],
  placeholderText = "",
  onSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(placeholderText);

  useEffect(() => {
    setSelectedValue(placeholderText);
  }, [placeholderText]);

  const animatedList = useSpring({
    height: isOpen ? `${itemsSource.length * 130}%` : "0%",
    visibility: isOpen ? "visible" : "hidden",
    config: {
      tension: 300,
      mass: 1.1,
    },
  });

  return (
    <StyledComboBox onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedValue}</span>
      <Icon size={0.9}>{isOpen ? "\uE010" : "\uE0E5"}</Icon>
      <ComboBoxList style={animatedList} onMouseLeave={() => setIsOpen(false)}>
        {itemsSource.map((item, index) => {
          return createElement(item.component, {
            name: item.name,
            values: item.values,
            onSelectionChange: (value) => {
              onSelectionChange(value);
              setSelectedValue(item.name);
            },
            key: index,
          });
        })}
      </ComboBoxList>
    </StyledComboBox>
  );
};

export default ComboBox;