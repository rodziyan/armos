// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Cek apakah modal view dan unhold sudah ada di DOM, jika belum buat
  if ($('#viewModal').length === 0) {
    createViewModal(); // Fungsi untuk membuat viewModal
  }

  // Initialize DataTable
  if ($('.datatables-users').length) {
    var dt_User = $('.datatables-users').DataTable({
      ajax: {
        url: assetsPath + 'json/order-processingCopy.json',
        dataSrc: '', // Ensure that the data is coming from the root of the JSON
        error: function (xhr, error, code) {
          console.error('Error loading data:', error);
          alert('Failed to load data. Please check the network or JSON file.');
        }
      },
      columns: [
        { data: '' },
        { data: 'status' },
        { data: 'toko' },
        { data: 'jenis_toko' },
        { data: 'id_order' },
        { data: 'tanggal_order' },
        { data: 'tanggal_kirim' },
        { data: 'jumlah_order' },
        { data: 'jumlah_terkirim' },
        { data: 'inv_status' },
        { data: 'harga' },
        { data: 'tanggal' },
        { data: 'waktu_kirim' },
        { data: 'doc_ref' },
        { data: '' }
      ],
      columnDefs: [
        {
          targets: 0, // 'status' column
          render: function (data, type, row) {
            return '<input type="checkbox" class="select-checkbox">';
          }
        },
        {
          targets: 1, // 'status' column
          render: function (data) {
            return data == 1 ? '<span style="color: blue;">New</span>' : '<span style="color: red;">Hold</span>';
          }
        },
        {
          targets: 2, // 'toko' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 3, // 'jenis_toko' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 4, // 'id_order' column
          render: function (data, type, row) {
            if (row.id_order === 'R001') {
              return '<span style="color: red;">' + data + '</span>';
            } else {
              return '<span>' + data + '</span>';
            }
          }
        },
        {
          targets: 5, // 'tanggal_order' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 6, // 'tanggal_kirim' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 7, // 'jumlah_order' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 8, // 'jumlah_terkirim' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 9, // 'inv_status' column
          render: function (data) {
            // Jika data adalah null atau undefined, return kosong
            if (data === null || data === undefined) {
              return '';
            }

            // Jika data == 1, tampilkan "FulFilled" dalam warna hijau
            return data == 1
              ? '<span style="color: green;">FulFilled</span>'
              : '<span style="color: red;">Not FulFilled</span>';
          }
        },
        {
          targets: 10, // 'harga' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 11, // 'tanggal' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 12, // 'waktu_kirim' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 13, // 'doc_ref' column
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 14,
          data: null,
          orderable: false,
          render: function (data, type, full) {
            var $id = full['id'] || 'N/A';
            var $toko = full['toko'] || 'N/A';
            var $tipeOutlet = full['tipe_outlet'] || 'N/A';
            var $fakturId = full['faktur_id'] || 'N/A';
            var $fakturDate = full['faktur_date'] || 'N/A';
            var $deliveryDate = full['delivery_date'] || 'N/A';
            var $qty = full['qty'] || 'N/A';
            var $value = full['value'] || 'N/A';
            var $status = full['status'];
            var $scheduledOptimizationDate = full['scheduled_optimization_date'];
            var $scheduledOptimizationTime = full['scheduled_optimization_time'];
            var $deliveryType = full['delivery_type'] || 'N/A';
            var $jumlah_order = full['jumlah_order'] || 'N/A';
            var $jumlah_terkirim = full['jumlah_terkirim'] || 'N/A';
            var $tanggal = full['tanggal'] || 'N/A';
            var $waktu_kirim = full['waktu_kirim'] || 'N/A';
            var $harga = full['harga'] || 'N/A';

            const statusObj = {
              1: 'New',
              2: 'Pending'
            };
            var $statusText = statusObj[$status] || 'Unknown';

            var buttons = `
            <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal"
                data-id="${$id}"
                data-toko="${$toko}"
                data-tipe_outlet="${$tipeOutlet}"
                data-faktur_id="${$fakturId}"
                data-faktur_date="${$fakturDate}"
                data-delivery_date="${$deliveryDate}"
                data-qty="${$qty}"
                data-value="${$value}"
                data-status="${$statusText}"
                data-scheduled_optimization_date="${$scheduledOptimizationDate}"
                data-scheduled_optimization_time="${$scheduledOptimizationTime}"
                data-delivery_type="${$deliveryType}">
                <i class="ri-eye-line ri-20px"></i>
            </button>
          `;

            // Check the value of 'toko' for additional conditions
            if (full['toko'] === 'Toko D') {
              console.log('Toko A or Toko C detected');
              // Green color if inv_status === 2, status === 2, and toko is Toko A or Toko C
              buttons += `
      <button type="button" class="btn btn-sm btn-success btn-icon rounded-pill waves-effect updateModal"
          data-id="${$id}"
          data-toko="${$toko}"
          data-tipe_outlet="${$tipeOutlet}"
          data-faktur_id="${$fakturId}"
          data-faktur_date="${$fakturDate}"
          data-delivery_date="${$deliveryDate}"
          data-qty="${$qty}"
          data-value="${$value}"
          data-status="${$statusText}"
          data-scheduled_optimization_date="${$scheduledOptimizationDate}"
          data-scheduled_optimization_time="${$scheduledOptimizationTime}"
          data-delivery_type="${$deliveryType}">
          <i class="ri-edit-line ri-20px"></i>
      </button>
  `;
            } else if (null) {
              console.log('Toko A or Toko C not detected, using default gray button');
              // Gray color if inv_status === 2, status === 2, and toko is neither Toko A nor Toko C
              buttons += `
      <button type="button" class="btn btn-sm btn-secondary btn-icon rounded-pill waves-effect updateModal"
          data-id="${$id}"
          data-toko="${$toko}"
          data-tipe_outlet="${$tipeOutlet}"
          data-faktur_id="${$fakturId}"
          data-faktur_date="${$fakturDate}"
          data-delivery_date="${$deliveryDate}"
          data-qty="${$qty}"
          data-value="${$value}"
          data-status="${$statusText}"
          data-scheduled_optimization_date="${$scheduledOptimizationDate}"
          data-scheduled_optimization_time="${$scheduledOptimizationTime}"
          data-delivery_type="${$deliveryType}"
          disabled>
          <i class="ri-edit-line ri-20px"></i>
      </button>
  `;
            } else if (null) {
              console.log('Toko E or Toko G detected, using blue button');
              // Blue color if status === 2 (New status)
              buttons += `
      <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal"
          data-id="${$id}"
          data-toko="${$toko}"
          data-tipe_outlet="${$tipeOutlet}"
          data-faktur_id="${$fakturId}"
          data-faktur_date="${$fakturDate}"
          data-delivery_date="${$deliveryDate}"
          data-qty="${$qty}"
          data-value="${$value}"
          data-status="${$statusText}"
          data-scheduled_optimization_date="${$scheduledOptimizationDate}"
          data-scheduled_optimization_time="${$scheduledOptimizationTime}"
          data-delivery_type="${$deliveryType}">
          <i class="ri-edit-line ri-20px"></i>
      </button>
  `;
            }

            if (full['id_order'] === 'F004') {
              // Abu-abu: Admin ekspedisi belum mengajukan dokumen reconciliation
              buttons += `
                  <button type="button" class="btn btn-sm btn-secondary btn-icon rounded-pill waves-effect" 
                          data-bs-toggle="modal" data-bs-target="#modalView" style="background-color: gray;"
                          >
                      <i class="ri-file-edit-line"></i> 
                  </button>
              `;
            } else if (null) {
              // Merah: Dokumen reconciliation sudah diajukan, tapi Finance belum lengkapi
              buttons += `
                  <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect" 
                          data-bs-toggle="modal" data-bs-target="#revisiSave">
                      <i class="ri-file-edit-line"></i> 
                  </button>
              `;
            } else if (full['toko'] === 'Toko D' || full['toko'] === 'Toko F') {
              // Hijau: Dokumen sudah dilengkapi oleh Finance, Document Ref terisi
              buttons += `
                  <button type="button" class="btn btn-sm btn-success btn-icon rounded-pill waves-effect" 
                          data-bs-toggle="modal" data-bs-target="#editFakur">
                      <i class="ri-file-edit-line"></i> 
                  </button>
              `;
            }

            if (full['status'] === 2) {
              // Abu-abu: Admin ekspedisi belum mengajukan dokumen reconciliation
              buttons += `
                 <button class="btn btn-warning btn-icon rounded-pill waves-effect unholdModal">
                    <i class="ri-error-warning-line" style="color: black;"></i>
                  </button>
              `;
            }

            return buttons;
          }
        }
      ],
      dom: '<"top"<"d-flex justify-content-end mt-5 mb-5 me-5"<"dropdown-container">>>rt<"bottom"lp><"clear">'
    });

    // Append the custom dropdown button to the container
    $('div.dropdown-container').html(`
      <div>
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
          Action
        </button>
       <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" id="RoutingModal" data-bs-toggle="modal" data-bs-target="#routingModal">Manual Routing</a></li>
          <li><a class="dropdown-item" href="#" id="holdAction" data-bs-toggle="modal" data-bs-target="#holdModal">Hold</a></li>
      </ul>
      </div>
    `);

    // Toggle checkboxes on button click
    $('#selectAllBtn').on('click', function () {
      $('.select-checkbox').each(function () {
        $(this).toggle(); // Tampilkan atau sembunyikan checkbox
      });
    });

    // Event listener untuk unhold modal
    $(document).on('click', '.unholdModal', function () {
      var id = $(this).data('id'); // Ambil data ID jika diperlukan
      console.log($('#unholdModal')); // Debug log
      $('#unholdModal').modal('show'); // Tampilkan modal
    });
  }
  $(document).ready(function () {
    // Tambahkan event listener untuk tombol View dan Update
    $(document).on('click', '.viewModal, .updateModal', function () {
      var $this = $(this);

      // Ambil data dari atribut data-* tombol yang diklik
      var id = $this.data('id');
      var toko = $this.data('toko');
      var tipeOutlet = $this.data('tipe_outlet');
      var fakturId = $this.data('faktur_id');
      var fakturDate = $this.data('faktur_date');
      var deliveryDate = $this.data('delivery_date');
      var qty = $this.data('qty');
      var value = $this.data('value');
      var status = $this.data('status');
      var scheduledOptimizationDate = $this.data('scheduled_optimization_date');
      var scheduledOptimizationTime = $this.data('scheduled_optimization_time');
      var deliveryType = $this.data('delivery_type');

      // Cek apakah tombol yang diklik adalah tombol viewModal atau updateModal
      if ($this.hasClass('viewModal')) {
        // Set data untuk viewModal
        $('#viewToko').text('Toko: ' + toko);
        $('#viewTipeOutlet').text('Tipe Outlet: ' + tipeOutlet);
        $('#viewFakturId').text('Faktur ID: ' + fakturId);
        $('#viewFakturDate').text('Faktur Date: ' + fakturDate);
        $('#viewDeliveryDate').text('Delivery Date: ' + deliveryDate);
        $('#viewQty').text('Quantity: ' + qty);
        $('#viewValue').text('Value: ' + value);
        $('#viewStatus').text('Status: ' + status);
        $('#viewScheduledOptimizationDate').text('Scheduled Optimization Date: ' + scheduledOptimizationDate);
        $('#viewScheduledOptimizationTime').text('Scheduled Optimization Time: ' + scheduledOptimizationTime);
        $('#viewDeliveryType').text('Delivery Type: ' + deliveryType);

        // Tampilkan modal viewModal saja
        $('#viewModal').modal('show');
      } else if ($this.hasClass('updateModal')) {
        // Set data untuk updateModal
        $('#updateToko').text('Toko: ' + toko);
        $('#updateTipeOutlet').text('Tipe Outlet: ' + tipeOutlet);
        $('#updateFakturId').text('Faktur ID: ' + fakturId);
        $('#updateFakturDate').text('Faktur Date: ' + fakturDate);
        $('#updateDeliveryDate').text('Delivery Date: ' + deliveryDate);
        $('#updateQty').text('Quantity: ' + qty);
        $('#updateValue').text('Value: ' + value);
        $('#updateStatus').text('Status: ' + status);
        $('#updateScheduledOptimizationDate').text('Scheduled Optimization Date: ' + scheduledOptimizationDate);
        $('#updateScheduledOptimizationTime').text('Scheduled Optimization Time: ' + scheduledOptimizationTime);
        $('#updateDeliveryType').text('Delivery Type: ' + deliveryType);

        // Tampilkan modal updateModal saja
        $('#updateModal').modal('show');
      }
    });
  });
});

// Fungsi untuk membuat modal
function createViewModal() {
  var modalHTML = `
    <!-- Modal with updated design and increased content size -->
<div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="max-width: 80%; width: auto; max-height: 90vh;">
        <div class="modal-content">
            <div class="d-flex justify-content-end me-3 mt-3">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
            <div class="modal-body">
                <!-- Top Section: Toko and Document ID -->
                <div class="d-flex justify-content-between mb-4">
                    <div>
                        <p><strong>Toko:</strong> <span id="toko"></span></p>
                        <p><strong>Document ID:</strong> <span id="fakturId"></span></p>
                    </div>
                </div>

                <!-- Bottom Section: Table with Order Details -->
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="table-success">
                            <tr>
                                <th>SKU Produk</th>
                                <th>Nama Produk</th>
                                <th>Faktur Qty</th>
                                <th>WMS Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Example Row -->
                            <tr>
                                <td>SKU001</td>
                                <td>Produk A</td>
                                <td>20</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>SKU002</td>
                                <td>Produk B</td>
                                <td>30</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>SKU003</td>
                                <td>Produk C</td>
                                <td>40</td>
                                <td>40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal with updated design and increased content size -->
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="max-width: 80%; width: auto; max-height: 90vh;">
        <div class="modal-content">
            <div class="d-flex justify-content-end me-3 mt-3">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Top Section: Toko and Document ID -->
                <div class="d-flex justify-content-between mb-4">
                    <div>
                        <p><strong>Toko:</strong> <span id="toko"></span></p>
                        <p><strong>Document ID:</strong> <span id="fakturId"></span></p>
                    </div>
                </div>

                <!-- Bottom Section: Table with Order Details -->
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="table-success">
                            <tr>
                                <th>SKU Produk</th>
                                <th>Nama Produk</th>
                                <th>Faktur Qty</th>
                                <th>WMS Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Example Row -->
                            <tr>
                                <td>SKU001</td>
                                <td>Produk A</td>
                                <td><input type="text" class="form-control form-control-sm" value="9" id="fakturQty1"></td>
                                <td><input type="text" class="form-control form-control-sm" value="5" id="wmsQty1"></td>
                            </tr>
                            <tr>
                                <td>SKU002</td>
                                <td>Produk B</td>
                                <td><input type="text" class="form-control form-control-sm" value="8" id="fakturQty2" readonly></td>
                                <td><input type="text" class="form-control form-control-sm" value="8" id="wmsQty2" readonly></td>
                            </tr>
                            <tr>
                                <td>SKU003</td>
                                <td>Produk C</td>
                                <td><input type="text" class="form-control form-control-sm" value="8" id="fakturQty3" readonly></td>
                                <td><input type="text" class="form-control form-control-sm" value="8" id="wmsQty3" readonly></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <!-- Bottom Action Section -->
<div class="d-flex justify-content-end mt-3">
    <button type="button" class="btn btn-success btn-sm rounded-pill" style="background-color: #006400; border-color: #006400;" data-bs-toggle="modal" data-bs-target="#changeQTY">
        <i class=""></i> Save Changes
    </button>
</div>

                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="changeQTY" tabindex="-1" aria-labelledby="changeQTYModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="changeQTYModalLabel">Konfirmasi Perubahan Jumlah</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <i class="ri-exchange-dollar-line" style="font-size: 30px; color: #2e7d32;"></i>
                <p style="color: #2e7d32;">Apakah Anda yakin ingin mengubah jumlah order ini?</p>
                <p>Perubahan akan diterapkan dan order akan diproses.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Konfirmasi</button>
            </div>
        </div>
    </div>
</div>
<!--  Ketika melakukan penyimpanan perubahan 
Quantity pada Outstanding Order, Schedule 
Opt. Date dan Time pada data order tersebut di
simpan pada cut-off terdekat dari optimisasi 
selanjutnya. -->

    <!-- Modal -->
<div class="modal fade" id="unholdModal" tabindex="-1" aria-labelledby="unholdModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="unholdModalLabel">Unhold Order</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <i class="ri-calendar-line" style="font-size: 30px; color: #2e7d32;"></i>
                <p style="color: #2e7d32;">Apakah Anda ingin membatalkan hold order dan order akan diproses ke Route Optimization?</p>
                <p>Data ini akan teroptimisasi pada Selasa, 2 Januari 2024 jam 10:00 WIB</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Save</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="modalView" tabindex="-1" aria-labelledby="modalViewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editFakurLabel">Revisi Faktur</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Form Edit -->
                <form id="editForm">
                    <!-- Left Column -->
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="documentID" class="form-label">Document ID</label>
                            <input type="text" class="form-control" id="documentID" placeholder="Masukkan Document ID" value="F004" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="documentType" class="form-label">Tipe Dokumen</label>
                            <input type="text" class="form-control" id="documentType" placeholder="Masukkan Tipe Dokumen" value="Revisi Faktur" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Deskripsi <span class="text-danger">*</span></label>
                            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi" required>Faktur revisi untuk penyesuaian quantity.</textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
      <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
    </div>
        </div>
    </div>
</div>


<div class="modal fade" id="revisiSave" tabindex="-1" aria-labelledby="revisiSaveLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Document ID Section -->
                <label for="documentID" class="form-label">Document ID</label>
                <input type="text" id="documentID" class="form-control" value="F000" readonly>

                <!-- Document Reconciliation Section -->
                <label for="actionSelect" class="form-label mt-3">Document Reconciliation</label>
                <select class="form-select" id="actionSelect">
                    <option value="revisiFaktur" selected>Revisi Faktur</option>
                    <option value="koreksiJual">Koreksi Jual</option>
                    <option value="barangHilang">Barang Hilang</option>
                    <option value="tukarFaktur">Tukar Faktur</option>
                    <option value="lainnya">Lainnya</option>
                </select>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="editFakur" tabindex="-1" aria-labelledby="editFakurLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editFakurLabel">Revisi Faktur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row">
            <!-- Left Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <label for="documentID" class="form-label">Document ID</label>
                <input type="text" class="form-control" id="documentID" placeholder="Masukkan Document ID" value="F000">
              </div>
              <div class="mb-3">
                <label for="documentType" class="form-label">Tipe Dokumen</label>
                <input type="text" class="form-control" id="documentType" placeholder="Masukkan Tipe Dokumen" value="Faktur Revisi">
              </div>
              <div class="mb-3">
                <label for="documentRef" class="form-label">Document Ref</label>
                <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref" value="Delivery">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Deskripsi</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi">Faktur revisi untuk penyesuaian quantity.</textarea>
              </div>
            </div>

            <!-- Right Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/KFaktur.png" alt="Foto Dokumen Revisi Faktur" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

  `;
  // Tambahkan modal ke DOM
  $('body').append(modalHTML);
}
const style = document.createElement('style');
style.innerHTML = `
  .bg-label-blue {
    background-color: #0000FF; /* Warna Biru */
    color: white; /* Warna teks putih agar kontras dengan latar belakang biru */
    padding: 5px 10px;
    border-radius: 4px;
  }
  .bg-label-warning {
    background-color: #DC3545; /* Merah */
    color: white; /* Warna teks putih agar kontras dengan latar belakang merah */
    padding: 5px 10px;
    border-radius: 4px;
  }
  .btn-select {
    border: 1px solid #d1d1d1;
    padding: 20px;
    width: 100%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }
  .btn-select:hover {
    border-color: #007bff;
    background-color: #f0f8ff;
  }
  .btn-select.active {
    border-color: #007bff;
    background-color: #e0f0ff;
  }
`;

// Menambahkan elemen style ke head
document.head.appendChild(style);
