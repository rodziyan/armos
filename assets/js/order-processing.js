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
    dt_User = $('.datatables-users').DataTable({
      ajax: assetsPath + 'json/order-processing.json',
      columns: [
        { data: 'id' },
        { data: 'toko' },
        { data: 'tipe_outlet' },
        { data: 'faktur_id' },
        { data: 'faktur_date' },
        { data: 'delivery_date' },
        { data: 'qty' },
        { data: 'wms_qty' },
        { data: 'value' },
        { data: 'status' },
        { data: 'inv_status' },
        { data: 'scheduled_optimization_date' },
        { data: 'scheduled_optimization_time' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          targets: 0, // Checkbox in first column
          orderable: false,
          render: function (data, type, row) {
            return '<input type="checkbox" class="select-checkbox" style="display:none;">';
          }
        },
        {
          targets: 1, // Toko
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 2, // Tipe Outlet
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 3, // Faktur ID
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 4, // Faktur Date
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 5, // Delivery Date
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 6, // Qty
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 7, // WMS Qty
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 8, // Value
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 9, // Status
          render: function (data, type, full, meta) {
            var $status = full['status'];
            var statusObj = {
              1: { title: 'New', class: 'bg-label-blue' },
              2: { title: 'Pending', class: 'bg-label-warning' }
            };

            // Ensure statusObj[$status] exists
            if (statusObj[$status]) {
              return (
                '<span class="badge rounded-pill ' +
                statusObj[$status].class +
                ' text-capitalized">' +
                statusObj[$status].title +
                '</span>'
              );
            } else {
              return '<span class="badge rounded-pill bg-label-secondary text-capitalized">Unknown</span>';
            }
          }
        },
        {
          targets: 10, // Inventory Status
          render: function (data, type, full, meta) {
            var $invStatus = full['inv_status'];
            var invStatusObj = {
              1: { title: 'Full Fill', class: 'bg-label-success' }, // Full inventory
              2: { title: 'Not Full Fill', class: 'bg-label-danger' } // Inventory not full
            };

            // Ensure invStatusObj[$invStatus] exists
            if (invStatusObj[$invStatus]) {
              return (
                '<span class="badge rounded-pill ' +
                invStatusObj[$invStatus].class +
                ' text-capitalized">' +
                invStatusObj[$invStatus].title +
                '</span>'
              );
            } else {
              return '<span class="badge rounded-pill bg-label-secondary text-capitalized">Unknown</span>';
            }
          }
        },
        {
          targets: 11, // Scheduled Optimization Date
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 12, // Scheduled Optimization Time
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: -1, // Actions
          title: 'Actions',
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

            const statusObj = {
              1: 'New',
              2: 'Pending'
            };
            var $statusText = statusObj[$status] || 'Unknown';

            // Build the base buttons (view and update)
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
              <button type="button" class="btn btn-sm btn-warning btn-icon rounded-pill waves-effect updateModal"
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

            // Only append the optimization button for 'Toko D'
            if ($toko === 'Toko D') {
              buttons += `
                <button id="optimizationButton" type="button" class="btn btn-sm btn-warning btn-icon rounded-pill waves-effect unholdModal">
                  <i class="ri-error-warning-line ri-20px"></i>
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
      <button type="button" class="btn btn-primary" id="selectAllBtn">
        Select
      </button>
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

  // Tambahkan event listener pada tombol View dan Update
  $(document).on('click', '.viewModal, .updateModal', function () {
    // Ambil data dari atribut data-* tombol yang diklik
    var $this = $(this);
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

    // Isi modal dengan data
    $('#viewModal #toko').val(toko);
    $('#viewModal #tipeOutlet').val(tipeOutlet);
    $('#viewModal #fakturId').val(fakturId);
    $('#viewModal #fakturDate').val(fakturDate);
    $('#viewModal #deliveryDate').val(deliveryDate);
    $('#viewModal #qty').val(qty);
    $('#viewModal #value').val(value);
    $('#viewModal #status').val(status);
    $('#viewModal #scheduledOptimizationDate').val(scheduledOptimizationDate);
    $('#viewModal #scheduledOptimizationTime').val(scheduledOptimizationTime);
    $('#viewModal #deliveryType').val(deliveryType);

    // Tampilkan modal
    $('#viewModal').modal('show');
  });
});

// Fungsi untuk membuat modal
function createViewModal() {
  var modalHTML = `
    <!-- Modal View -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-simple modal-edit-user">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body p-0">
                    <div class="text-center mb-6">
                        <h4 class="mb-2">Detail Order Processing</h4>
                    </div>
                    <form id="viewForm" class="row g-5" onsubmit="return false">
                        <!-- Order Details -->
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="toko" name="toko" class="form-control" placeholder="Masukkan nama toko" readonly />
                                <label for="toko">Toko</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="tipeOutlet" name="tipeOutlet" class="form-control" placeholder="Masukkan tipe outlet" readonly />
                                <label for="tipeOutlet">Tipe Outlet</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="fakturId" name="fakturId" class="form-control" placeholder="Masukkan ID faktur" readonly />
                                <label for="fakturId">Faktur ID</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="fakturDate" name="fakturDate" class="form-control" placeholder="Masukkan tanggal faktur" readonly />
                                <label for="fakturDate">Tanggal Faktur</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="deliveryDate" name="deliveryDate" class="form-control" placeholder="Masukkan tanggal pengiriman" readonly />
                                <label for="deliveryDate">Tanggal Pengiriman</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="qty" name="qty" class="form-control" placeholder="Masukkan jumlah" readonly />
                                <label for="qty">Qty</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="value" name="value" class="form-control" placeholder="Masukkan nilai" readonly />
                                <label for="value">Value</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="status" name="status" class="form-control" placeholder="Masukkan status" readonly />
                                <label for="status">Status</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="scheduledOptimizationDate" name="scheduledOptimizationDate" class="form-control" placeholder="Masukkan tanggal optimasi yang dijadwalkan" readonly />
                                <label for="scheduledOptimizationDate">Tanggal Optimasi yang Dijadwalkan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="scheduledOptimizationTime" name="scheduledOptimizationTime" class="form-control" placeholder="Masukkan waktu optimasi yang dijadwalkan" readonly />
                                <label for="scheduledOptimizationTime">Waktu Optimasi yang Dijadwalkan</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="deliveryType" name="deliveryType" class="form-control" placeholder="Masukkan tipe pengiriman" readonly />
                                <label for="deliveryType">Tipe Pengiriman</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

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
