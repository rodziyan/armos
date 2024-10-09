'use strict';

const modalHTML = `

<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 40%; width: auto; max-height: 80vh;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- First Section -->
                <div class="d-flex left-content-between mb-3" style="text-align: left;">
                    <div>
                        <p>Location : <strong>Toko A</strong></p>
                        <p>Delivery Type : <strong>Delivery</strong></p>
                    </div>
                    <div class="mx-auto">
                        <p>Faktur ID : <strong>F001</strong></p>
                        <p>Total Value : <strong>Rp80.000</strong></p>
                    </div>
                </div>
                <!-- Table Section -->
                <table class="table table-bordered">
                    <thead>
                        <tr class="table-success">
                            <th>Produk</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produk 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Produk 2</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Produk 3</td>
                            <td>40</td>
                        </tr>
                        <tr class="table-success">
                            <td><strong>TOTAL</strong></td>
                            <td><strong>80</strong></td>
                        </tr>
                    </tbody>
                </table>
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
        url: assetsPath + 'json/driverActivity.json',
        dataSrc: 'data'
      },
      columns: [
        { data: 'RouteID' },
        { data: 'Driver' },
        { data: 'DeliveryDate' },
        { data: 'TotalDrop' },
        { data: 'status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          targets: 0,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            return '<span>' + (full['RouteID'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 1,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            return '<span>' + (full['Driver'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            return '<span>' + (full['DeliveryDate'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            return '<span>' + (full['TotalDrop'] || 'N/A') + '</span>';
          }
        },
        {
          targets: 4,
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
              'title="View">' +
              '<i class="ri-eye-line ri-20px"></i>' +
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
