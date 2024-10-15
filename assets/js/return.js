// Declare dt_User variable
let dt_User;

$('body').append(`
  <!-- Modal Edit -->
<div class="modal fade" id="myModal" tabindex="2" aria-labelledby="myModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Create Data Retur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row">
            <!-- Nama Toko -->
              <div class="col-md-6 mb-3">
                <label for="storeName" class="form-label">Nama Toko</label>
                <select class="form-control" id="storeName">
                  <option value="" disabled selected>Pilih Nama Toko</option>
                  <option value="toko1">Toko 1</option>
                  <option value="toko2">Toko 2</option>
                  <option value="toko3">Toko 3</option>
                  <option value="toko4">Toko 4</option>
                </select>
              </div>

            <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Retur Document</label>
              <select class="form-control" id="returDocument">
                <option value="" disabled selected>Pilih Dokumen Retur</option>
                <option value="doc1">Dokumen 1</option>
                <option value="doc2">Dokumen 2</option>
                <option value="doc3">Dokumen 3</option>
                <option value="doc4">Dokumen 4</option>
              </select>
            </div>
          </div>

          <div class="row">
            <!-- Retur Document -->
            <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Retur Document Reference</label>
              <input type="text" class="form-control" id="returDocument" placeholder="Masukkan Dokumen Retur Reference">
            </div>
            <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Request Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate">
            </div>
          </div>

          <div class="row">
          <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate" value="" disabled>
            </div>
          </div>

          <!-- Tabel Produk -->
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th style="width: 150px; text-align: center;">Qty</th> 
                <th style="width: 100px; text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody id="productTableBody">
              <tr>
                <td>
                  <select class="form-control">
                    <option value="" disabled selected>Pilih Nama Produk</option>
                    <option value="produk1">Produk 1</option>
                    <option value="produk2">Produk 2</option>
                    <option value="produk3">Produk 3</option>
                    <option value="produk4">Produk 4</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td>
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;">
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td>
                  <select class="form-control">
                    <option value="" disabled selected>Pilih Nama Produk</option>
                    <option value="produk1">Produk 1</option>
                    <option value="produk2">Produk 2</option>
                    <option value="produk3">Produk 3</option>
                    <option value="produk4">Produk 4</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td>
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;"></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td>
                  <select class="form-control">
                    <option value="" disabled selected>Pilih Nama Produk</option>
                    <option value="produk1">Produk 1</option>
                    <option value="produk2">Produk 2</option>
                    <option value="produk3">Produk 3</option>
                    <option value="produk4">Produk 4</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td>
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" ></td> 
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
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Create</button>
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
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Data Retur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
         <div class="row">
            <!-- Nama Toko -->
            <div class="col-md-6 mb-3">
              <label for="storeName" class="form-label">Nama Toko</label>
              <select class="form-control" id="storeName">
                <option value="" disabled selected>Pilih Nama Toko</option>
                <option value="tokoABC" selected>Toko ABC</option>
                <option value="tokoXYZ">Toko XYZ</option>
                <option value="tokoDEF">Toko DEF</option>
                <option value="tokoGHI">Toko GHI</option>
                <!-- Tambahkan opsi toko lainnya sesuai kebutuhan -->
              </select>
            </div>

            <!-- Retur Document -->
            <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Retur Document</label>
              <input type="text" class="form-control" id="returDocument" placeholder="Masukkan Dokumen Retur" value="RT123456">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Retur Document Reference</label>
              <input type="text" class="form-control" id="returDocument" value="DOC123456">
            </div> 
          
            <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Request Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate" value="2024-10-10" readonly>
            </div>
          </div>

          <div class="row">
          <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate" value="2024-10-10" readonly>
            </div>
          </div>
          
          <!-- Tabel Produk -->
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th style="width: 150px; text-align: center;">Qty</th> 
                <th style="width: 100px; text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody id="productTableBody">
              <tr>
                <td>
                  <select class="form-control">
                    <option value="produkA" selected>Produk A</option>
                    <option value="produkB">Produk B</option>
                    <option value="produkC">Produk C</option>
                    <option value="produkD">Produk D</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td>
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="5"></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td>
                  <select class="form-control">
                    <option value="produkA" selected>Produk B</option>
                    <option value="produkB">Produk A</option>
                    <option value="produkC">Produk C</option>
                    <option value="produkD">Produk D</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td> 
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="3"></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td>
                  <select class="form-control">
                    <option value="produkA" selected>Produk C</option>
                    <option value="produkB">Produk B</option>
                    <option value="produkC">Produk A</option>
                    <option value="produkD">Produk D</option>
                    <!-- Tambahkan opsi produk lainnya sesuai kebutuhan -->
                  </select>
                </td> 
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="8"></td> 
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
        <button type="button" class="btn btn-success" id="saveChanges" style="background-color: #004d00; border-color: #004d00;">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="viewModal" tabindex="2" aria-labelledby="viewModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewModalLabel">View Data Retur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
         <div class="row">
            <!-- Nama Toko -->
            <div class="col-md-6 mb-3">
              <label for="storeName" class="form-label">Nama Toko</label>
              <input type="text" class="form-control" id="storeName" placeholder="Masukkan Nama Toko" value="Toko ABC" readonly>
            </div>

            <!-- Retur Document -->
            <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Request Retur Document</label>
              <input type="text" class="form-control" id="returDocument" placeholder="Masukkan Dokumen Retur" value="RT123456" readonly>
            </div>
          </div>

          <div class="row">
          <div class="col-md-6 mb-3">
              <label for="returDocument" class="form-label">Retur Document Reference</label>
              <input type="text" class="form-control" id="returDocument" value="DOC123456" readonly>
            </div>     

             <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Request Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate" value="2024-10-10" readonly>
            </div>
          </div>

          <div class="row">
          <!-- Pick Up Date -->
            <div class="col-md-6 mb-3">
              <label for="pickUpDate" class="form-label">Pick Up Date</label>
              <input type="date" class="form-control" id="pickUpDate" value="2024-10-10" readonly>
            </div>
          </div>
          <!-- Tabel Produk -->
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th style="width: 150px; text-align: center;">Qty</th> 
                <th style="width: 100px; text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody id="productTableBody">
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk" value="Produk A" readonly></td> 
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="5" readonly></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk" value="Produk B" readonly></td> 
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="3" readonly></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" placeholder="Nama Produk" value="Produk C" readonly></td> 
                <td><input type="number" class="form-control" placeholder="Qty" style="width: 100px;" value="8" readonly></td> 
                <td><button type="button" class="btn btn-danger ri-delete-bin-6-line" aria-label="Delete"></button></td>
              </tr>
            </tbody>
          </table>
          
          <!-- Button Tambah Data Product -->
          <button type="button" class="btn btn-success w-100" id="addProduct" style="background-color: #004d00; border-color: #004d00;">Tambah Data Product</button>
        </form>
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

const style = document.createElement('style');
style.innerHTML = `
  .bg-label-blue {
    background-color: #0000FF; /* Warna Biru */
    color: white; /* Warna teks putih agar kontras dengan latar belakang biru */
    padding: 5px 10px;
    border-radius: 4px;
  }
    `;

// Menambahkan elemen style ke head
document.head.appendChild(style);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/return.json',
    columns: [
      { data: 'nama_toko' },
      { data: 'retur_document' },
      { data: 'retur_document_ref' },
      { data: 'request_pick_up_date' },
      { data: 'pick_up_date' },
      { data: 'product_name' },
      { data: 'qty' },
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
        render: function (data) {
          return '<span>' + data + '</span>';
        }
      },
      {
        targets: 7,
        render: function (data, type, full) {
          // Define the updated statusObj for mapping delivery_status values
          var statusObj = {
            1: { title: 'Return Completed', class: 'bg-success' },
            2: { title: 'Return Success', class: 'bg-primary' },
            3: { title: 'Planned', class: 'bg-warning' },
            4: { title: 'New', class: 'bg-info' }
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
                  <li><a class="dropdown-item viewModal" href="#">View</a></li>
                  <li><a class="dropdown-item editModal" href="#">Edit</a></li>
                  <li><a class="dropdown-item cancelModal" href="#">Cancel</a></li>
                </ul>
              </div>
            `;
        }
      }
    ],
    order: [[8, 'asc']],
    // Remove the default search box
    dom: '<"d-flex justify-content-end align-items-end mt-2 mb-2 me-4"B>t',
    // Add custom buttons
    buttons: [
      {
        text: '+ Add New',
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
  $('.datatables-users tbody').on('click', '.viewModal', function () {
    $('#viewModal').modal('show');
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
