import React from "react";

import { alphabet } from "../../config/api";

const Employees = ({ data, checkedHandler }) => {
  const createSectionItem = (letterSection) => {
    return letterSection.length !== 0 ? (
      letterSection.map((item) => {
        return (
          <div className="employees__item" key={item.id}>
            <div className={item.checked ? "employees__name" : null}>
              {item.lastName} {item.firstName}
            </div>

            <label>
              <input
                type="radio"
                name={item.id}
                checked={!item.checked ? true : false}
                onChange={() => checkedHandler(item)}
              />{" "}
              not active
            </label>
            <label>
              <input
                type="radio"
                name={item.id}
                checked={item.checked ? true : false}
                onChange={() => checkedHandler(item)}
              />{" "}
              active
            </label>
          </div>
        );
      })
    ) : (
      <div className="employees__item employees__item_empty">----</div>
    );
  };

  const createSections = () => {
    return alphabet.map((letter) => {
      const letterSection = data.filter((item) => item.lastName[0] === letter);
      return (
        <div className="employees__section" key={letter}>
          <div className="employees__letter">{letter}</div>
          <div className="employees__items">
            {createSectionItem(letterSection)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="employees">
      <div className="employees__header">Employees</div>
      <div className="employees__sections">{createSections()}</div>
    </div>
  );
};

export default Employees;
