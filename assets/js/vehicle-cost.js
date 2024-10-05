// Declare dt_User variable
let dt_User;

$('body').append(`
<!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Cost Request</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="mb-3">
            <label for="driverName" class="form-label">Nama Supir</label>
            <input type="text" class="form-control" id="driverName" placeholder="Masukkan Nama Supir">
          </div>
          <div class="mb-3">
            <label for="vehiclePlate" class="form-label">Plat Nomor Kendaraan</label>
            <input type="text" class="form-control" id="vehiclePlate" placeholder="Masukkan Plat Nomor">
          </div>
          <div class="mb-3">
            <label for="costRequestType" class="form-label">Cost Request Type</label>
            <select class="form-select" id="costRequestType">
              <option value="" disabled selected>Pilih Tipe Cost Request</option>
              <option value="bbm">BBM</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="kmPerLiter" class="form-label">KM/L</label>
            <input type="text" class="form-control" id="kmPerLiter" placeholder="Masukkan KM/L">
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
  <div class="modal-dialog modal-dialog-centered modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Cost</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row">
            <!-- Left Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <label for="driverName" class="form-label">Nama Supir</label>
                <input type="text" class="form-control" id="driverName" placeholder="Masukkan Nama Supir" value="Supir A" disabled>
              </div>
              <div class="mb-3">
                <label for="vehiclePlate" class="form-label">Plat Nomor Kendaraan</label>
                <input type="text" class="form-control" id="vehiclePlate" placeholder="Masukkan Plat Nomor" value="ABC123" disabled>
              </div>

              <div class="mb-3" id="BBM" style="display: none;">
                <label for="costRequestType" class="form-label">Cost Request Type</label>
                <select class="form-select" id="costRequestType" disabled>
                  <option value="bbm" selected>BBM</option>
                </select>
              </div>

              <div class="mb-3" id="MaintenanceView" style="display: none;">
                <label for="costRequestType" class="form-label">Cost Request Type</label>
                <select class="form-select" id="MaintenaceInput" disabled>
                  <option value="Maintenance" selected>Maintenance</option>
                </select>
              </div>

              <div class="mb-3" id="KML" style="display: none;">
                <label for="kmPerLiter" class="form-label">KM/L</label>
                <input type="text" class="form-control" id="kmPerLiter" placeholder="Masukkan KM/L" value="15 KM/L" disabled>
              </div>

              <div class="mb-3" id="Vendor" style="display: none;">
                <label for="vendor" class="form-label">Vendor</label>
                <input type="text" class="form-control" id="vendorInput" placeholder="Vendor" value="Vendor A" disabled>
              </div>

            </div>

           <div class="col-md-6" id="biayaBBM" style="display: none;">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/BBM.png" alt="Biaya BBM" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
            <div class="col-md-6" id="maintenance" style="display: none;">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/maintenance.png" alt="Biaya Maintenance" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="editModal" tabindex="2" aria-labelledby="editModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Cost</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row">
            <!-- Left Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <label for="driverName" class="form-label">Nama Supir</label>
                <input type="text" class="form-control" id="driverName" placeholder="Masukkan Nama Supir" value="Supir A">
              </div>
              <div class="mb-3">
                <label for="vehiclePlate" class="form-label">Plat Nomor Kendaraan</label>
                <input type="text" class="form-control" id="vehiclePlate" placeholder="Masukkan Plat Nomor" value="ABC123">
              </div>
              <div class="mb-3" id="BBMSection" style="display: none;">
                <label for="costRequestTypeBBM" class="form-label">Cost Request Type</label>
                <select class="form-select" id="costRequestTypeBBM">
                  <option value="bbm" selected>BBM</option>
                </select>
              </div>

              <div class="mb-3" id="KMLSection" style="display: none;">
                <label for="kmPerLiterBBM" class="form-label">KM/L</label>
                <input type="text" class="form-control" id="kmPerLiterBBM" placeholder="Masukkan KM/L" value="15 KM/L">
              </div>

              <div class="mb-3" id="MaintenanceViewSection" style="display: none;">
                <label for="costRequestTypeMaintenance" class="form-label">Cost Request Type</label>
                <select class="form-select" id="costRequestTypeMaintenance">
                  <option value="maintenance" selected>Maintenance</option>
                </select>
              </div>

              <div class="mb-3" id="VendorSection" style="display: none;">
                <label for="maintenanceVendor" class="form-label">Vendor</label>
                <input type="text" class="form-control" id="maintenanceVendor" placeholder="Masukkan Vendor" value="Vendor A">
              </div>
            </div>

            <div class="col-md-6" id="biayaBBMSection" style="display: none;">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/BBM.png" alt="Biaya BBM" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
            <div class="col-md-6" id="maintenanceSection" style="display: none;">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/maintenance.png" alt="Biaya Maintenance" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
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


<!-- Delete Confirmation Modal -->
<div class="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="cancelModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Delete Icon -->
        <i class="ri-delete-bin-5-line" style="font-size: 3rem; color: red;"></i>
        <!-- Confirmation Message -->
        <p style="color: red; font-size: 1.25rem; margin-top: 10px;">Apakah Anda yakin akan membatalkan biaya kendaraan ini?</p>
      </div>
      <div class="modal-footer justify-content-center">
        <!-- Cancel Button -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <!-- Delete Button -->
        <button type="button" class="btn btn-danger" id="confirmDelete" style="background-color: red; border-color: red;">
          Ya, Batalkan
        </button>
      </div>
    </div>
  </div>
</div>

`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/vehicle-cost.json',
    columns: [
      { data: 'cost_order_id' },
      { data: 'plat_no_kendaraan' },
      { data: 'nama_supir' },
      { data: 'cost_request_type' },
      { data: 'status' },
      { data: 'req_date' },
      { data: 'total_cost' },
      { data: 'action_date' },
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
          var statusObj = {
            1: { title: 'Requested', class: 'bg-label-danger' },
            2: { title: 'Completed', class: 'bg-label-success' },
            3: { title: 'Approved', class: 'bg-label-primary' }
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
                        <i class="ri-close-circle-line ms-3" style="font-size: 20px;"></i>
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

  // Fungsi untuk menyembunyikan elemen-elemen tertentu
  function hideElements() {
    const elementsToHide = [
      'BBM',
      'MaintenanceView',
      'KML',
      'Vendor',
      'biayaBBM',
      'maintenance',
      'BBMSection',
      'KMLSection',
      'MaintenanceViewSection',
      'VendorSection',
      'biayaBBMSection',
      'maintenanceSection'
    ];

    elementsToHide.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = 'none';
      } else {
        console.error("Element with ID '" + id + "' not found!");
      }
    });
  }

  // Fungsi untuk menangani klik pada baris tabel
  $('.datatables-users tbody').on('click', 'tr', function () {
    var rowData = dt_User.row(this).data();
    var status = rowData.status;
    var costRequestType = rowData.cost_request_type;

    // Sembunyikan elemen-elemen terlebih dahulu
    hideElements();

    // Menampilkan elemen-elemen berdasarkan kondisi
    if (status === 2 && costRequestType === 'BBM') {
      document.getElementById('BBM').style.display = 'block';
      document.getElementById('KML').style.display = 'block';
      document.getElementById('biayaBBM').style.display = 'block';
      document.getElementById('BBMSection').style.display = 'block';
      document.getElementById('KMLSection').style.display = 'block';
      document.getElementById('biayaBBMSection').style.display = 'block';
    } else if (status === 2 && costRequestType === 'Maintenance') {
      document.getElementById('MaintenanceView').style.display = 'block';
      document.getElementById('Vendor').style.display = 'block';
      document.getElementById('maintenance').style.display = 'block';
      document.getElementById('MaintenanceViewSection').style.display = 'block';
      document.getElementById('VendorSection').style.display = 'block';
      document.getElementById('maintenanceSection').style.display = 'block';
    } else if (status === 1 && costRequestType === 'BBM') {
      document.getElementById('BBM').style.display = 'block';
      document.getElementById('KML').style.display = 'block';
      document.getElementById('BBMSection').style.display = 'block';
      document.getElementById('KMLSection').style.display = 'block';
    } else if (status === 3 && costRequestType === 'Maintenance') {
      document.getElementById('MaintenanceView').style.display = 'block';
      document.getElementById('Vendor').style.display = 'block';
      document.getElementById('MaintenanceViewSection').style.display = 'block';
      document.getElementById('VendorSection').style.display = 'block';
    }
  });
});
