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
                        <div class="row">
                            <!-- Kiri -->
                            <div class="col-md-6">
                                <!-- Tipe Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <select class="form-select" id="product-type" aria-label="Tipe Produk" required>
                                        <option value="" disabled selected>Pilih Tipe Produk</option>
                                        <option value="type1">Tipe 1</option>
                                        <option value="type2">Tipe 2</option>
                                        <option value="type3">Tipe 3</option>
                                    </select>
                                    <label for="product-type">Tipe Produk</label>
                                </div>

                                <!-- Nama Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="text" id="product-name" class="form-control" placeholder="e.g. Nama Produk" required />
                                    <label for="product-name">Nama Produk</label>
                                </div>

                                <!-- SKU Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="text" id="modalProductSKU" name="productSKU" class="form-control" placeholder="e.g. ABC1234" required />
                                    <label for="modalProductSKU">SKU Produk</label>
                                </div>

                                <!-- Harga Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <div class="input-group">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="number" id="product-price" class="form-control" placeholder="e.g. 10000" aria-label="Harga Produk" required />
                                    </div>
                                    <label for="product-price" class="visually-hidden">Harga Produk</label>
                                </div>

                                <!-- Deskripsi Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <textarea id="modalProductDescription" class="form-control" placeholder="Deskripsi Produk" required></textarea>
                                    <label for="modalProductDescription">Deskripsi Produk</label>
                                </div>

                                <!-- Kategori Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="text" id="modalProductCategory" class="form-control" placeholder="Kategori Produk" required />
                                    <label for="modalProductCategory">Kategori Produk</label>
                                </div>
                            </div>

                            <!-- Kanan -->
                            <div class="col-md-6">
                                <!-- Tinggi Produk (in CM) -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="number" id="modalProductHeight" name="productHeight" class="form-control" placeholder="e.g. 150" required />
                                    <label for="modalProductHeight">Tinggi Produk (in CM)</label>
                                </div>

                                <!-- Lebar Produk (in CM) -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="number" id="modalProductWidth" name="productWidth" class="form-control" placeholder="e.g. 50" required />
                                    <label for="modalProductWidth">Lebar Produk (in CM)</label>
                                </div>

                                <!-- Panjang Produk (in CM) -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="number" id="modalProductLength" name="productLength" class="form-control" placeholder="e.g. 100" required />
                                    <label for="modalProductLength">Panjang Produk (in CM)</label>
                                </div>

                                <!-- Stok Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="number" id="modalProductStock" class="form-control" placeholder="Stok Produk" required />
                                    <label for="modalProductStock">Stok Produk</label>
                                </div>

                                <!-- Gambar Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <input type="file" id="modalProductImage" class="form-control" placeholder="Gambar Produk" accept="image/*" required />
                                    <label for="modalProductImage">Gambar Produk</label>
                                </div>

                                <!-- Status Produk -->
                                <div class="form-floating form-floating-outline mt-3">
                                    <select class="form-select" id="modalProductStatus" aria-label="Status Produk" required>
                                        <option value="" disabled selected>Pilih Status Produk</option>
                                        <option value="active">Aktif</option>
                                        <option value="inactive">Tidak Aktif</option>
                                    </select>
                                    <label for="modalProductStatus">Status Produk</label>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4 mt-4">
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Delete Product -->
<div class="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteProductModalLabel" style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <i class="ri-alert-fill" style="color: red; font-size: 100px;"></i>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Apakah anda yakin ingin menghapus produk ini?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-danger">Hapus</button>
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
      ajax: assetsPath + 'json/master-product.json',
      columns: [
        { data: 'product_type' },
        { data: 'product_name' },
        { data: 'product_sku' },
        { data: 'product_price' },
        { data: 'product_height' },
        { data: 'product_width' },
        { data: 'product_length' },
        { data: 'product_description' }, // Deskripsi Produk
        { data: 'product_category' }, // Kategori Produk
        { data: 'product_stock' }, // Stok Produk
        { data: 'product_image' }, // Gambar Produk
        { data: 'product_status' }, // Status Produk
        { data: 'action' }
      ],
      columnDefs: [
        {
          targets: 0, // product_type column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_type'] + '</span>';
          }
        },
        {
          targets: 1, // product_name column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_name'] + '</span>';
          }
        },
        {
          targets: 2, // product_sku column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_sku'] + '</span>';
          }
        },
        {
          targets: 3, // product_price column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_price'] + '</span>';
          }
        },
        {
          targets: 4, // product_height column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_height'] + '</span>';
          }
        },
        {
          targets: 5, // product_width column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_width'] + '</span>';
          }
        },
        {
          targets: 6, // product_length column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_length'] + '</span>';
          }
        },
        {
          targets: 7, // product_description column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_description'] + '</span>';
          }
        },
        {
          targets: 8, // product_category column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_category'] + '</span>';
          }
        },
        {
          targets: 9, // product_stock column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_stock'] + '</span>';
          }
        },
        {
          targets: 10, // product_image column
          orderable: false, // Assuming you don't want this column to be orderable
          render: function (data, type, full) {
            return '<img src="' + full['product_image'] + '" alt="Product Image" style="width:50px;height:50px;" />';
          }
        },
        {
          targets: 11, // product_status column
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['product_status'] + '</span>';
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
                      data-product-type="${full['product_type']}"
                      data-product-name="${full['product_name']}"
                      data-modal-product-sku="${full['product_sku']}"
                      data-product-price="${full['product_price']}"
                      data-modal-product-height="${full['product_height']}"
                      data-modal-product-width="${full['product_width']}"
                      data-modal-product-length="${full['product_length']}">
                      <i class="ri-edit-line ri-20px"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteProductModal" 
                      data-product-sku="${full['product_sku']}">
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
        searchPlaceholder: 'Cari Produk'
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
  // Show delete product modal
  $('.datatables-vehicles tbody').on('click', '.deleteProductModal', function () {
    var productSKU = $(this).data('product-sku'); // Ambil SKU dari data attribute
    $('#deleteProductModal .modal-body').text(`Apakah anda yakin ingin menghapus produk ${productSKU} ini?`);

    // Tampilkan modal delete
    $('#deleteProductModal').modal('show');
  });

  // Handle delete confirmation
  $(document).on('click', '#deleteProductModal .btn-danger', function () {
    var productSKU = $('#deleteProductModal .modal-body')
      .text()
      .match(/produk (.*) ini/)[1]; // Ekstrak SKU dari teks modal
    console.log(`Deleting product with SKU: ${productSKU}`);

    // Tambahkan logika penghapusan di sini, misalnya panggil AJAX untuk menghapus produk
    // Tutup modal setelah penghapusan
    $('#deleteProductModal').modal('hide');
  });
});
