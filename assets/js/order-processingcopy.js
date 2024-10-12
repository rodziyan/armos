dt_User = $('.datatables-users').DataTable({
  ajax: {
    url: assetsPath + 'json/order-processingCopy.json',
    dataSrc: '', // If the JSON object has no wrapper, set to ''.
    error: function (xhr, error, code) {
      console.error('Error loading data:', error, code);
      alert('Failed to load data.');
    }
  },
  columns: [
    { data: 'status' },
    { data: 'toko' },
    { data: 'jenis_toko' },
    { data: 'id_order' },
    { data: 'tanggal_order' },
    { data: 'tanggal_kirim' },
    { data: 'jumlah_order' },
    { data: 'jumlah_terkirim' },
    { data: 'inv_status' },
    { data: 'harga' },
    { data: 'tanggal' },
    { data: 'waktu_kirim' },
    { data: 'doc_ref' }
  ],
  columnDefs: [
    {
      targets: 0, // 'status' column
      data: 'status',
      render: function (data, type, row) {
        return data == 1 ? '<span style="color: blue;">New</span>' : '<span style="color: red;">Pending</span>';
      }
    },
    {
      targets: 1, // 'toko' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 2, // 'jenis_toko' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 3, // 'id_order' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 4, // 'tanggal_order' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 5, // 'tanggal_kirim' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 6, // 'jumlah_order' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 7, // 'jumlah_terkirim' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 8, // 'inv_status' column
      data: 'inv_status',
      render: function (data, type, row) {
        return data == 1
          ? '<span style="color: green;">Full Fill</span>'
          : '<span style="color: red;">Not Full Fill</span>';
      }
    },
    {
      targets: 9, // 'harga' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 10, // 'tanggal' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 11, // 'waktu_kirim' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    },
    {
      targets: 12, // 'doc_ref' column
      render: function (data) {
        return '<span>' + data + '</span>';
      }
    }
  ]
});
