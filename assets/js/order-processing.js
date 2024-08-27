// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Cek apakah modal sudah ada di DOM
  if ($('#viewModal').length === 0) {
    createViewModal();
  }

  // Initialize DataTable
  if ($('.datatables-users').length) {
    dt_User = $('.datatables-users').DataTable({
      ajax: assetsPath + 'json/order-processing.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'tanggal' },
        { data: 'batch' },
        { data: 'file_name' },
        { data: 'dibuat_oleh' },
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
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data) {
            return '<span>' + data + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data) {
            const statusObj = {
              1: { title: 'Uploaded', class: 'bg-label-success' },
              2: { title: 'Pending', class: 'bg-label-warning' }
            };
            return (
              '<span class="badge ' +
              (statusObj[data]?.class || 'bg-label-secondary') +
              '">' +
              (statusObj[data]?.title || 'Unknown') +
              '</span>'
            );
          }
        },
        {
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full) {
            var $tanggal = full['tanggal'] || 'N/A';
            var $batch = full['batch'] || 'N/A';
            var $fileName = full['file_name'] || 'N/A';
            var $dibuatOleh = full['dibuat_oleh'] || 'N/A';
            var $status = full['status'];

            const statusObj = {
              1: 'Uploaded',
              2: 'Pending'
            };
            var $statusText = statusObj[$status] || 'Unknown';

            return `
                <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal"
                  data-tanggal="${$tanggal}"
                  data-batch="${$batch}"
                  data-file_name="${$fileName}"
                  data-dibuat_oleh="${$dibuatOleh}"
                  data-status="${$statusText}">
                  <i class="ri-eye-line ri-20px"></i>
                </button>
            `;
          }
        }
      ]
    });

    // Delete Record
    $('.datatables-users tbody').on('click', '.delete-record', function () {
      dt_User.row($(this).parents('tr')).remove().draw();
    });
  }

  // Deklarasi objek status dengan string sebagai kunci
  var statusObj = {
    Uploaded: { title: 'Uploaded', class: 'bg-label-success' },
    Pending: { title: 'Pending', class: 'bg-label-warning' }
  };

  // Event listener untuk tombol viewModal
  $(document).on('click', '.viewModal', function () {
    var tanggal = $(this).data('tanggal');
    var batch = $(this).data('batch');
    var fileName = $(this).data('file_name');
    var dibuatOleh = $(this).data('dibuat_oleh');
    var status = $(this).data('status');

    // Debugging
    console.log('Received Status:', status);
    console.log('Status Object:', statusObj[status]);

    // Mendapatkan status dari statusObj
    var statusInfo = statusObj[status] || { title: 'Unknown', class: 'bg-label-secondary' };

    // Debugging
    console.log('Status Info:', statusInfo);

    // Set data di modal
    $('#viewModal #tanggal').val(tanggal);
    $('#viewModal #batch').val(batch);
    $('#viewModal #fileName').val(fileName);
    $('#viewModal #dibuatOleh').val(dibuatOleh);

    // Update status dengan class yang sesuai
    $('#viewModal #status').val(statusInfo.title).attr('class', `form-control ${statusInfo.class}`);

    // Tampilkan modal
    var updateModal = new bootstrap.Modal(document.getElementById('viewModal'));
    updateModal.show();
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
                        <!-- Icon -->
                        <div class="col-12 text-center mb-3">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="" style="font-size: 50px; margin-right: 8px;"></i>
                            </div>
                        </div>
                        <!-- Order Details -->
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="tanggal" name="tanggal" class="form-control" placeholder="Masukkan tanggal" />
                                <label for="tanggal">Tanggal</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="batch" name="batch" class="form-control" placeholder="Masukkan batch" />
                                <label for="batch">Batch</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="fileName" name="fileName" class="form-control" placeholder="Masukkan nama file" />
                                <label for="fileName">Nama File</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="dibuatOleh" name="dibuatOleh" class="form-control" placeholder="Masukkan dibuat oleh" />
                                <label for="dibuatOleh">Dibuat Oleh</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating form-floating-outline">
                                <input type="text" id="status" name="status" class="form-control" placeholder="Masukkan status" />
                                <label for="status">Status</label>
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
