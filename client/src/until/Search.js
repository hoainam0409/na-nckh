const search = (rows = [], searchValue = '') =>
  rows.filter(row => // Lọc các rows match với searchValue
    Object.values(row).some(value => // Check nếu ít nhất 1 column match với searchValue
      String(value)
        .toLowerCase()
        .includes(String(searchValue).toLowerCase()) // Check nếu data chứa searchValue
    )
  )

  export default search