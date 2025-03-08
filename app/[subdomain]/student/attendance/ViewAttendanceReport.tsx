
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAttendanceReport = ({ weeklyData, monthlyData, quarterlyData }:any) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
    { id: 2, name: 'Jane Doe', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
    { id: 3, name: 'Alice Brown', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
    { id: 4, name: 'Bob Smith', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
    // Add more students here
  ]);

  const weeklyChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Attendance',
        data: weeklyData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const monthlyChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Attendance',
        data: monthlyData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const quarterlyChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Attendance',
        data: quarterlyData,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Attendance Report</h2>

      <div className="mt-5">
        <h3>Weekly Attendance</h3>
        {/* <Bar data={weeklyChartData} /> */}
      </div>

      <div className="mt-5">
        <h3>Monthly Attendance</h3>
        {/* <Bar data={monthlyChartData} /> */}
      </div>

      <div className="mt-5">
        <h3>Quarterly Attendance</h3>
        {/* <Bar data={quarterlyChartData} /> */}
      </div>

      <div className="mt-5">
        <h3>Attendance Summary</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Period</th>
              <th>Total Present</th>
              <th>Total Absent</th>
              <th>Percentage Present</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly</td>
              <td>{weeklyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{4 * students.length - weeklyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{((weeklyData.reduce((a: any, b: any) => a + b, 0) / (4 * students.length)) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>{monthlyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{12 * students.length - monthlyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{((monthlyData.reduce((a: any, b: any) => a + b, 0) / (12 * students.length)) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Quarterly</td>
              <td>{quarterlyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{4 * students.length - quarterlyData.reduce((a: any, b: any) => a + b, 0)}</td>
              <td>{((quarterlyData.reduce((a: any, b: any) => a + b, 0) / (4 * students.length)) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <h3>Students' Attendance</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Monday Morning</th>
              <th>Monday Afternoon</th>
              <th>Tuesday Morning</th>
              <th>Tuesday Afternoon</th>
              <th>Wednesday Morning</th>
              <th>Wednesday Afternoon</th>
              <th>Thursday Morning</th>
              <th>Thursday Afternoon</th>
              <th>Friday Morning</th>
              <th>Friday Afternoon</th>
              <th>Total Present</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {student.attendance.flat().map((att, index) => (
                  <td key={index}>{att}</td>
                ))}
                <td>{student.attendance.flat().filter(att => att === 'P').length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAttendanceReport;
// import React, { useState } from 'react';
// import 'chart.js'
// import { Bar } from 'react-chartjs-2';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ViewAttendanceReport = ({ weeklyData, monthlyData, quarterlyData }:any) => {
//     const [students, setStudents] = useState([
//         { id: 1, name: 'John Doe', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
//         { id: 2, name: 'Jane Doe', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
//         { id: 3, name: 'Alice Brown', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
//         { id: 4, name: 'Bob Smith', attendance: [['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P'], ['P', 'P']] },
//         // Add more students here
//       ]);

//     const weeklyChartData = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//     datasets: [
//       {
//         label: 'Attendance',
//         data: weeklyData,
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };

//   const monthlyChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//     datasets: [
//       {
//         label: 'Attendance',
//         data: monthlyData,
//         backgroundColor: 'rgba(153, 102, 255, 0.6)',
//       },
//     ],
//   };

//   const quarterlyChartData = {
//     labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//     datasets: [
//       {
//         label: 'Attendance',
//         data: quarterlyData,
//         backgroundColor: 'rgba(255, 159, 64, 0.6)',
//       },
//     ],
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Attendance Report</h2>

//       <div className="mt-5">
//         <h3>Weekly Attendance</h3>
//         {/* <Bar data={weeklyChartData} /> */}
//       </div>

//       <div className="mt-5">
//         <h3>Monthly Attendance</h3>
//         {/* <Bar data={monthlyChartData} /> */}
//       </div>

//       <div className="mt-5">
//         <h3>Quarterly Attendance</h3>
//         {/* <Bar data={quarterlyChartData} /> */}
//       </div>

//       <div className="mt-5">
//         <h3>Attendance Summary</h3>
//         <table className="table table-bordered table-striped">
//           <thead className="thead-dark">
//             <tr>
//               <th>Period</th>
//               <th>Total Present</th>
//               <th>Total Absent</th>
//               <th>Percentage Present</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Weekly</td>
//               <td>{weeklyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{4 * students.length - weeklyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{((weeklyData.reduce((a: any, b: any) => a + b, 0) / (4 * students.length)) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//               <td>Monthly</td>
//               <td>{monthlyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{12 * students.length - monthlyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{((monthlyData.reduce((a: any, b: any) => a + b, 0) / (12 * students.length)) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//               <td>Quarterly</td>
//               <td>{quarterlyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{4 * students.length - quarterlyData.reduce((a: any, b: any) => a + b, 0)}</td>
//               <td>{((quarterlyData.reduce((a: any, b: any) => a + b, 0) / (4 * students.length)) * 100).toFixed(2)}%</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewAttendanceReport;