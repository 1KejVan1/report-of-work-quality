function Table() {
  const rel = {
    from: 0,
    length: 15,
  };

  return (
    <table>
      <tbody style={{ display: "flex", flexDirection: "column" }}>
        {Array.from(rel).map((item) => {
          return (
            <tr
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              key={Math.random()}
            >
              {Array.from(rel).map((item, index) => {
                return (
                  <td style={{ display: "flex", width: "100px" }} key={index}>
                    <input style={{ width: "inherit" }} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
