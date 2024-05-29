import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
 const PageDash = () => {
  return (
    <div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [7, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={1000}
        height={500}
      />
    </div>
  );
};

export default PageDash