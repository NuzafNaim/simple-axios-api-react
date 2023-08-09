import axios from 'axios';
import React from 'react';

const App = () => {
  async function getList() {
    let result = await axios.get('https://crud.teamrabbil.com/api/v1/ReadProduct');
    
    if (result.status == 200) {
      let list = result.data['data'];
      list.forEach(item => {
       let sai = document.getElementById('itemList').innerHTML += (
          `
          <tr>
          <td>${item['ProductName']}</td>
          <td>${item['ProductCode']}</td>
          <td>${item['UnitPrice']}</td>
          <td>${item['ProductName']}</td>
          <td>${item['ProductName']}</td>
          <td>${item['ProductName']}</td>
          <td>${item['ProductName']}</td>
          </tr>
          `
        )
      });
    } else {
      console.log('Error');
    }
    
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Unit Price</th>
            <th>Product Qty</th>
            <th>Product Total Price</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody id="itemList">

        </tbody>
      </table>
    </div>
  );
};

export default App;