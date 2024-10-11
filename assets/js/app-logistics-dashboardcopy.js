'use strict';

$(function () {
  // Variable declaration for table
  var dt_dashboard_table = $('.dt-route-vehicles');

  // On route vehicles DataTable
  if (dt_dashboard_table.length) {
    var dt_dashboard = dt_dashboard_table.DataTable({
      ajax: assetsPath + 'json/logistics-dashboardcopy.json',
      columns: [
        { data: 'id' },
        { data: 'plat_no_kendaraan' }, // Di sini, tidak ada link
        { data: 'waktu_mulai' },
        { data: 'estimasi' },
        { data: 'lokasi_terakhir' },
        { data: 'progress' }
      ],
      columnDefs: [
        {
          // Checkbox Column (if exists)
          targets: 0, // Menentukan kolom mana yang berisi checkbox
          render: function (data, type, full, meta) {
            // Hapus render atau set kolom ini kosong
            return ''; // Hapus checkbox dengan mengembalikan string kosong
          }
        },
        {
          // Plat No Kendaraan (Dengan Link)
          targets: 1,
          responsivePriority: 1,
          render: function (data, type, full, meta) {
            var plat_no_kendaraan = full['plat_no_kendaraan']; // Ambil plat nomor kendaraan dari data

            // Membuat output HTML dengan link
            var row_output =
              '<div class="d-flex justify-content-start align-items-center user-name">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar me-3">' +
              '<span class="avatar-initial rounded-circle bg-label-secondary">' +
              '<i class="ri-truck-line ri-28px"></i>' + // Ikon truk
              '</span>' +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<a class="text-heading fw-medium" href="in-deliverymaps.html">' + // Membuat link ke halaman in-deliverymaps.html
              plat_no_kendaraan + // Plat nomor kendaraan dalam link
              '</a>' +
              '</div>' +
              '</div>';

            return row_output;
          }
        },
        {
          // Waktu Mulai
          targets: 2,
          render: function (data, type, full, meta) {
            var $waktu_mulai = full['waktu_mulai'];
            var $row_output = '<div class="text-body">' + $waktu_mulai + '</div>';
            return $row_output;
          }
        },
        {
          // Estimasi
          targets: 3,
          render: function (data, type, full, meta) {
            var $estimasi = full['estimasi'];
            var $row_output = '<div class="text-body">' + $estimasi + '</div>';
            return $row_output;
          }
        },
        {
          // Lokasi Terakhir
          targets: 4,
          render: function (data, type, full, meta) {
            var $lokasi_terakhir = full['lokasi_terakhir'];
            var $row_output = '<div class="text-body">' + $lokasi_terakhir + '</div>';
            return $row_output;
          }
        },
        {
          // progress
          targets: -1,
          render: function (data, type, full, meta) {
            var $progress = full['progress'];
            var $progress_output =
              '<div class="d-flex align-items-center">' +
              '<div div class="progress w-100 rounded" style="height: 8px;">' +
              '<div class="progress-bar" role="progressbar" style="width:' +
              $progress +
              '%;" aria-valuenow="' +
              $progress +
              '" aria-valuemin="0" aria-valuemax="100"></div>' +
              '</div>' +
              '<div class="text-body ms-2">' +
              $progress +
              '%</div>' +
              '</div>';
            return $progress_output;
          }
        }
      ],
      order: [2, 'asc'],
      dom: '<"table-responsive"t><"row d-flex align-items-center"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 5,
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['location'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      }
    });

    // Add click event to the rows
    $('#dt-route-vehicles tbody').on('click', 'tr', function () {
      console.log('Row clicked, redirecting...'); // Debug log
      // Redirect to in-deliverymaps.html without sending any data
      window.location.href = 'in-deliverymaps.html';
    });

    $('.dataTables_info').addClass('pt-0');
  }
});
