$(function () {
  'use strict';

  // Initialize Select2 elements
  $('.select2').each(function () {
    $(this).select2({
      placeholder: $(this).attr('placeholder'),
      dropdownParent: $(this).parent()
    });
  });

  function createViewModal() {
    // Modal HTML structure
    var modalHTML = `
    <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css">
    <!-- Modal View -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-simple modal-edit-user">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body p-0">
                    <div class="text-center mb-6">
                        <h4 class="mb-2">Perbarui Informasi Kendaraan</h4>
                        <p class="mb-6">Memperbarui detail kendaraan.</p>
                    </div>
                    <form id="updateForm" class="row g-5" onsubmit="return false">
                        <!-- Icon -->
                        <div class="col-12 text-center mb-3">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="ri-truck-fill" style="font-size: 50px; margin-right: 8px;"></i>
                            </div>
                        </div>
                        <!-- Vehicle Details -->
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="platNomor"
                                    name="platNomor"
                                    class="form-control"
                                    placeholder="Masukkan nomor plat" />
                                <label for="platNomor">Nomor Plat</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="nomorStnk"
                                    name="nomorStnk"
                                    class="form-control"
                                    placeholder="Masukkan nomor STNK" />
                                <label for="nomorStnk">Nomor STNK</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="status"
                                    name="status"
                                    class="form-control"
                                    placeholder="Masukkan status" />
                                <label for="status">Status</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="expiredPajak"
                                    name="expiredPajak"
                                    class="form-control"
                                    placeholder="Masukkan tanggal pajak kadaluarsa" />
                                <label for="expiredPajak">Tanggal Pajak Kadaluarsa</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="vehicleType"
                                    name="vehicleType"
                                    class="form-control"
                                    placeholder="Masukkan jenis kendaraan" />
                                <label for="vehicleType">Jenis Kendaraan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="kmPerL"
                                    name="kmPerL"
                                    class="form-control"
                                    placeholder="Masukkan KM/L kendaraan" />
                                <label for="kmPerL">KM/L Kendaraan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="areaRestriction"
                                    name="areaRestriction"
                                    class="form-control"
                                    placeholder="Masukkan Area" />
                                <label for="areaRestriction">Area</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="customerRestriction"
                                    name="customerRestriction"
                                    class="form-control"
                                    placeholder="Masukkan jenis pelanggan" />
                                <label for="customerRestriction">Jenis Pelanggan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="customerType"
                                    name="customerType"
                                    class="form-control"
                                    placeholder="Masukkan tipe pelanggan" />
                                <label for="customerType">Tipe Pelanggan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="productRestriction"
                                    name="productRestriction"
                                    class="form-control"
                                    placeholder="Masukkan jenis produk" />
                                <label for="productRestriction">Jenis Produk</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="driverPairing"
                                    name="driverPairing"
                                    class="form-control"
                                    placeholder="Masukkan pengemudi" />
                                <label for="driverPairing">Pengemudi</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="lokasi"
                                    name="lokasi"
                                    class="form-control"
                                    placeholder="Masukkan lokasi" />
                                <label for="lokasi">Lokasi</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="jamBuka"
                                    name="jamBuka"
                                    class="form-control"
                                    placeholder="Masukkan jam buka" />
                                <label for="jamBuka">Jam Buka</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="jamTutup"
                                    name="jamTutup"
                                    class="form-control"
                                    placeholder="Masukkan jam tutup" />
                                <label for="jamTutup">Jam Tutup</label>
                            </div>
                        </div>
                        <div class="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button
                                type="reset"
                                class="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

     <!-- Modal Delete Product -->
<div class="modal fade" id="deleteVehicleModal" tabindex="-1" aria-labelledby="deleteVehicleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteVehicleModalLabel" style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <i class="ri-alert-fill" style="color: red; font-size: 100px;"></i>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Apakah Anda yakin ingin menghapus kendaraan ini?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-danger" id="confirmDeleteVehicle">Hapus</button>
      </div>
    </div>
  </div>
</div>
`;
    // Append the modal HTML to the body
    $('body').append(modalHTML);
  }

  // Create and append the modal when the document is ready
  createViewModal();

  // Initialize DataTable
  var dt_vehicle_table = $('.datatables-vehicles');
  if (dt_vehicle_table.length) {
    var dt_vehicle = dt_vehicle_table.DataTable({
      ajax: assetsPath + 'json/vehicle-management.json', // JSON file to add data
      columns: [
        { data: 'id' },
        { data: 'plat_nomor' },
        { data: 'status' },
        { data: 'expired_pajak' },
        { data: 'vehicle_type' },
        { data: 'area_restriction' },
        { data: 'customer_restriction' },
        { data: 'product_restriction' },
        { data: 'driver_pairing' },
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
          orderable: false,
          render: function (data, type, full) {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            var plateNumber = full['plat_nomor'];
            var expiredPajak = full['expired_pajak'];
            return (
              '<div>' +
              '<span class="d-block fw-bold">' +
              plateNumber +
              '</span>' +
              '<small class="d-block text-muted">' +
              expiredPajak +
              '</small>' +
              '</div>'
            );
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            var status = full['status'];
            var statusObj = {
              1: { title: 'Active', class: 'bg-label-success' },
              2: { title: 'Inactive', class: 'bg-label-secondary' }
            };
            return (
              '<span class="badge rounded-pill ' + statusObj[status].class + '">' + statusObj[status].title + '</span>'
            );
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            var vehicleType = full['vehicle_type'];
            return '<span>' + vehicleType + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            var areaRestriction = full['area_restriction'];
            return '<span>' + areaRestriction + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data, type, full) {
            var customerRestriction = full['customer_restriction'];
            return '<span>' + customerRestriction + '</span>';
          }
        },
        {
          targets: 7,
          render: function (data, type, full) {
            var productRestriction = full['product_restriction'];
            return '<span>' + productRestriction + '</span>';
          }
        },
        {
          targets: 8,
          render: function (data, type, full) {
            var driverPairing = full['driver_pairing'];
            return '<span>' + driverPairing + '</span>';
          }
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full) {
            return `
                  <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal"
                      data-plat-nomor="${full['plat_nomor']}"
                      data-status="${full['status']}"
                      data-expired-pajak="${full['expired_pajak']}"
                      data-vehicle-type="${full['vehicle_type']}"
                      data-area-restriction="${full['area_restriction']}"
                      data-customer-restriction="${full['customer_restriction']}"
                      data-product-restriction="${full['product_restriction']}"
                      data-driver-pairing="${full['driver_pairing']}">
                      <i class="ri-eye-line ri-20px"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteVehicleModal" data-vehicle-id="123">
                    <i class="ri-delete-bin-6-line ri-20px"></i>
                  </button>
              `;
          }
        }
      ],
      order: [[2, 'asc']],
      dom:
        '<"row"' +
        '<"col-md-6 d-flex align-items-center justify-content-start"<"dt-action-buttons"B>>' +
        '<"col-md-6"<"d-flex align-items-center justify-content-end"<"me-3"f><"add-new">>>' +
        '>t' +
        '<"row"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Cari Kendaraan'
      },
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-outline-secondary dropdown-toggle waves-effect waves-light me-2',
          text: '<span class="d-flex align-items-center"><i class="ri-upload-2-line ri-16px me-2"></i> <span class="d-none d-sm-inline-block">Export</span></span>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ri-printer-line me-1"></i>Print',
              className: 'dropdown-item'
            },
            {
              extend: 'csv',
              text: '<i class="ri-file-text-line me-1"></i>Csv',
              className: 'dropdown-item'
            },
            {
              extend: 'excel',
              text: '<i class="ri-file-excel-line me-1"></i>Excel',
              className: 'dropdown-item'
            },
            {
              extend: 'pdf',
              text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
              className: 'dropdown-item'
            },
            {
              extend: 'copy',
              text: '<i class="ri-file-copy-line me-1"></i>Copy',
              className: 'dropdown-item'
            }
          ]
        }
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['nama_kendaraan'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col) {
              return col.title !== ''
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':</td> ' +
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

    $(document).on('click', '.viewModal', function () {
      var platNomor = $(this).data('plat-nomor');
      var status = $(this).data('status');
      var expiredPajak = $(this).data('expired-pajak');
      var vehicleType = $(this).data('vehicle-type');
      var areaRestriction = $(this).data('area-restriction');
      var customerRestriction = $(this).data('customer-restriction');
      var productRestriction = $(this).data('product-restriction');
      var driverPairing = $(this).data('driver-pairing');
      var nomorStnk = $(this).data('nomor-stnk'); // New field
      var kmPerL = $(this).data('km-l'); // New field
      var lokasi = $(this).data('lokasi'); // New field
      var jamBuka = $(this).data('jam-buka'); // New field
      var jamTutup = $(this).data('jam-tutup'); // New field
      var customerType = $(this).data('customer-type'); // New field

      // Define status options
      var statusObj = {
        1: { title: 'Active', class: 'bg-label-success' },
        2: { title: 'Inactive', class: 'bg-label-secondary' }
      };

      // Get status info
      var statusInfo = statusObj[status] || { title: 'Unknown', class: 'bg-label-default' };

      // Update form fields in the modal
      $('#platNomor').val(platNomor);
      $('#status').val(statusInfo.title).attr('class', `form-control ${statusInfo.class}`);
      $('#expiredPajak').val(expiredPajak);
      $('#vehicleType').val(vehicleType);
      $('#areaRestriction').val(areaRestriction);
      $('#customerRestriction').val(customerRestriction);
      $('#productRestriction').val(productRestriction);
      $('#driverPairing').val(driverPairing);
      $('#nomorStnk').val(nomorStnk); // Update new field
      $('#kmPerL').val(kmPerL); // Update new field
      $('#lokasi').val(lokasi); // Update new field
      $('#jamBuka').val(jamBuka); // Update new field
      $('#jamTutup').val(jamTutup); // Update new field
      $('#customerType').val(customerType); // Update new field

      var updateModal = new bootstrap.Modal(document.getElementById('viewModal'));
      updateModal.show();
    });

    // Apply filters
    $('#filter-plat-nomor').on('change', function () {
      dt_vehicle.column(1).search(this.value).draw();
    });

    $('#filter-nama-kendaraan').on('change', function () {
      dt_vehicle.column(4).search(this.value).draw();
    });

    // Add "Add New Kendaraan" button after DataTable initialization
    $('.add-new').html(
      '<a href="form-layouts-vertical.html" class="btn btn-primary" data-bs-toggle="Add New" aria-controls="Tambah Kendaraan">Tambah Kendaraan</a>'
    );

    // Delete record
    $('.datatables-vehicles tbody').on('click', '.delete-record', function () {
      dt_vehicle.row($(this).parents('tr')).remove().draw();
    });
  }
  // Store the vehicle ID for deletion
  let vehicleIdToDelete = null;

  // Show the modal when the delete button is clicked
  $('.datatables-vehicles tbody').on('click', '.deleteVehicleModal', function () {
    // Get the vehicle ID from the button's data attribute
    vehicleIdToDelete = $(this).data('vehicle-id');

    // Show the delete modal
    $('#deleteVehicleModal').modal('show');
  });

  // Handle delete confirmation
  $(document).on('click', '#deleteVehicleModal .btn-danger', function () {
    if (vehicleIdToDelete !== null) {
      console.log('Deleting vehicle with ID:', vehicleIdToDelete);
      $('#deleteVehicleModal').modal('hide');
    }
  });
});
