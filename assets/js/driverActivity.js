'use strict';

const modalHTML = `
<!-- Modal -->
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">Detail Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="modalNamaToko" class="form-label">Nama Toko</label>
          <input type="text" class="form-control" id="modalNamaToko" readonly>
        </div>
        <div class="mb-3">
          <label for="modalTotalBarang" class="form-label">Total Barang</label>
          <input type="text" class="form-control" id="modalTotalBarang" readonly>
        </div>
        <div class="mb-3">
          <label for="modalStatus" class="form-label">Status</label>
          <div id="modalStatus"></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="modalActionButton">Cancel</button>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(function () {
  // Append modal HTML to the body
  $('body').append(modalHTML);

  var dtRouteVehiclesTable = $('.dt-route-vehicles');

  if (dtRouteVehiclesTable.length) {
    dtRouteVehiclesTable.DataTable({
      ajax: {
        url: assetsPath + 'json/driverActivity.json', // JSON file to add data
        dataSrc: 'data' // Adjust if needed based on your JSON structure
      },
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'faktur_number' },
        { data: 'tanggal' },
        { data: 'total_drop_hari_ini' },
        { data: 'status' },
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
          render: function (data, type, full) {
            return '<input type="checkbox" class="dt-checkboxes form-check-input" data-id="' + full['id'] + '">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            return '<span>' + (full['faktur_number'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 3,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            return '<span>' + (full['tanggal'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            return '<span>' + (full['total_drop_hari_ini'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            var $status = full['status'];
            var statusObj = {
              1: { title: 'Complete', class: 'bg-label-success' },
              2: { title: 'Incomplete', class: 'bg-label-secondary' }
            };
            return (
              '<span class="badge ' +
              (statusObj[$status]?.class || 'bg-label-default') +
              '">' +
              (statusObj[$status]?.title || 'Unknown') +
              '</span>'
            );
          }
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Complete', class: 'bg-label-success' },
              2: { title: 'Incomplete', class: 'bg-label-secondary' }
            };
            var statusBadge =
              '<span class="badge rounded-pill ' +
              statusObj[full.status]?.class +
              '">' +
              statusObj[full.status]?.title +
              '</span>';

            return (
              '<button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect modalTrigger" ' +
              'style="border: none;" ' +
              'data-trip-id="' +
              full.id + // Changed from full.trip_id to full.id
              '" ' +
              'data-nama-toko="' +
              full.nama_toko +
              '" ' +
              'data-total-barang="' +
              full.total_barang +
              '" ' +
              'data-status="' +
              full.status +
              '" ' +
              'data-bs-toggle="tooltip" ' +
              'title="Edit">' +
              '<i class="ri-pencil-line ri-20px"></i>' +
              '</button>'
            );
          }
        }
      ],
      order: [[2, 'desc']] // Default sorting on Tanggal column
    });

    // Handle modal trigger click event
    $(document).on('click', '.modalTrigger', function () {
      var button = $(this);
      var tripId = button.data('trip-id');
      var namaToko = button.data('nama-toko');
      var totalBarang = button.data('total-barang');
      var status = button.data('status');

      // Update modal content
      $('#modalNamaToko').val(namaToko);
      $('#modalTotalBarang').val(totalBarang);

      // Set status badge in the modal
      var statusObj = {
        1: { title: 'Complete', class: 'bg-label-success' },
        2: { title: 'Incomplete', class: 'bg-label-secondary' }
      };
      $('#modalStatus').html(
        '<span class="badge rounded-pill ' +
          (statusObj[status]?.class || 'bg-label-default') +
          '">' +
          (statusObj[status]?.title || 'Unknown') +
          '</span>'
      );

      // Display modal
      var myModal = new bootstrap.Modal(document.getElementById('updateModal'));
      myModal.show();
    });
  }
});
