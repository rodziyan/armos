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
        <div class="modal fade" id="showDetails" tabindex="-1" aria-labelledby="showDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
        <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body p-0">
                <div class="text-center mb-6">
                    <h4 class="mb-2">Informasi Kendaraan</h4>
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
                                id="modalVehicleType"
                                name="vehicleType"
                                class="form-control"
                                placeholder="Jenis Kendaraan" />
                            <label for="modalVehicleType">Jenis Kendaraan</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalTruckHeight"
                                name="truckHeight"
                                class="form-control"
                                placeholder="Tinggi Truck" />
                            <label for="modalTruckHeight">Tinggi Truck</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalTruckWidth"
                                name="truckWidth"
                                class="form-control"
                                placeholder="Lebar Truck" />
                            <label for="modalTruckWidth">Lebar Truck</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalTruckLength"
                                name="truckLength"
                                class="form-control"
                                placeholder="Panjang Truck" />
                            <label for="modalTruckLength">Panjang Truck</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoHeight"
                                name="cargoHeight"
                                class="form-control"
                                placeholder="Tinggi Cargo" />
                            <label for="modalCargoHeight">Tinggi Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoWidth"
                                name="cargoWidth"
                                class="form-control"
                                placeholder="Lebar Cargo" />
                            <label for="modalCargoWidth">Lebar Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoLength"
                                name="cargoLength"
                                class="form-control"
                                placeholder="Panjang Cargo" />
                            <label for="modalCargoLength">Panjang Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoMinVolume"
                                name="cargoMinVolume"
                                class="form-control"
                                placeholder="Volume Minimum Cargo" />
                            <label for="modalCargoMinVolume">Volume Minimum Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoMaxVolume"
                                name="cargoMaxVolume"
                                class="form-control"
                                placeholder="Volume Maksimum Cargo" />
                            <label for="modalCargoMaxVolume">Volume Maksimum Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoMinKg"
                                name="cargoMinKg"
                                class="form-control"
                                placeholder="Berat Minimum Cargo" />
                            <label for="modalCargoMinKg">Berat Minimum Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCargoMaxKg"
                                name="cargoMaxKg"
                                class="form-control"
                                placeholder="Berat Maksimum Cargo" />
                            <label for="modalCargoMaxKg">Berat Maksimum Cargo</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalMinRevenue"
                                name="minRevenue"
                                class="form-control"
                                placeholder="Pendapatan Minimum" />
                            <label for="modalMinRevenue">Pendapatan Minimum</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalProductRestriction"
                                name="productRestriction"
                                class="form-control"
                                placeholder="Pembatasan Produk" />
                            <label for="modalProductRestriction">Produk</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalAreaRestriction"
                                name="areaRestriction"
                                class="form-control"
                                placeholder="Pembatasan Wilayah" />
                            <label for="modalAreaRestriction">Wilayah</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCustomerType"
                                name="customerType"
                                class="form-control"
                                placeholder="Tipe Pelanggan" />
                            <label for="modalCustomerType">Tipe Pelanggan</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating form-floating-outline">
                            <input
                                type="text"
                                id="modalCustomerRestriction"
                                name="customerRestriction"
                                class="form-control"
                                placeholder="Pelanggan Spesific" />
                            <label for="modalCustomerRestriction">Pembatasan Pelanggan</label>
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
        { data: 'vehicle_type' },
        { data: 'truck_height' },
        { data: 'truck_width' },
        { data: 'truck_length' },
        { data: 'cargo_height' },
        { data: 'cargo_width' },
        { data: 'cargo_length' },
        { data: 'cargo_min_volume' },
        { data: 'cargo_max_volume' },
        { data: 'cargo_min_kg' },
        { data: 'cargo_max_kg' },
        { data: 'min_revenue' },
        { data: 'product_restriction' },
        { data: 'area_restriction' },
        { data: 'customer_type' },
        { data: 'customer_restriction' },
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
            var vehicleType = full['vehicle_type'];
            return '<span>' + vehicleType + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            var truckHeight = full['truck_height'];
            return '<span>' + truckHeight + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            var truckWidth = full['truck_width'];
            return '<span>' + truckWidth + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            var truckLength = full['truck_length'];
            return '<span>' + truckLength + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            var cargoHeight = full['cargo_height'];
            return '<span>' + cargoHeight + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data, type, full) {
            var cargoWidth = full['cargo_width'];
            return '<span>' + cargoWidth + '</span>';
          }
        },
        {
          targets: 7,
          render: function (data, type, full) {
            var cargoLength = full['cargo_length'];
            return '<span>' + cargoLength + '</span>';
          }
        },
        {
          targets: 8,
          render: function (data, type, full) {
            var cargoMinVolume = full['cargo_min_volume'];
            return '<span>' + cargoMinVolume + '</span>';
          }
        },
        {
          targets: 9,
          render: function (data, type, full) {
            var cargoMaxVolume = full['cargo_max_volume'];
            return '<span>' + cargoMaxVolume + '</span>';
          }
        },
        {
          targets: 10,
          render: function (data, type, full) {
            var cargoMinKg = full['cargo_min_kg'];
            return '<span>' + cargoMinKg + '</span>';
          }
        },
        {
          targets: 11,
          render: function (data, type, full) {
            var cargoMaxKg = full['cargo_max_kg'];
            return '<span>' + cargoMaxKg + '</span>';
          }
        },
        {
          targets: 12,
          render: function (data, type, full) {
            var minRevenue = full['min_revenue'];
            return '<span>' + minRevenue + '</span>';
          }
        },
        {
          targets: 13,
          render: function (data, type, full) {
            var productRestriction = full['product_restriction'];
            return '<span>' + productRestriction + '</span>';
          }
        },
        {
          targets: 14,
          render: function (data, type, full) {
            var areaRestriction = full['area_restriction'];
            return '<span>' + areaRestriction + '</span>';
          }
        },
        {
          targets: 15,
          render: function (data, type, full) {
            var customerType = full['customer_type'];
            return '<span>' + customerType + '</span>';
          }
        },
        {
          targets: 16,
          render: function (data, type, full) {
            var customerRestriction = full['customer_restriction'];
            return '<span>' + customerRestriction + '</span>';
          }
        },
        {
          // Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full) {
            return `
            <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect showDetails"
                data-vehicle-type="${full['vehicle_type']}"
                data-truck-height="${full['truck_height']}"
                data-truck-width="${full['truck_width']}"
                data-truck-length="${full['truck_length']}"
                data-cargo-height="${full['cargo_height']}"
                data-cargo-width="${full['cargo_width']}"
                data-cargo-length="${full['cargo_length']}"
                data-cargo-min-volume="${full['cargo_min_volume']}"
                data-cargo-max-volume="${full['cargo_max_volume']}"
                data-cargo-min-kg="${full['cargo_min_kg']}"
                data-cargo-max-kg="${full['cargo_max_kg']}"
                data-min-revenue="${full['min_revenue']}"
                data-product-restriction="${full['product_restriction']}"
                data-area-restriction="${full['area_restriction']}"
                data-customer-type="${full['customer_type']}"
                data-customer-restriction="${full['customer_restriction']}">
                <i class="ri-pencil-line ri-20px"></i>
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

    // Event delegation to handle dynamically added buttons
    $(document).on('click', '.showDetails', function () {
      // Get data attributes from the button
      var vehicleType = $(this).data('vehicle-type');
      var truckHeight = $(this).data('truck-height');
      var truckWidth = $(this).data('truck-width');
      var truckLength = $(this).data('truck-length');
      var cargoHeight = $(this).data('cargo-height');
      var cargoWidth = $(this).data('cargo-width');
      var cargoLength = $(this).data('cargo-length');
      var cargoMinVolume = $(this).data('cargo-min-volume');
      var cargoMaxVolume = $(this).data('cargo-max-volume');
      var cargoMinKg = $(this).data('cargo-min-kg');
      var cargoMaxKg = $(this).data('cargo-max-kg');
      var minRevenue = $(this).data('min-revenue');
      var productRestriction = $(this).data('product-restriction');
      var areaRestriction = $(this).data('area-restriction');
      var customerType = $(this).data('customer-type');
      var customerRestriction = $(this).data('customer-restriction');

      // Set modal content
      $('#modalVehicleType').val(vehicleType);
      $('#modalTruckHeight').val(truckHeight);
      $('#modalTruckWidth').val(truckWidth);
      $('#modalTruckLength').val(truckLength);
      $('#modalCargoHeight').val(cargoHeight);
      $('#modalCargoWidth').val(cargoWidth);
      $('#modalCargoLength').val(cargoLength);
      $('#modalCargoMinVolume').val(cargoMinVolume);
      $('#modalCargoMaxVolume').val(cargoMaxVolume);
      $('#modalCargoMinKg').val(cargoMinKg);
      $('#modalCargoMaxKg').val(cargoMaxKg);
      $('#modalMinRevenue').val(minRevenue);
      $('#modalProductRestriction').val(productRestriction);
      $('#modalAreaRestriction').val(areaRestriction);
      $('#modalCustomerType').val(customerType);
      $('#modalCustomerRestriction').val(customerRestriction);

      var updateModal = new bootstrap.Modal(document.getElementById('showDetails'));
      updateModal.show();
    });

    // Populate dropdowns with unique values from data
    dt_vehicle_table.on('xhr', function () {
      var json = dt_vehicle.ajax.json();
      var platNomorOptions = '<option value="">Select Plat Nomor</option>';
      var namaKendaraanOptions = '<option value="">Select Nama Kendaraan</option>';
      var platNomorSet = new Set();
      var namaKendaraanSet = new Set();

      json.forEach(function (item) {
        platNomorSet.add(item.plat_nomor);
        namaKendaraanSet.add(item.nama_kendaraan);
      });

      platNomorSet.forEach(function (platNomor) {
        platNomorOptions += '<option value="' + platNomor + '">' + platNomor + '</option>';
      });

      namaKendaraanSet.forEach(function (namaKendaraan) {
        namaKendaraanOptions += '<option value="' + namaKendaraan + '">' + namaKendaraan + '</option>';
      });

      $('#filter-plat-nomor').html(platNomorOptions);
      $('#filter-nama-kendaraan').html(namaKendaraanOptions);
    });

    // document.addEventListener('DOMContentLoaded', function () {
    //   const tagifyInputs = document.querySelectorAll('.tagify');
    //   tagifyInputs.forEach(input => {
    //     new Tagify(input, {
    //       whitelist: [
    //         'Produk A',
    //         'Produk B',
    //         'Produk C',
    //         'Produk D',
    //         'Produk E',
    //         'Wilayah 1',
    //         'Wilayah 2',
    //         'Wilayah 3',
    //         'Wilayah 4',
    //         'Wilayah 5',
    //         'Pelanggan Reguler',
    //         'Pelanggan Premium',
    //         'Pelanggan Bisnis',
    //         'Pelanggan VIP',
    //         'Pelanggan Khusus',
    //         'Customer A',
    //         'Customer B',
    //         'Customer C',
    //         'Customer D',
    //         'Customer E'
    //       ], // Data tagging dummy
    //       maxTags: 10,
    //       dropdown: {
    //         maxItems: 20,
    //         classname: 'tags-look',
    //         enabled: 0,
    //         closeOnSelect: false
    //       }
    //     });
    //   });
    // });

    // Apply filters
    $('#filter-plat-nomor').on('change', function () {
      dt_vehicle.column(1).search(this.value).draw();
    });

    $('#filter-nama-kendaraan').on('change', function () {
      dt_vehicle.column(4).search(this.value).draw();
    });

    // Add "Add New Kendaraan" button after DataTable initialization
    $('.add-new').html(
      '<a href="form-vehicle-type.html" class="btn btn-primary" data-bs-toggle="Add New" aria-controls="Tambah Tipe">Tambah Tipe</a>'
    );

    // Delete record
    $('.datatables-vehicles tbody').on('click', '.delete-record', function () {
      dt_vehicle.row($(this).parents('tr')).remove().draw();
    });
  }
});
