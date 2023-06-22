// import React , {Component} from 'react';
// import './list.css'

//  //  data for students
// const students = [
//     {
//       id: 1,
//       name: 'John Doe',
//       photo: 'https://th.bing.com/th/id/OIP.E9iPyTLlln60HynLC4JCBQHaE8?w=222&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
//       contactNo: '1234567890',
//       address: '123 Main Street',
//       dob: '1998-05-15'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       photo: 'path-to-photo',
//       contactNo: '9876543210',
//       address: '456 Elm Street',
//       dob: '1999-02-28'
//     }
//     // Add more students as needed
//   ];
// class  StudentList  extends Component {
 
//   // search bar
//   state = {
//     searchValue: '',
//     filteredStudents: students
//   };

//   handleSearchChange = (event) => {
//     const searchValue = event.target.value;
//     const filteredStudents = students.filter((student) =>
//       student.name.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     this.setState({ searchValue, filteredStudents });
//   };

//   render(){
//     const { searchValue, filteredStudents } = this.state;
//     return (
//     <>
//     <div style={{margin:"5rem"}}>
//       <h1>Student List</h1>
//       <div style={{display:"flex", flexDirection:"row"}}>
//       <input
//             type="text"
//             placeholder="Search by name"
//             value={searchValue}
//             onChange={this.handleSearchChange}
//             style={{width:"95%"}}
//           />
//           <button style={{marginLeft:"auto"}}>Search</button>
//       </div>
//       <table >
//         <thead>
//           <tr>
//             <th style={{heigth:"8rem", width:"8rem"}} >Photo</th>
//             <th>Name</th>
//             <th>Contact No.</th>
//             <th>Address</th>
//             <th>DOB</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.id}>
//               <td><img src={student.photo} alt={student.name} /></td>
//               <td>{student.name}</td>
//               <td>{student.contactNo}</td>
//               <td>{student.address}</td>
//               <td>{student.dob}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };
// }
// export default StudentList;

import React, { Component, createRef } from 'react';
import Chart from 'chart.js/auto';
import './list.css';


//  
class StudentList extends Component {
    chartRef = createRef();
  state = {
    searchValue: '',
    filteredStudents: [],
  };

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    // Make an API call to fetch student data
    fetch('https://example.com/api/students')
      .then(response => response.json())
      .then(data => {
        this.setState({ filteredStudents: data });
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };

  handleSearchChange = event => {
    const searchValue = event.target.value;
    const { filteredStudents } = this.state;
    const filteredData = filteredStudents.filter(student =>
      student.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    this.setState({ searchValue, filteredStudents: filteredData });
  };
  //In the componentDidMount() method, after fetching the student data, update the state with the active IDs count and call the method to create the chart:
componentDidMount() {
    this.fetchStudents();
  }
  
  fetchStudents = () => {
    // Make an API call to fetch student data
    fetch('https://example.com/api/students')
      .then(response => response.json())
      .then(data => {
        const filteredStudents = data;
        const activeIdsCount = filteredStudents.filter(student => student.active).length;
        this.setState({ filteredStudents, activeIdsCount }, () => {
          this.createChart();
        });
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };
//Create a method createChart() to generate the bar chart using the Chart.js library:
createChart = () => {
    const { filteredStudents, activeIdsCount } = this.state;
  
    const createdIdsCount = filteredStudents.length;
  
    const chartConfig = {
      type: 'bar',
      data: {
        labels: ['Created IDs', 'Active IDs'],
        datasets: [
          {
            label: 'Count',
            data: [createdIdsCount, activeIdsCount],
            backgroundColor: ['#36a2eb', '#4caf50'],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    };
  
    new Chart(this.chartRef.current, chartConfig);
  };

  render() {
    const { searchValue, filteredStudents } = this.state;

    return (
      <>
        <div style={{ margin: '5rem' }}>
          <h1>Student List</h1>
          <canvas ref={this.chartRef} style={{ marginBottom: '1rem' }}></canvas>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="text"
              placeholder="Search by name"
              value={searchValue}
              onChange={this.handleSearchChange}
              style={{ width: '95%' }}
            />
            <button style={{ marginLeft: 'auto' }}>Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Created</th>
                <th style={{ height: '8rem', width: '8rem' }}>Photo</th>
                <th>Name</th>
                <th>Contact No.</th>
                <th>Address</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.created}</td>
                  <td>
                    <img src={student.photo} alt={student.name} />
                  </td>
                  <td>{student.name}</td>
                  <td>{student.contactNo}</td>
                  <td>{student.address}</td>
                  <td>{student.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default StudentList;


