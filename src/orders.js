export function paginate(list, page = 1, size = 20) {
  const start = (page - 1) * size;
  return list.slice(start, start + size);
}
