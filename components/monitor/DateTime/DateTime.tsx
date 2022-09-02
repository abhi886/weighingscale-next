import React, { useEffect, useState } from "react";

import { date } from "../../utils/date";

function DateTime() {
  const [dateDetails, SetDateDetails] = useState({
    year: 0,
    month: 0,
    day: 0,
    time: "",
  });
  useEffect(() => {
    setTimeout(() => {
      const { year, month, day, time } = date();
      SetDateDetails({ year, month, day, time });
    }, 1000);
  });
  const { year, month, day, time } = dateDetails;
  return (
    <div
      data-testid='date-element'
      className='text-xxs flex justify-end '
    >{`${year}-${month}-${day} | ${time} `}</div>
  );
}

export default DateTime;
