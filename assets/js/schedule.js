// Declare dt_User variable
let dt_User;

$('body').append(`
 <!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Schedule Off Time</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="planNo" class="form-label">Plan No</label>
            <input type="text" class="form-control" id="planNo" placeholder="Masukkan Plan No">
          </div>
          <div class="mb-3">
            <label for="offTimeType" class="form-label">Tipe Off Time</label>
            <select class="form-select" id="offTimeType">
              <option value="" disabled selected>Pilih Tipe Off Time</option>
              <option value="maintenance">Maintenance</option>
              <option value="perpanjang_dokumen">Perpanjang Dokument</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="startOffTime" class="form-label">Start Off Time</label>
            <input type="time" class="form-control" id="startOffTime">
          </div>
          <div class="mb-3">
            <label for="endOffTime" class="form-label">End Off Time</label>
            <input type="time" class="form-control" id="endOffTime">
          </div>
          <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <select class="form-select" id="status">
              <option value="" disabled selected>Pilih Status</option>
              <option value="new">New</option>
              <option value="approval">Approval</option>
            </select>
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


<!-- Modal Approval -->
<div class="modal fade" id="approval" tabindex="1" aria-labelledby="approval" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Approval Icon -->
        <div class="text-success d-flex justify-content-center w-100 mb-3">
          <i class="ri-truck-line" style="font-size: 4rem; color: #004d00;"></i> <!-- Dark Green Truck Icon -->
          <i class="ri-box-3-line" style="font-size: 4rem; color: #004d00;"></i> <!-- Dark Green Courier Icon -->
        </div>
        <!-- Approval Message -->
        <h5 style="color: #004d00;">Apakah Anda yakin untuk memberikan approval terhadap proses retur barang ini?</h5>
        <p>Data akan terkirim ke menu Outstanding Order.</p>
      </div>
      <div class="modal-footer justify-content-center">
       <button type="button" class="btn" style="background-color: #004d00; color: white;" id="confirmApproval">Ya, Approval Retur Barang</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Edit -->
<div class="modal fade" id="editModal" tabindex="2" aria-labelledby="editModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Data Retur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="storeName" class="form-label">Nama Toko</label>
            <input type="text" class="form-control" id="storeName" placeholder="Masukkan Nama Toko">
          </div>
          <div class="mb-3">
            <label for="returDocument" class="form-label">Retur Document</label>
            <input type="text" class="form-control" id="returDocument" placeholder="Masukkan Dokumen Retur">
          </div>
          <div class="mb-3">
            <label for="pickUpDate" class="form-label">Pick Up Date</label>
            <input type="date" class="form-control" id="pickUpDate">
          </div>
          <div class="mb-3">
            <label for="approvalBy" class="form-label">Approval By</label>
            <input type="text" class="form-control" id="approvalBy" placeholder="Masukkan Nama Approval">
          </div>
          <div class="mb-3">
              <label for="approvalBy" class="form-label">Status</label>
              <select class="form-select" id="approvalBy">
                  <option value="" disabled selected>Pilih Status Retur</option>
                  <option value="planned">Planned</option>
                  <option value="already_processed_wms">Already Processed WMS</option>
              </select>
          </div>
          
          <!-- Tabel Produk -->
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="productTableBody">
              <!-- Example row, you can dynamically add rows with JavaScript -->
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk"></td>
                <td><input type="number" class="form-control" placeholder="Qty"></td>
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk"></td>
                <td><input type="number" class="form-control" placeholder="Qty"></td>
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk"></td>
                <td><input type="number" class="form-control" placeholder="Qty"></td>
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
            </tbody>
          </table>
          
          <!-- Button Tambah Data Product -->
          <button type="button" class="btn btn-success w-100" id="addProduct" style="background-color: #004d00; border-color: #004d00;">Tambah Data Product</button>
        </form>
      </div>
      <!-- Modal Footer with Save Changes Button -->
      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save Changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Cancel Modal -->
<div class="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="cancelModa" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Exclamation Icon -->
        <i class="ri-error-warning-line" style="font-size: 3rem; color: red;"></i>
        <!-- Confirmation Message -->
        <p style="color: red; font-size: 1.25rem; margin-top: 10px;">Apakah Anda yakin cancel proses return barang ini?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <!-- Cancel Return Button -->
        <button type="button" class="btn btn-danger" id="confirmCancelReturn" style="background-color: red; border-color: red;">
          Ya, Cancel Retur
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
            2: { title: 'Approval', class: 'bg-label-success' }
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
        targets: -1,
        title: 'Actions',
        orderable: false,
        render: function (data, type, full) {
          console.log('Rendering data:', data, type, full);
          return `
              <div class="dropdown">
                <button 
                  class="btn btn-sm btn-icon rounded-pill waves-effect dropdown-toggle d-flex align-items-center justify-content-center" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style="border: 2px solid blue; background-color: blue; padding: 0; color: white;">
                  <i class="ri-more-2-fill" style="font-size: 20px;"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item approval" href="#">Approval</a></li>
                  <li><a class="dropdown-item editModal" href="#">Edit</a></li>
                  <li><a class="dropdown-item cancelModal" href="#">Cancel</a></li>
                </ul>
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
