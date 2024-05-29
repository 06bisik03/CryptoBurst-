import React from "react";
import styles from "../../../Styles/Pages/Markets/TradingData/TradingSubList.module.css";
import { CustomDropdownProps } from "../../../types";
import { useState,useEffect,useRef } from "react";
const CustomDropdown: React.FC<CustomDropdownProps> = ({
    options,
    selected,
    onChange,
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const handleToggle = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option: string) => {
      onChange(option);
      setIsOpen(false);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <div className={styles.dropdown} ref={dropdownRef}>
        <div className={styles.selected} onClick={handleToggle}>
          {selected}
          <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option: string) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  export default CustomDropdown;