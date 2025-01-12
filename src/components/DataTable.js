import '../styles/DataTable.css';

export function DataTable({ pageNumber, data }) {
  return (
    <table>
      <caption>Data Table showing funding details</caption>
      <thead>
        <tr>
          <th scope="col">S No.</th>
          <th scope="col">Amount Pledged</th>
          <th scope="col">Percentage Funded</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item['s.no']}</td>
            <td>{item['amt.pledged']}</td>
            <td>{item['percentage.funded']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}