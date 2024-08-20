$(function () {
  'use strict';

  // Initialize Select2 elements
  $('.select2').each(function () {
    $(this).select2({
      placeholder: $(this).attr('placeholder'),
      dropdownParent: $(this).parent()
    });
  });

  // Fungsi untuk membuat dan menambahkan modal ke dalam body
  function createViewModal() {
    // Struktur HTML Modal
    var modalHTML = `
     <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css">
      <!-- Modal View -->
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-simple modal-edit-user">
              <div class="modal-content">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div class="modal-body p-0">
                      <div class="text-center mb-6">
                          <h4 class="mb-2">Perbarui Informasi Produk</h4>
                          <p class="mb-6">Memperbarui detail produk.</p>
                      </div>
                      <form id="updateForm" class="row g-5" onsubmit="return false">
                          <!-- Icon -->
                          <div class="col-12 text-center mb-3">
                              <div class="d-flex justify-content-center align-items-center">
                              </div>
                          </div>
                          <!-- Product Details -->
                          <div class="col-12">
                              <div class="form-floating form-floating-outline">
                                  <input
                                      type="text"
                                      id="modalProductSKU"
                                      name="productSKU"
                                      class="form-control"
                                      placeholder="Masukkan SKU produk" />
                                  <label for="modalProductSKU">SKU Produk</label>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-floating form-floating-outline">
                                  <input
                                      type="text"
                                      id="modalProductHeight"
                                      name="productHeight"
                                      class="form-control"
                                      placeholder="Masukkan tinggi produk" />
                                  <label for="modalProductHeight">Tinggi Produk (in CM)</label>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-floating form-floating-outline">
                                  <input
                                      type="text"
                                      id="modalProductWidth"
                                      name="productWidth"
                                      class="form-control"
                                      placeholder="Masukkan lebar produk" />
                                  <label for="modalProductWidth">Lebar Produk (in CM)</label>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-floating form-floating-outline">
                                  <input
                                      type="text"
                                      id="modalProductLength"
                                      name="productLength"
                                      class="form-control"
                                      placeholder="Masukkan panjang produk" />
                                  <label for="modalProductLength">Panjang Produk (in CM)</label>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-floating form-floating-outline">
                                  <input
                                      type="text"
                                      id="modalProductRestrictions"
                                      name="productRestrictions"
                                      class="form-control"
                                      placeholder="Masukkan restrictions produk" />
                                  <label for="modalProductRestrictions">Restrictions Produk</label>
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
      ajax: assetsPath + 'json/master-product.json', // JSON file to add data
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'product_SKU' },
        { data: 'Product_height' },
        { data: 'product_width' },
        { data: 'product_length' },
        { data: 'product_restrictions' },
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
          targets: 2, // Target 'product_SKU' column
          orderable: false,
          render: function (data, type, full) {
            return '<span>' + full['product_SKU'] + '</span>';
          }
        },
        {
          targets: 3, // Target 'Product_height' column
          render: function (data, type, full) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 4, // Target 'product_width' column
          render: function (data, type, full) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 5, // Target 'product_length' column
          render: function (data, type, full) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 6, // Target 'product_restrictions' column
          render: function (data, type, full) {
            return '<span>' + data + '</span>';
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
                      data-product-sku="${full['product_SKU']}"
                      data-product-height="${full['Product_height']}"
                      data-product-width="${full['product_width']}"
                      data-product-length="${full['product_length']}"
                      data-product-restrictions="${full['product_restrictions']}">
                      <i class="ri-eye-line ri-20px"></i>
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

    $(document).ready(function () {
      createViewModal();

      $(document).on('click', '.viewModal', function () {
        var productSKU = $(this).data('product-sku');
        var productHeight = $(this).data('product-height');
        var productWidth = $(this).data('product-width');
        var productLength = $(this).data('product-length');
        var productRestrictions = $(this).data('product-restrictions');

        $('#modalProductSKU').val(productSKU);
        $('#modalProductHeight').val(productHeight);
        $('#modalProductWidth').val(productWidth);
        $('#modalProductLength').val(productLength);
        $('#modalProductRestrictions').val(productRestrictions);

        $('#viewModal').modal('show');
      });
    });

    // Add "Add New Kendaraan" button after DataTable initialization
    $('.add-new').html(
      '<a href="form-master-product.html" class="btn btn-primary" data-bs-toggle="Add New" aria-controls="Tambah Produk">Tambah Produk</a>'
    );

    // Delete record
    $('.datatables-vehicles tbody').on('click', '.delete-record', function () {
      dt_vehicle.row($(this).parents('tr')).remove().draw();
    });
  }
});
