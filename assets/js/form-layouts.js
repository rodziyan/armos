/**
 * Form Layout Vertical
 */
'use strict';

$(document).ready(function () {
  // Define assetsPath if not already defined
  var assetsPath = 'assets/json/warehouse.json';

  // Initialize DataTable
  var dt_warehouse_table = $('.datatables-warehouse');

  // Check if table element exists
  if (dt_warehouse_table.length) {
    var dt_warehouse = dt_warehouse_table.DataTable({
      ajax: assetsPath + 'json/warehouse.json',
      columns: [
        { data: 'id' },
        { data: 'lokasi_tipe' },
        { data: 'alamat' },
        { data: 'longitude' },
        { data: 'latitude' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          targets: 1,
          orderable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          orderable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            return '<span>' + full['longitude'] + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            return '<span>' + full['latitude'] + '</span>';
          }
        },
        {
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full, meta) {
            return '<button class="btn btn-sm btn-icon btn-text-danger rounded-pill waves-effect delete-record" data-bs-toggle="tooltip" title="Delete"><i class="ri-delete-bin-7-line ri-20px"></i></button>';
          }
        }
      ]
    });

    // Delete Record functionality
    $('.datatables-users tbody').on('click', '.delete-record', function () {
      // Remove the record from the DataTable
      dt_user.row($(this).parents('tr')).remove().draw();
    });
  } else {
    // Debugging: Table not found
    console.error('Table element not found');
  }
});
