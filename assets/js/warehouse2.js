let dt_User;

$(document).ready(function () {
  // Ensure that the table is targeted correctly
  var dt_user_table = $('.datatables-users');

  if (dt_user_table.length) {
    var dt_user = dt_user_table.DataTable({
      ajax: assetsPath + 'json/warehouse2.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'name' },
        { data: 'address' },
        { data: 'availability' },
        { data: 'area' },
        { data: 'zona' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          targets: 0, // Kolom yang akan berisi checkbox
          orderable: false, // Menonaktifkan pengurutan untuk kolom ini
          render: function (data, type, row) {
            // Mengembalikan checkbox dengan ID dari baris data
            return '<input type="checkbox" class="form-check-input" data-id="' + row.id + '">';
          }
        },
        {
          targets: 1, // Kolom yang akan menampilkan ID
          data: 'id', // Ambil ID dari data
          render: function (data, type, row) {
            return data; // Menampilkan ID
          }
        },
        {
          targets: 2,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: -1, // Actions
          title: 'Actions',
          orderable: false,
          render: function () {
            return `
              <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" 
                      onclick="window.location.href='form-warehouse2.html'">
                      <i class="ri-pencil-line ri-20px"></i>
              </button>
              <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteModal" 
                      onclick="confirmDelete()">
                      <i class="ri-delete-bin-line ri-20px"></i>
              </button>`;
          }
        }
      ],
      searching: false // Disable search functionality
      // dom: '<"top"i>rt<"bottom"lp><"clear">' // Customize DataTable layout
    });
  }
});
