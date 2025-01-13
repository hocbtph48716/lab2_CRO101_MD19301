// Bài 1: Xử lý dữ liệu với các phương thức của mảng
const class1 = [
    { mssv: 'PS0000', name: 'Nguyen Van A', avgPoint: 8.9, avgTraningPoint: 7, status: 'pass' },
    { mssv: 'PS0001', name: 'Nguyen Van B', avgPoint: 4.9, avgTraningPoint: 10, status: 'pass' }
  ];
  
  const class2 = [
    { mssv: 'PS0002', name: 'Nguyen Van C', avgPoint: 4.9, avgTraningPoint: 10, status: 'failed' },
    { mssv: 'PS0003', name: 'Nguyen Van D', avgPoint: 10, avgTraningPoint: 10, status: 'pass' },
    { mssv: 'PS0004', name: 'Nguyen Van E', avgPoint: 10, avgTraningPoint: 2, status: 'pass' }
  ];
  
  // Gộp và lọc sinh viên
  const allStudents = class1.concat(class2).filter(student => student.status !== 'failed');
  
  // Sắp xếp danh sách
  const topByAvgPoint = [...allStudents].sort((a, b) => b.avgPoint - a.avgPoint);
  const topByTrainingPoint = [...allStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
  
  // Lấy thông tin Ong vàng
  const ongVangByAvgPoint = topByAvgPoint[0];
  const ongVangByTrainingPoint = topByTrainingPoint[0];
  
  console.log('Danh sách sinh viên theo điểm số từ cao xuống thấp:', topByAvgPoint);
  console.log('Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:', topByTrainingPoint);
  console.log('Ong vàng theo điểm số:', ongVangByAvgPoint);
  console.log('Ong vàng theo điểm rèn luyện:', ongVangByTrainingPoint);
  
  // Bài 2: Xử lý dữ liệu với các phương thức của object
  const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' }
  ];
  
  const newData = Object.fromEntries(
    oldData.filter(item => item.code && item.name).map(item => [item.code, item])
  );
  
  console.log('Dữ liệu sau khi xử lý:', newData);
  console.log('Thông tin sản phẩm có mã "ab":', newData['ab']);
  
  // Bài 3: Xử lý bất đồng bộ trong JavaScript
  const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 1 hoàn thành'), 1000));
  const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 2 hoàn thành'), 2000));
  const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 thất bại'), 1500));
  
  // Yêu cầu 1: Dừng khi một promise thất bại
  Promise.all([promise1, promise2, promise3])
    .then(results => console.log('Kết quả:', results))
    .catch(error => console.error('Lỗi:', error));
  
  // Yêu cầu 2: Luôn chạy bất kể promise nào thất bại hay thành công
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log('Tất cả kết quả:', results))
    .finally(() => console.log('Kết thúc tất cả promises.'));
  