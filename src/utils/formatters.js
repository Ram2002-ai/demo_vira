export const formatDate = (value) => new Date(value).toLocaleString();
export const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
export const formatFileSize = (bytes) => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let idx = 0;
  let size = bytes;
  while (size >= 1024 && idx < units.length - 1) {
    size /= 1024;
    idx += 1;
  }
  return `${size.toFixed(1)} ${units[idx]}`;
};
