$(function () {
    'use strict';

    // Initialize Select2 elements
    $('.select2').each(function () {
        $(this).select2({
            placeholder: $(this).attr('placeholder'),
            dropdownParent: $(this).parent()
        });
    });

    function createUpdateModal() {
        // Modal HTML structure
        var modalHTML = `
            <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css">
              <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                  <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-body p-0">
                      <div class="text-center mb-6">
                        <h4 class="mb-2">Perbarui Informasi Kendaraan</h4>
                        <p class="mb-6">Memperbarui informasi kendaraan mungkin melibatkan pemeriksaan privasi.</p>
                      </div>
                      <form id="updateForm" class="row g-5" onsubmit="return false">
                        <!-- Icon and Arrow -->
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
                              id="namaKendaraan"
                              name="namaKendaraan"
                              class="form-control"
                              placeholder="Masukkan nama kendaraan" />
                            <label for="namaKendaraan">Nama Kendaraan</label>
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
                              id="brand"
                              name="brand"
                              class="form-control"
                              placeholder="Masukkan merk kendaraan" />
                            <label for="brand">Merk Kendaraan</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="model"
                              name="model"
                              class="form-control"
                              placeholder="Masukkan model kendaraan" />
                            <label for="model">Model Kendaraan</label>
                          </div>
                        </div>
                        <div class="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                          <button type="submit" class="btn btn-primary">Perbarui</button>
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
    createUpdateModal();
    
    // Function to show the update modal with data
    function showUpdateModal(data) {
        $('#platNomor').val(data.plat_nomor);
        $('#namaKendaraan').val(data.nama_kendaraan);
        $('#vehicleType').val(data.type);
        $('#expiredPajak').val(data.expired_pajak);
        $('#brand').val(data.brand);
        $('#model').val(data.model);
        $('#updateModal').modal('show');
    }
    
    // Event listener for the update button
    $(document).on('click', '.updateModal', function() {
        var data = {
            plat_nomor: $(this).data('plat-nomor'),
            nama_kendaraan: $(this).data('nama-kendaraan'),
            type: $(this).data('type'),
            expired_pajak: $(this).data('expired-pajak'),
            brand: $(this).data('brand'),
            model: $(this).data('model')
        };
        showUpdateModal(data);
    });
    

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
                { data: 'nama_kendaraan' },
                { data: 'brand' },
                { data: 'model' },
                { data: 'type' },
                { data: 'action' }
            ],
            columnDefs: [
                {
                    className: 'control',
                    searchable: false,
                    orderable: false,
                    targets: 0,
                    render: function () {
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
                    render: function (data, type, full) {
                        var plateNumber = full['plat_nomor'];
                        var expiredPajak = full['expired_pajak'];
                        return '<div>' +
                                 '<span class="d-block fw-bold">' + plateNumber + '</span>' +
                                 '<small class="d-block text-muted">' + expiredPajak + '</small>' +
                               '</div>';
                    }
                },
                {
                    targets: 3,
                    render: function (data, type, full) {
                        var status = full['status'];
                        var statusObj = {
                            1: { title: 'Available', class: 'bg-label-success' },
                            2: { title: 'Unavailable', class: 'bg-label-secondary' }
                        };
                        return '<span class="badge rounded-pill ' +
                            statusObj[status].class +
                            '">' +
                            statusObj[status].title +
                            '</span>';
                    }
                },
                {
                    targets: 4,
                    render: function (data, type, full) {
                        var kendaraan = full['nama_kendaraan'];
                        return '<span>' + kendaraan + '</span>';
                    }
                },
                {
                    targets: 5,
                    render: function (data, type, full) {
                        var brand = full['brand'];
                        return '<span>' + brand + '</span>';
                    }
                },
                {
                    targets: 6,
                    render: function (data, type, full) {
                        var model = full['model'];
                        return '<span>' + model + '</span>';
                    }
                },
                {
                    targets: 7,
                    render: function (data, type, full) {
                        var type = full['type'];
                        return '<span>' + type + '</span>';
                    }
                },
                {
                    // Actions
                    targets: -1,
                    title: 'Actions',
                    orderable: false,
                    render: function (data, type, full) {
                        return `
                            <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect updateModal"
                                data-plat-nomor="${full['plat_nomor']}"
                                data-nama-kendaraan="${full['nama_kendaraan']}"
                                data-type="${full['type']}"
                                data-expired-pajak="${full['expired_pajak']}"
                                data-brand="${full['brand']}"
                                data-model="${full['model']}">
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
                                ? '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                                  '<td>' + col.title + ':</td> ' +
                                  '<td>' + col.data + '</td>' +
                                  '</tr>'
                                : '';
                        }).join('');

                        return data ? $('<table class="table"/><tbody />').append(data) : false;
                    }
                }
            }
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

        // Apply filters
        $('#filter-plat-nomor').on('change', function () {
            dt_vehicle.column(1).search(this.value).draw();
        });

        $('#filter-nama-kendaraan').on('change', function () {
            dt_vehicle.column(4).search(this.value).draw();
        });

        // Add "Add New Kendaraan" button after DataTable initialization
        $('.add-new').html('<a href="form-layouts-vertical.html" class="btn btn-primary" data-bs-toggle="Add New" aria-controls="Tambah Kendaraan">Tambah Kendaraan</a>');
        
        // Delete record
        $('.datatables-vehicles tbody').on('click', '.delete-record', function () {
            dt_vehicle.row($(this).parents('tr')).remove().draw();
        });
    }
});
