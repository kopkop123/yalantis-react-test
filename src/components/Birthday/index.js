import React from "react";
import { months, sortedMonths } from "../../config/api";

const Birthday = ({ checkedData }) => {
  const parseDate = (date) => {
    const parsedDate = Date.parse(date),
      newDate = new Date(parsedDate),
      day = newDate.getDate(),
      month = newDate.getMonth(),
      year = newDate.getFullYear();

    return `${day} ${months[month]}, ${year} year`;
  };

  const createBirthdayItem = (monthSection, index) => {
    return monthSection.length !== 0 ? (
      <div className="birthday__section">
        <div className="birthday__month">{sortedMonths[index]}</div>
        <ul className="birthday__items">
          {monthSection.map((item) => {
            return (
              <div className="birthday__item" key={item.id}>
                {item.lastName} {item.firstName} - {parseDate(item.dob)}
              </div>
            );
          })}
        </ul>
      </div>
    ) : null;
  };

  const createBirthdaySections = () => {
    return checkedData.length === 0 ? (
      <div>Employees List is empty</div>
    ) : (
      sortedMonths.map((curVal, index) => {
        const monthSection = checkedData.filter(
          (date) => months[new Date(Date.parse(date.dob)).getMonth()] === curVal
        );

        return (
          <div key={curVal}>{createBirthdayItem(monthSection, index)}</div>
        );
      })
    );
  };

  return (
    <div className="birthday">
      <div className="birthday__header">Employees birthday</div>
      <div className="birthday__sections">{createBirthdaySections()}</div>
    </div>
  );
};

export default Birthday;
