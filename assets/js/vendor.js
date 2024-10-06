// Declare dt_User variable
let dt_User;

$('body').append(`
<!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Vendor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="vendorName" class="form-label">Nama Vendor</label>
            <input type="text" class="form-control" id="vendorName" placeholder="Masukkan Nama Vendor">
          </div>
          <div class="mb-3">
            <label for="vendorType" class="form-label">Tipe Vendor</label>
            <select class="form-select" id="vendorType">
              <option value="" disabled selected>Pilih Tipe Vendor</option>
              <option value="expedisi">Expedisi</option>
              <option value="bengkel">Bengkel</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="vendorAddress" class="form-label">Alamat Vendor</label>
            <textarea class="form-control" id="vendorAddress" rows="3" placeholder="Masukkan Alamat Vendor"></textarea>
          </div>
          <div class="mb-3">
            <label for="vendorStatus" class="form-label">Status</label>
            <select class="form-select" id="vendorStatus">
              <option value="" disabled selected>Pilih Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
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


<div class="modal fade" id="approval" tabindex="2" aria-labelledby="approval" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Vendor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="vendorName" class="form-label">Nama Vendor</label>
            <input type="text" class="form-control" id="vendorName" placeholder="Masukkan Nama Vendor" value="Vendor 1" readonly>
          </div>

          <div class="mb-3">
            <label for="vendorType" class="form-label">Tipe Vendor</label>
            <select class="form-select" id="vendorType" readonly>
              <option value="expedisi" selected>Expedisi</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="vendorAddress" class="form-label">Alamat Vendor</label>
            <textarea class="form-control" id="vendorAddress" rows="3" placeholder="Masukkan Alamat Vendor" readonly>Alamat Vendor 1</textarea>
          </div>

          <div class="mb-3">
            <label for="vendorStatus" class="form-label">Status</label>
            <select class="form-select" id="vendorStatus" readonly>
              <option value="active" selected>Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="editModal" tabindex="2" aria-labelledby="editModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Vendor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="vendorName" class="form-label">Nama Vendor</label>
            <input type="text" class="form-control" id="vendorName" placeholder="Masukkan Nama Vendor" value="Vendor 1">
          </div>

          <div class="mb-3">
            <label for="vendorType" class="form-label">Tipe Vendor</label>
            <select class="form-select" id="vendorType">
              <option value="expedisi" selected>Expedisi</option>
              <option value="bengkel">Bengkel</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="vendorAddress" class="form-label">Alamat Vendor</label>
            <textarea class="form-control" id="vendorAddress" rows="3" placeholder="Masukkan Alamat Vendor">Alamat Vendor 1</textarea>
          </div>

          <div class="mb-3">
            <label for="vendorStatus" class="form-label">Status</label>
            <select class="form-select" id="vendorStatus">
              <option value="active" selected>Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </form>
      </div>
      <!-- Modal Footer with Cancel and Approve Button -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>


<!-- Delete Vendor Confirmation Modal -->
<div class="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="cancelModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Delete Icon -->
        <i class="ri-delete-bin-5-line" style="font-size: 3rem; color: red;"></i>
        <!-- Confirmation Message -->
        <p style="color: red; font-size: 1.25rem; margin-top: 10px;">Apakah Anda yakin akan menghapus vendor ini?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <!-- Cancel Button -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <!-- Delete Button -->
        <button type="button" class="btn btn-danger" id="confirmDelete" style="background-color: red; border-color: red;">
          Ya, Hapus Vendor
        </button>
      </div>
    </div>
  </div>
</div>


`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/vendor.json',
    columns: [
      { data: '' },
      { data: 'vendor_name' },
      { data: 'vendor_type' },
      { data: 'vendor_address' },
      { data: 'vendor_status' },
      { data: 'action' }
    ],
    columnDefs: [
      {
        targets: 0,
        render: function () {
          return '';
        }
      },
      {
        targets: 1,
        orderable: true,
        render: function (data, type, full) {
          return '<span>' + full['vendor_name'] + '</span>';
        }
      },
      {
        targets: 2,
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
        targets: 3,
        orderable: true,
        render: function (data, type, full) {
          return '<span>' + full['vendor_address'] + '</span>';
        }
      },
      {
        targets: 4,
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
