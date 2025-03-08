import React from 'react';
import ViewAttendanceReport from './ViewAttendanceReport';

const ParentComponent = () => {
  const weeklyData = [25, 28, 27, 30]; // Example data for weekly attendance
  const monthlyData = [100, 110, 105, 115, 120, 125, 130, 135, 140, 145, 150, 155]; // Example data for monthly attendance
  const quarterlyData = [300, 320, 310, 330]; // Example data for quarterly attendance

  return (
    <div>
      <ViewAttendanceReport
        weeklyData={weeklyData}
        monthlyData={monthlyData}
        quarterlyData={quarterlyData}
      />
      
    </div>
  );
};

export default ParentComponent;