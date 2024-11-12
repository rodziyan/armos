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
              <select class="form-select" id="planNo">
                <option value="" disabled selected>Pilih Plat No</option>
                <option value="B 1234 XYZ">B 1234 XYZ</option>
                <option value="D 5678 ABC">D 5678 ABC</option>
                <option value="L 9101 DEF">L 9101 DEF</option>
                <option value="F 2345 GHI">F 2345 GHI</option>
              </select>
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
              <label for="assignVendor" class="form-label">Assign Vendor</label>
              <select class="form-select" id="assignVendor">
                <option value="" disabled selected>Pilih Vendor</option>
                <option value="vendorA">Vendor A</option>
                <option value="vendorB">Vendor B</option>
              </select>
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
        <h5 class="modal-title" id="editModalLabel">Detail Rute</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Table to display driver data -->
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Route</th>
              <th scope="col">Date</th>
              <th scope="col">Vehicle</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Row 1 -->
            <tr>
              <td>Route A</td>
              <td>2024-09-13</td>
              <td>Engkel</td>
              <td>Rp.250.000.000</td>
            </tr>
            <!-- Example Row 2 -->
            <tr>
              <td>Route C</td>
              <td>2024-09-14</td>
              <td>Engkel Long</td>
              <td>Rp.250.000.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success justify-end" style="background-color: #28a745; border-color: #28a745;">
          Ya, Approval
        </button>
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
              <select class="form-select" id="planNo">
                <option value="" disabled selected>Pilih Plat No</option>
                <option value="JKL012" selected>JKL012</option>
                <option value="B 1234 XYZ">B 1234 XYZ</option>
                <option value="D 5678 ABC">D 5678 ABC</option>
                <option value="L 9101 DEF">L 9101 DEF</option>
              </select>
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


<div class="modal fade" id="otherModal" tabindex="-1" aria-labelledby="otherModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Delete Icon -->
        <i class="ri-delete-bin-5-line" style="font-size: 3rem; color: red;"></i>
        <!-- Confirmation Message -->
        <p style="color: red; font-size: 1.25rem; margin-top: 10px;">Apakah Anda yakin ingin melakukan Cancel pada item ini?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <!-- Cancel Button -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <!-- Custom Action Button (tombol lain untuk status 2) -->
        <button type="button" class="btn btn-danger" id="confirmOtherAction" style="background-color: red; border-color: red;">
          Ya, Lakukan Cancel
        </button>
      </div>
    </div>
  </div>
</div>
`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/payout.json',
    columns: [
      { data: 'driver' },
      { data: 'jumlah_rute' },
      { data: 'value_order' },
      { data: 'ratio_complete_order' },
      { data: 'pendapatan' },
      { data: 'extra_rate' },
      { data: 'status' },
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
        render: function (data, type, full) {
          var statusObj = {
            1: { title: 'Paid', class: 'bg-label-success' },
            2: { title: 'Unpaid', class: 'bg-label-secondary' }
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
        targets: -1,
        title: 'Actions',
        orderable: false,
        render: function (data, type, full) {
          return `
            <div class="button-group">
              <button class="btn btn-sm btn-icon rounded-pill waves-effect approval"
                      style="border: 2px solid blue; background-color: blue; color: white; padding: 0; display: flex; align-items: center;">
                <span style="display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
                  <i class="ri-eye-line ms-3" style="font-size: 20px;"></i>
                </span>
              </button>
      
              <!-- <button class="btn btn-sm btn-icon rounded-pill waves-effect editModal"
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
              </button> -->
            </div>
          `;
        }
      }
    ],
    // Remove the default search box
    // dom: '<"d-flex justify-content-end align-items-end mt-4 mb-4 me-4"B>t',
    searching: false
    // // Add custom buttons
    // buttons: [
    //   {
    //     text: 'Buat Baru',
    //     className: 'btn btn-primary',
    //     action: function (e, dt, node, config) {
    //       // Memanggil modal dengan id 'myModal'
    //       $('#myModal').modal('show');
    //     }
    //   }
    // ]
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
  // Show Other Modal for Status 2
  $('.datatables-users tbody').on('click', '.otherModal', function () {
    console.log('Tombol dengan kelas .otherModal diklik');
    $('#otherModal').modal('show');
  });
});
