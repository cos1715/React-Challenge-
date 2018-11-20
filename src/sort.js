const sortTable = (arr, value) => {
  const mass = arr.slice(0);
  mass.sort((a, b) => {
    if (a.value < b.value)
      return -1;
    if (a.value > b.value)
      return 1;
    return 0;
  });
  return mass;
}

export default sortTable;