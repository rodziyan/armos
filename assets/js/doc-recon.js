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
            <label for="documentId" class="form-label">Document ID</label>
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
              <option value="tukar_faktur" selected>Tukar Faktur</option>
              <option value="revisi_faktur">Revisi Faktur</option>
              <option value="koreksi_jual">Koreksi Jual</option>
              <option value="barang_hilang">Barang Hilang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
          <div class="mb-3 d-flex align-items-center">
            <input type="file" class="form-control me-2" id="supportingDocument">
            <button class="btn btn-primary" id="downloadButton">
                <i class="ri-download-line"></i> 
            </button>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi"></textarea>
          </div>
        </form>
      </div>
      <!-- Modal Footer with Cancel and Save Buttons -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="approval" tabindex="2" aria-labelledby="approval" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">View Document Reconciliation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form View -->
        <form id="viewForm">
          <div class="mb-3">
            <label for="documentId" class="form-label">Document ID</label>
            <input type="text" class="form-control" id="documentId" placeholder="Masukkan Document ID" value="Faktur ID -001" disabled>
          </div>
          <div class="mb-3">
            <label for="documentRef" class="form-label">Document Ref</label>
            <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref" value="" readonly>
          </div>
          <div class="mb-3">
            <label for="changeType" class="form-label">Tipe Dokumen</label>
            <select class="form-select" id="changeType" disabled>
              <option value="Revisi Faktur" selected>Revisi Faktur</option>
              <option value="Morning">Morning</option>
              <option value="maintenance">Maintenance</option>
              <option value="perpanjang_dokumen">Perpanjang Dokument</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
            <input type="file" class="form-control" id="supportingDocument" readonly>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi" readonly></textarea>
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
        <h5 class="modal-title" id="editModalLabel">Edit Document Reconciliation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="documentId" class="form-label">Document ID</label>
            <input type="text" class="form-control" id="documentId" placeholder="Masukkan Document ID" value="Faktur ID -001" disabled>
          </div>
          <div class="mb-3">
            <label for="documentRef" class="form-label">Document Ref</label>
            <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref" value="">
          </div>
          <div class="mb-3">
            <label for="changeType" class="form-label">Tipe Dokumen</label>
            <select class="form-select" id="changeType">
              <option value="" disabled>Pilih Jenis Perubahan</option>
              <option value="tukar_faktur" selected>Tukar Faktur</option>
              <option value="revisi_faktur" selected>Revisi Faktur</option>
              <option value="koreksi_jual">Koreksi Jual</option>
              <option value="barang_hilang">Barang Hilang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <label for="supportingDocument" class="form-label">Upload / Download Dokumen Pendukung</label>
          <div class="mb-3 d-flex align-items-center">
            <input type="file" class="form-control me-2" id="supportingDocument">
            <button class="btn btn-primary" id="downloadButton">
                <i class="ri-download-line"></i> 
            </button>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi">Description of the document.</textarea>
          </div>
        </form>
      </div>
      <!-- Modal Footer with Cancel and Update Buttons -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="updateChanges">Update</button>
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
            1: { title: 'New', class: 'bg-label-primary' },
            2: { title: 'Completed', class: 'bg-label-success' }
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
                <button class="btn btn-sm btn-icon rounded-pill waves-effect approval" 
                        style="border: 2px solid green; background-color: green; color: white; padding: 0; display: flex; align-items: center;" justify-content: center; height: 40px;">
                    <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                        <i class="ri-eye-line ms-3" style="font-size: 20px;"></i>
                    </span>
                </button>
                
                <button class="btn btn-sm btn-icon rounded-pill waves-effect editModal" 
                        style="border: 2px solid orange; background-color: orange; color: white; padding: 0; display: flex; align-items: center;" justify-content: center; height: 40px;">
                    <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                        <i class="ri-pencil-line ms-3" style="font-size: 20px;"></i>
                    </span>
                </button>
                
                <button class="btn btn-sm btn-icon rounded-pill waves-effect cancelModal" 
                        style="border: 2px solid red; background-color: red; color: white; padding: 0; display: flex; align-items: center;" justify-content: center; height: 40px;">
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
