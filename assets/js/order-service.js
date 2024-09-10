$(function () {
  'use strict';

  // Initialize DataTable
  var dt_payout_table = $('.datatables-payout');
  if (dt_payout_table.length) {
    dt_payout_table.DataTable({
      ajax: assetsPath + 'json/order-service.json',
      columns: [
        { data: null },
        { data: 'driver_id' },
        { data: 'vehicle_id' },
        { data: 'desc' },
        { data: 'foto' },
        { data: 'status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: false,
          orderable: false,
          targets: 0,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 1,
          render: function (data, type, full) {
            return '<span>' + full['driver_id'] + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            return '<span>' + full['vehicle_id'] + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            return '<span>' + full['desc'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            return '<span>' + full['foto'] + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Open', class: 'bg-label-success' },
              2: { title: 'Pending', class: 'bg-label-secondary' },
              3: { title: 'Close', class: 'bg-label-danger' }
            };
            return (
              '<span class="badge rounded-pill ' +
              statusObj[full['status']].class +
              '">' +
              statusObj[full['status']].title +
              '</span>'
            );
          }
        },
        {
          targets: 6,
          render: function (data, type, full) {
            return (
              '<div class="text-center">' +
              '<button class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect helpdesk-btn" ' +
              'style="border: 1px solid #007bff;" ' +
              'data-driver-id="' +
              full['driver_id'] +
              '" ' +
              'data-vehicle-id="' +
              full['vehicle_id'] +
              '" ' +
              'data-desc="' +
              full['desc'] +
              '" ' +
              'data-foto="' +
              full['foto'] +
              '" ' +
              'data-status="' +
              full['status'] +
              '" ' +
              'data-bs-toggle="modal" data-bs-target="#helpdeskModal">' +
              '<i class="ri-mail-unread-line ri-20px" style="color: #007bff;"></i>' +
              '</button>' +
              '</div>'
            );
          }
        }
      ],
      searching: false
    });

    // Ketika modal terbuka, tampilkan data dari tombol yang diklik
    $('#helpdeskModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Tombol yang diklik
      var driverId = button.data('driver-id');
      var vehicleId = button.data('vehicle-id');
      var desc = button.data('desc');
      var foto = button.data('foto');
      var status = button.data('status');

      // Masukkan data ke dalam input modal
      $('#helpdesk-driver-id').val(driverId);
      $('#helpdesk-vehicle-id').val(vehicleId);
      $('#helpdesk-desc').val(desc);
      $('#helpdesk-foto').html('<img src="' + foto + '" class="img-fluid" style="max-width: 200px;">');
      $('#helpdesk-status').val(status); // Set dropdown value
    });

    // Send Response Button
    $('#btn-send-response').on('click', function () {
      var response = $('#admin-response').val();
      if (response.trim() !== '') {
        alert('Tanggapan terkirim: ' + response);
        $('#helpdeskModal').modal('hide');
      } else {
        alert('Tanggapan tidak boleh kosong!');
      }
    });
  }
});
