$(function () {
  'use strict';

  // // Initialize Select2 elements
  // $('.select2').each(function () {
  //   $(this).select2({
  //     placeholder: $(this).attr('placeholder'),
  //     dropdownParent: $(this).parent()
  //   });
  // });

  // // Fungsi untuk membuat dan menambahkan modal ke dalam body
  // function createViewModal() {
  //   // Struktur HTML Modal
  //   var modalHTML = `
  //    <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css">
  //     <!-- Modal View -->
  //     <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
  //       <div class="modal-dialog modal-lg modal-simple modal-edit-user">
  //           <div class="modal-content">
  //               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //               <div class="modal-body p-0">
  //                   <div class="text-center mb-6">
  //                       <h4 class="mb-2">Perbarui Informasi Produk</h4>
  //                       <p class="mb-6">Memperbarui detail produk.</p>
  //                   </div>
  //                   <form id="updateForm" class="row g-5" onsubmit="return false">
  //                       <div class="row">
  //                           <!-- Kiri -->
  //                           <div class="col-md-6">
  //                               <!-- Tipe Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <select class="form-select" id="product-type" aria-label="Tipe Produk" required>
  //                                       <option value="" disabled selected>Pilih Tipe Produk</option>
  //                                       <option value="type1">Tipe 1</option>
  //                                       <option value="type2">Tipe 2</option>
  //                                       <option value="type3">Tipe 3</option>
  //                                   </select>
  //                                   <label for="product-type">Tipe Produk</label>
  //                               </div>

  //                               <!-- Nama Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="text" id="product-name" class="form-control" placeholder="e.g. Nama Produk" required />
  //                                   <label for="product-name">Nama Produk</label>
  //                               </div>

  //                               <!-- SKU Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="text" id="modalProductSKU" name="productSKU" class="form-control" placeholder="e.g. ABC1234" required />
  //                                   <label for="modalProductSKU">SKU Produk</label>
  //                               </div>

  //                               <!-- Harga Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <div class="input-group">
  //                                       <span class="input-group-text">Rp.</span>
  //                                       <input type="number" id="product-price" class="form-control" placeholder="e.g. 10000" aria-label="Harga Produk" required />
  //                                   </div>
  //                                   <label for="product-price" class="visually-hidden">Harga Produk</label>
  //                               </div>

  //                               <!-- Deskripsi Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <textarea id="modalProductDescription" class="form-control" placeholder="Deskripsi Produk" required></textarea>
  //                                   <label for="modalProductDescription">Deskripsi Produk</label>
  //                               </div>

  //                               <!-- Kategori Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="text" id="modalProductCategory" class="form-control" placeholder="Kategori Produk" required />
  //                                   <label for="modalProductCategory">Kategori Produk</label>
  //                               </div>
  //                           </div>

  //                           <!-- Kanan -->
  //                           <div class="col-md-6">
  //                               <!-- Tinggi Produk (in CM) -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="number" id="modalProductHeight" name="productHeight" class="form-control" placeholder="e.g. 150" required />
  //                                   <label for="modalProductHeight">Tinggi Produk (in CM)</label>
  //                               </div>

  //                               <!-- Lebar Produk (in CM) -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="number" id="modalProductWidth" name="productWidth" class="form-control" placeholder="e.g. 50" required />
  //                                   <label for="modalProductWidth">Lebar Produk (in CM)</label>
  //                               </div>

  //                               <!-- Panjang Produk (in CM) -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="number" id="modalProductLength" name="productLength" class="form-control" placeholder="e.g. 100" required />
  //                                   <label for="modalProductLength">Panjang Produk (in CM)</label>
  //                               </div>

  //                               <!-- Stok Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="number" id="modalProductStock" class="form-control" placeholder="Stok Produk" required />
  //                                   <label for="modalProductStock">Stok Produk</label>
  //                               </div>

  //                               <!-- Gambar Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <input type="file" id="modalProductImage" class="form-control" placeholder="Gambar Produk" accept="image/*" required />
  //                                   <label for="modalProductImage">Gambar Produk</label>
  //                               </div>

  //                               <!-- Status Produk -->
  //                               <div class="form-floating form-floating-outline mt-3">
  //                                   <select class="form-select" id="modalProductStatus" aria-label="Status Produk" required>
  //                                       <option value="" disabled selected>Pilih Status Produk</option>
  //                                       <option value="active">Aktif</option>
  //                                       <option value="inactive">Tidak Aktif</option>
  //                                   </select>
  //                                   <label for="modalProductStatus">Status Produk</label>
  //                               </div>
  //                           </div>
  //                       </div>

  //                       <div class="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4 mt-4">
  //                           <button type="submit" class="btn btn-primary">Update</button>
  //                           <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">
  //                               Batal
  //                           </button>
  //                       </div>
  //                   </form>
  //               </div>
  //           </div>
  //       </div>
  //   </div>

  // `;
  //   // Append the modal HTML to the body
  //   $('body').append(modalHTML);
  // }

  // // Create and append the modal when the document is ready
  // createViewModal();

  // Initialize DataTable
  var dt_vehicle_table = $('.datatables-vehicles');
  if (dt_vehicle_table.length) {
    var dt_vehicle = dt_vehicle_table.DataTable({
      ajax: assetsPath + 'json/vendor.json',
      columns: [
        { data: 'vendor_name' },
        { data: 'vendor_type' },
        { data: 'vendor_address' },
        { data: 'vendor_status' }
      ],
      columnDefs: [
        {
          targets: 0,
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['vendor_name'] + '</span>';
          }
        },
        {
          targets: 1,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Expedisi', class: 'bg-label-dark' },
              2: { title: 'Bengkel', class: 'bg-label-dark' }
            };
            return (
              '<span class="badge rounded-pill ' +
              statusObj[full['vendor_type']].class +
              '">' +
              statusObj[full['vendor_type']].title +
              '</span>'
            );
          }
        },
        {
          targets: 2,
          orderable: true,
          render: function (data, type, full) {
            return '<span>' + full['vendor_address'] + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Active', class: 'bg-label-success' },
              2: { title: 'Inactive', class: 'bg-label-secondary' }
            };
            return (
              '<span class="badge rounded-pill ' +
              statusObj[full['vendor_status']].class +
              '">' +
              statusObj[full['vendor_status']].title +
              '</span>'
            );
          }
        }
        // {
        //   // Actions
        //   targets: -1,
        //   title: 'Actions',
        //   orderable: false,
        //   render: function (data, type, full) {
        //     return `
        //           <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal"
        //               data-product-type="${full['product_type']}"
        //               data-product-name="${full['product_name']}"
        //               data-modal-product-sku="${full['product_sku']}"
        //               data-product-price="${full['product_price']}"
        //               data-modal-product-height="${full['product_height']}"
        //               data-modal-product-width="${full['product_width']}"
        //               data-modal-product-length="${full['product_length']}">
        //               <i class="ri-edit-line ri-20px"></i>
        //           </button>
        //           <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect" style="border: none;">
        //           <i class="ri-delete-bin-6-line ri-20px"></i>
        //           </button>
        //       `;
        //   }
        // }
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
        searchPlaceholder: 'Cari Vendor'
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

    // $(document).ready(function () {
    //   createViewModal();

    //   $(document).on('click', '.viewModal', function () {
    //     var productSKU = $(this).data('product-sku');
    //     var productHeight = $(this).data('product-height');
    //     var productWidth = $(this).data('product-width');
    //     var productLength = $(this).data('product-length');
    //     var productRestrictions = $(this).data('product-restrictions');

    //     $('#modalProductSKU').val(productSKU);
    //     $('#modalProductHeight').val(productHeight);
    //     $('#modalProductWidth').val(productWidth);
    //     $('#modalProductLength').val(productLength);
    //     $('#modalProductRestrictions').val(productRestrictions);

    //     $('#viewModal').modal('show');
    //   });
    // });

    // // Add "Add New Kendaraan" button after DataTable initialization
    // $('.add-new').html(
    //   '<a href="form-master-product.html" class="btn btn-primary" data-bs-toggle="Add New" aria-controls="Tambah Produk">Tambah Produk</a>'
    // );

    // // Delete record
    // $('.datatables-vehicles tbody').on('click', '.delete-record', function () {
    //   dt_vehicle.row($(this).parents('tr')).remove().draw();
    // });
  }
});
