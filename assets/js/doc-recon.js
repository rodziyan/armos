// Declare dt_User variable
let dt_User;

$('body').append(`
  <!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Create Document Reconciliation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
        <div class="mb-3">
            <label for="documentRef" class="form-label">Document ID</label>
            <input type="text" class="form-control" id="documentId" placeholder="Masukkan Document ID">
          </div>
          <div class="mb-3">
            <label for="documentRef" class="form-label">Document Ref</label>
            <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref">
          </div>
          <div class="mb-3">
            <label for="changeType" class="form-label">Tipe Dokumen</label>
            <select class="form-select" id="changeType">
              <option value="" disabled selected>Pilih Jenis Perubahan</option>
              <option value="revisi_faktur">Revisi Faktur</option>
              <option value="koreksi_jual">Koreksi Jual</option>
              <option value="barang_hilang">Barang Hilang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
            <input type="file" class="form-control" id="supportingDocument">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi"></textarea>
          </div>
          
      <!-- Modal Footer with Cancel and Save Buttons -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="viewModalLabel">View Document Reconciliation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="viewForm">
        <div class="mb-3">
            <label for="documentRef" class="form-label">Document ID</label>
            <input type="text" class="form-control" id="documentId" placeholder="Masukkan Document ID">
          </div>
          <div class="mb-3">
            <label for="documentRef" class="form-label">Document Ref</label>
            <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref">
          </div>
          <div class="mb-3">
            <label for="changeType" class="form-label">Tipe Dokumen</label>
            <select class="form-select" id="changeType">
              <option value="" disabled selected>Pilih Jenis Perubahan</option>
              <option value="revisi_faktur">Revisi Faktur</option>
              <option value="koreksi_jual">Koreksi Jual</option>
              <option value="barang_hilang">Barang Hilang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
            <input type="file" class="form-control" id="supportingDocument">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi"></textarea>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateModalLabel">Edit Document Reconciliation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Form Edit -->
          <form id="editForm">
        <div class="mb-3">
            <label for="documentRef" class="form-label">Document ID</label>
            <input type="text" class="form-control" id="documentId" placeholder="Masukkan Document ID">
          </div>
          <div class="mb-3">
            <label for="documentRef" class="form-label">Document Ref</label>
            <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref">
          </div>
          <div class="mb-3">
            <label for="changeType" class="form-label">Tipe Dokumen</label>
            <select class="form-select" id="changeType">
              <option value="" disabled selected>Pilih Jenis Perubahan</option>
              <option value="revisi_faktur">Revisi Faktur</option>
              <option value="koreksi_jual">Koreksi Jual</option>
              <option value="barang_hilang">Barang Hilang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
            <input type="file" class="form-control" id="supportingDocument">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi"></textarea>
          </div>
            <!-- Additional fields for editing... -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success" id="updateChanges">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/doc-recon.json',
    columns: [
      { data: 'status' },
      { data: 'tipe' },
      { data: 'document_id' },
      { data: 'document_ref' },
      { data: 'req_date' },
      { data: 'completed_date' },
      { data: 'action' }
    ],
    columnDefs: [
      {
        targets: 0,
        render: function (data, type, full) {
          // Define the updated statusObj for mapping delivery_status values
          var statusObj = {
            1: { title: 'New', class: 'bg-label-primary' }
          };
          return (
            '<span class="badge rounded-pill ' +
            statusObj[full['status']].class +
            '">' +
            statusObj[full['status']].title +
            '</span>'
          );
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
        targets: -1,
        title: 'Actions',
        orderable: false,
        render: function (data, type, full) {
          console.log('Rendering data:', data, type, full);
          return `
             <div class="button-group">
              <button class="btn btn-sm btn-icon rounded-pill waves-effect viewModal" 
                      type="button" 
                      style="border: 2px solid green; background-color: green; padding: 0; color: white;">
                <i class="ri-eye-fill" style="font-size: 20px;"></i>
              </button>
              
              <button class="btn btn-sm btn-icon rounded-pill waves-effect updateModal" 
                      type="button"
                      style="border: 2px solid orange; background-color: orange; padding: 0; color: white;">
                <i class="ri-pencil-fill" style="font-size: 20px;"></i>
              </button>
              
              <button class="btn btn-sm btn-icon rounded-pill waves-effect deleteBtn" 
                      type="button" 
                      style="border: 2px solid red; background-color: red; padding: 0; color: white;">
                <i class="ri-delete-bin-fill" style="font-size: 20px;"></i>
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
        text: 'Created New',
        className: 'btn btn-primary',
        action: function (e, dt, node, config) {
          // Memanggil modal dengan id 'myModal'
          $('#myModal').modal('show');
        }
      }
    ]
  });

  // Show the modal
  $('.datatables-users tbody').on('click', '.updateModal', function () {
    $('#updateModal').modal('show');
  });
  // Show the modal
  $('.datatables-users tbody').on('click', '.viewModal', function () {
    $('#viewModal').modal('show');
  });
});
