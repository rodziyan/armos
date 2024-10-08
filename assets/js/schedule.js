// Declare dt_User variable
let dt_User;

$('body').append(`
 <!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Schedule Off Time</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="planNo" class="form-label">Plat No</label>
              <input type="text" class="form-control" id="planNo" placeholder="Masukkan Plat No">
            </div>
            <div class="col-md-6">
              <label for="offTimeType" class="form-label">Tipe Off Time</label>
              <select class="form-select" id="offTimeType">
                <option value="" disabled selected>Pilih Tipe Off Time</option>
                <option value="maintenance">Maintenance</option>
                <option value="perpanjang_dokumen">Perpanjang Dokument</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="startOffTime" class="form-label">Start Off Date</label>
              <input type="date" class="form-control" id="startOffTime">
            </div>
            <div class="col-md-6">
              <label for="endOffTime" class="form-label">End Off Date</label>
              <input type="date" class="form-control" id="endOffTime">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="status" class="form-label">Status</label>
              <select class="form-select" id="status">
                <option value="" disabled selected>Pilih Status</option>
                <option value="new">New</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="assignVendor" class="form-label">Assign Vendor</label>
              <select class="form-select" id="assignVendor">
                <option value="" disabled selected>Pilih Vendor</option>
                <option value="vendorA">Vendor A</option>
                <option value="vendorB">Vendor B</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="requestDate" class="form-label">Request Date</label>
              <input type="date" class="form-control" id="requestDate">
            </div>
            <div class="col-md-6">
              <label for="requestedBy" class="form-label">Requested By</label>
              <input type="text" class="form-control" id="requestedBy" placeholder="Masukkan Nama">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="approvalDate" class="form-label">Approval Date</label>
              <input type="date" class="form-control" id="approvalDate">
            </div>
            <div class="col-md-6">
              <label for="approvalBy" class="form-label">Approved By</label>
              <input type="text" class="form-control" id="approvalBy" placeholder="Masukkan Nama">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <label for="notes" class="form-label">Notes</label>
              <textarea class="form-control" id="notes" rows="3" placeholder="Masukkan catatan di sini..."></textarea>
            </div>
          </div>
        </form>
      </div>
      <!-- Modal Footer with Cancel and Save Buttons -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="approval" tabindex="2" aria-labelledby="approval" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Schedule Off Time</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="planNo" class="form-label">Plat No</label>
              <input type="text" class="form-control" id="planNo" placeholder="Masukkan Plat No" value="JKL012" readonly>
            </div>
            <div class="col-md-6">
              <label for="offTimeType" class="form-label">Tipe Off Time</label>
              <select class="form-select" id="offTimeType" disabled>
                <option value="Maintenance" selected>Maintenance</option>
                <option value="maintenance">Maintenance</option>
                <option value="perpanjang_dokumen">Perpanjang Dokument</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="startOffTime" class="form-label">Start Off Date</label>
              <input type="date" class="form-control" id="startOffTime" value="2024-09-13" readonly>
            </div>
            <div class="col-md-6">
              <label for="endOffTime" class="form-label">End Off Date</label>
              <input type="date" class="form-control" id="endOffTime" value="2024-09-13" readonly>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="status" class="form-label">Status</label>
              <select class="form-select" id="status" disabled>
                <option value="1" selected>Approved</option>
                <option value="new">New</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="assignVendor" class="form-label">Assign Vendor</label>
              <select class="form-select" id="assignVendor" disabled>
                <option value="Vendor 4" selected>Vendor 4</option>
                <option value="vendorA">Vendor A</option>
                <option value="vendorB">Vendor B</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="requestDate" class="form-label">Request Date</label>
              <input type="date" class="form-control" id="requestDate" value="2024-09-05" readonly>
            </div>
            <div class="col-md-6">
              <label for="requestedBy" class="form-label">Requested By</label>
              <input type="text" class="form-control" id="requestedBy" placeholder="Masukkan Nama" value="User D" readonly>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="approvalDate" class="form-label">Approval Date</label>
              <input type="date" class="form-control" id="approvalDate" value="2024-09-06" readonly>
            </div>
            <div class="col-md-6">
              <label for="approvalBy" class="form-label">Approved By</label>
              <input type="text" class="form-control" id="approvalBy" placeholder="Masukkan Nama" value="Manager W" readonly>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <label for="notes" class="form-label">Notes</label>
              <textarea class="form-control" id="notes" rows="3" placeholder="Masukkan catatan di sini..." readonly></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="editModal" tabindex="2" aria-labelledby="editModal" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Schedule Off Time</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="planNo" class="form-label">Plat No</label>
              <input type="text" class="form-control" id="planNo" placeholder="Masukkan Plat No" value="JKL012">
            </div>
            <div class="col-md-6">
              <label for="offTimeType" class="form-label">Tipe Off Time</label>
              <select class="form-select" id="offTimeType">
                <option value="" disabled>Pilih Tipe Off Time</option>
                <option value="maintenance">Maintenance</option>
                <option value="perpanjang_dokumen">Perpanjang Dokument</option>
                <option value="lainnya">Lainnya</option>
                <option value="Maintenance" selected>Maintenance</option> <!-- Pre-selected -->
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="startOffTime" class="form-label">Start Off Date</label>
              <input type="date" class="form-control" id="startOffTime" value="2024-09-13">
            </div>
            <div class="col-md-6">
              <label for="endOffTime" class="form-label">End Off Date</label>
              <input type="date" class="form-control" id="endOffTime" value="2024-09-13">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="status" class="form-label">Status</label>
              <select class="form-select" id="status">
                <option value="" disabled>Pilih Status</option>
                <option value="new">New</option>
                <option value="approved" selected>Approval</option> <!-- Pre-selected -->
              </select>
            </div>
            <div class="col-md-6">
              <label for="assignVendor" class="form-label">Assign Vendor</label>
              <select class="form-select" id="assignVendor">
                <option value="" disabled>Pilih Vendor</option>
                <option value="vendorA">Vendor A</option>
                <option value="vendorB">Vendor B</option>
                <option value="vendor4" selected>Vendor 4</option> <!-- Pre-selected -->
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="requestDate" class="form-label">Request Date</label>
              <input type="date" class="form-control" id="requestDate" value="2024-09-05">
            </div>
            <div class="col-md-6">
              <label for="requestedBy" class="form-label">Requested By</label>
              <input type="text" class="form-control" id="requestedBy" placeholder="Masukkan Nama" value="User D">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="approvalDate" class="form-label">Approval Date</label>
              <input type="date" class="form-control" id="approvalDate" value="2024-09-06">
            </div>
            <div class="col-md-6">
              <label for="approvalBy" class="form-label">Approved By</label>
              <input type="text" class="form-control" id="approvalBy" placeholder="Masukkan Nama" value="Manager W">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <label for="notes" class="form-label">Notes</label>
              <textarea class="form-control" id="notes" rows="3" placeholder="Masukkan catatan di sini..."></textarea>
            </div>
          </div>
        </form>
      </div>
      <!-- Modal Footer with Cancel and Save Buttons -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>


<!-- Delete Confirmation Modal -->
<div class="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="cancelModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Delete Icon -->
        <i class="ri-delete-bin-5-line" style="font-size: 3rem; color: red;"></i>
        <!-- Confirmation Message -->
        <p style="color: red; font-size: 1.25rem; margin-top: 10px;">Apakah Anda yakin akan menghapus item ini?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <!-- Cancel Button -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <!-- Delete Button -->
        <button type="button" class="btn btn-danger" id="confirmDelete" style="background-color: red; border-color: red;">
          Ya, Hapus
        </button>
      </div>
    </div>
  </div>
</div>
`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/schedule.json',
    columns: [
      { data: 'no_plat_kendaraan' },
      { data: 'tipe_off_time' },
      { data: 'start_off_date' },
      { data: 'end_off_date' },
      { data: 'status' },
      { data: 'vendor' },
      { data: 'request_date' },
      { data: 'request_by' },
      { data: 'approval_date' },
      { data: 'approval_by' },
      { data: 'action' }
    ],
    columnDefs: [
      {
        targets: 0,
        render: function (data) {
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: 1,
        render: function (data) {
          return '<span>' + data + '</span>';
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
        render: function (data, type, full) {
          // Define the updated statusObj for mapping delivery_status values
          var statusObj = {
            1: { title: 'New', class: 'bg-label-primary' },
            2: { title: 'Approved', class: 'bg-label-success' }
          };

          // Fallback if status is not in statusObj
          var status = statusObj[full['status']] || { title: 'Unknown', class: 'bg-label-secondary' };

          return '<span class="badge rounded-pill ' + status.class + '">' + status.title + '</span>';
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
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: 7,
        render: function (data) {
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: 8,
        render: function (data) {
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: 9,
        render: function (data) {
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: -1,
        title: 'Actions',
        orderable: false,
        render: function (data, type, full) {
          console.log('Rendering data:', data, type, full);
          return `
              <div class="button-group">
                <button class="btn btn-sm btn-icon rounded-pill waves-effect approval" 
                        style="border: 2px solid green; background-color: green; color: white; padding: 0; display: flex; align-items: center;">
                    <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                        <i class="ri-eye-line ms-3" style="font-size: 20px;"></i>
                    </span>
                </button>
                
                <button class="btn btn-sm btn-icon rounded-pill waves-effect editModal" 
                        style="border: 2px solid orange; background-color: orange; color: white; padding: 0; display: flex; align-items: center;">
                    <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                        <i class="ri-pencil-line ms-3" style="font-size: 20px;"></i>
                    </span>
                </button>
                
                <button class="btn btn-sm btn-icon rounded-pill waves-effect cancelModal" 
                        style="border: 2px solid red; background-color: red; color: white; padding: 0; display: flex; align-items: center;">
                    <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                        <i class="ri-delete-bin-line ms-3" style="font-size: 20px;"></i>
                    </span>
                </button>
            </div>
            `;
        }
      }
    ],
    // Remove the default search box
    dom: '<"d-flex justify-content-end align-items-end mt-4 mb-4 me-4"B>t',
    // Add custom buttons
    buttons: [
      {
        text: 'Buat Baru',
        className: 'btn btn-primary',
        action: function (e, dt, node, config) {
          // Memanggil modal dengan id 'myModal'
          $('#myModal').modal('show');
        }
      }
    ]
  });

  // Show Cancel Route Modal
  $('.datatables-users tbody').on('click', '.approval', function () {
    $('#approval').modal('show');
  });
  // Show Cancel Route Modal
  $('.datatables-users tbody').on('click', '.editModal', function () {
    $('#editModal').modal('show');
  });
  // Show Cancel Route Modal
  $('.datatables-users tbody').on('click', '.cancelModal', function () {
    $('#cancelModal').modal('show');
  });
});
