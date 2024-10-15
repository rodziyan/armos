// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Create and append the modal HTML
  $('body').append(`
    <div class="modal fade" id="view" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 80%; width: auto; max-height: 90vh;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Table Section -->
                <table class="table table-bordered">
                  <thead>
                      <tr class="table-success">
                          <th>Delivery Type</th>
                          <th>Document ID</th>
                          <th>Faktur/Retur Qty</th>
                          <th>WMS Qty</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Delivery</td>
                          <td>F001</td>
                          <td>20</td>
                          <td>18</td>
                          <td><button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button></td>
                      </tr>
                      <tr>
                          <td>Delivery</td>
                          <td>F002</td>
                          <td>30</td>
                          <td>28</td>
                          <td><button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button></td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
    </div>
</div>


<!-- Modal Kedua -->
<div class="modal fade" id="liat" tabindex="-1" aria-labelledby="liatModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 80%; width: auto; max-height: 90vh;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Table Section -->
                <table class="table table-bordered">
                  <thead>
                      <tr class="table-success">
                          <th>Delivery Type</th>
                          <th>Document ID</th>
                          <th>Faktur/Retur Qty</th>
                          <th>WMS Qty</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Delivery</td>
                          <td>F001</td>
                          <td>20</td>
                          <td>18</td>
                          <td><button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button></td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modalView" tabindex="-1" aria-labelledby="modalViewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="actionSelect" class="form-label">Document Reconciliation</label>
                <select class="form-select" id="actionSelect">
                    <option value="" disabled selected>Pilih salah satu...</option>
                    <option value="revisiFaktur">Revisi Faktur</option>
                    <option value="koreksiJual">Koreksi Jual</option>
                    <option value="barangHilang">Barang Hilang</option>
                    <option value="tukarFaktur">Tukar Faktur</option>
                    <option value="lainnya">Lainnya</option>
                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>

//     <div class="modal fade" id="view" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="viewModalLabel">Route-001</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//                 <!-- First Section -->
//                 <div class="d-flex justify-content-between mb-3">
//                     <div>
//                         <p>Sequence : <strong>1</strong></p>
//                         <p>DO Number : <strong>DO001-1</strong></p>
//                         <p>Delivery Type : <strong>Delivery</strong></p>
//                     </div>
//                     <div>
//                         <p>Location : <strong>Toko A</strong></p>
//                         <p>Faktur ID : <strong>F001</strong></p>
//                         <p>Total Value : <strong>Rp80.000</strong></p>
//                     </div>
//                 </div>
//                 <!-- Table Section -->
//                 <table class="table table-bordered">
//                     <thead>
//                         <tr class="table-success">
//                             <th>Produk</th>
//                             <th>Qty</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Produk 1</td>
//                             <td>20</td>
//                         </tr>
//                         <tr>
//                             <td>Produk 2</td>
//                             <td>20</td>
//                         </tr>
//                         <tr>
//                             <td>Produk 3</td>
//                             <td>40</td>
//                         </tr>
//                         <tr class="table-success">
//                             <td><strong>TOTAL</strong></td>
//                             <td><strong>80</strong></td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <!-- Second Section -->
//                 <div class="d-flex justify-content-between mb-3">
//                     <div>
//                         <p>Sequence : <strong>2</strong></p>
//                         <p>DO Number : <strong>DO001-2</strong></p>
//                         <p>Delivery Type : <strong>Delivery</strong></p>
//                     </div>
//                     <div>
//                         <p>Location : <strong>Toko B</strong></p>
//                         <p>Faktur ID : <strong>F002</strong></p>
//                         <p>Total Value : <strong>Rp100.000</strong></p>
//                     </div>
//                 </div>
//                 <!-- Second Table Section -->
//                 <table class="table table-bordered">
//                     <thead>
//                         <tr class="table-success">
//                             <th>Produk</th>
//                             <th>Qty</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Produk 1</td>
//                             <td>50</td>
//                         </tr>
//                         <tr>
//                             <td>Produk 2</td>
//                             <td>50</td>
//                         </tr>
//                         <tr class="table-success">
//                             <td><strong>TOTAL</strong></td>
//                             <td><strong>100</strong></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>

  
<!-- Modal Edit Faktur -->
  <div class="modal fade" id="editFaktur" tabindex="2" aria-labelledby="editRouteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="viewModalLabel">Route-001</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- First Section -->
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <p>Sequence: <strong>1</strong></p>
                        <p>DO Number: <strong>DO001-1</strong></p>
                        <p>Delivery Type: <strong>Delivery</strong></p>
                    </div>
                    <div>
                        <p>Location: <strong>Toko A</strong></p>
                        <p>Faktur ID: <input type="text" value="F001" class="form-control" style="display: inline-block; width: 150px; height: 30px;" /></p>
                        <p>Total Value: <strong>Rp80.000</strong></p>
                    </div>
                </div>
                <!-- Table Section -->
                <table class="table table-bordered">
                    <thead>
                        <tr class="table-success">
                            <th>Produk</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produk 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Produk 2</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Produk 3</td>
                            <td>40</td>
                        </tr>
                        <tr class="table-success">
                            <td><strong>TOTAL</strong></td>
                            <td><strong>80</strong></td>
                        </tr>
                    </tbody>
                </table>
                <!-- Second Section -->
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <p>Sequence: <strong>2</strong></p>
                        <p>DO Number: <strong>DO001-2</strong></p>
                        <p>Delivery Type: <strong>Delivery</strong></p>
                    </div>
                    <div>
                        <p>Location: <strong>Toko B</strong></p>
                        <p>Faktur ID: <input type="text" value="F002" class="form-control" style="display: inline-block; width: 150px; height: 30px;" /></p>
                        <p>Total Value: <strong>Rp100.000</strong></p>
                    </div>
                </div>
                <!-- Second Table Section -->
                <table class="table table-bordered">
                    <thead>
                        <tr class="table-success">
                            <th>Produk</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produk 1</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Produk 2</td>
                            <td>50</td>
                        </tr>
                        <tr class="table-success">
                            <td><strong>TOTAL</strong></td>
                            <td><strong>100</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success">Save Changes</button>
            </div>
        </div>
    </div>
  </div>

<!-- Modal Change Vehicle -->
<div class="modal fade" id="changeKendaraan" tabindex="3" aria-labelledby="changeVehicleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="changeVehicleModalLabel">Route-001</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          
        <!-- Current Vehicle Details -->
        <div class="mb-2">
          <label for="current-driver" class="col-form-label">Driver:</label>
          <span id="current-driver">Andi</span>
        </div>

        <div class="mb-2">
          <label for="current-vehicle" class="col-form-label">Kendaraan:</label>
          <span id="current-vehicle">Double XT</span>
        </div>

        <div class="mb-2">
          <label for="current-plate" class="col-form-label">Plat Nomor:</label>
          <span id="current-plate">F 1234 ABC</span>
        </div>

        <div class="mb-2">
          <label for="current-kernet" class="col-form-label">Kernet:</label>
          <span id="current-kernet">Sari</span>
        </div>

          
          <!-- New Selections -->
          <div class="mb-3">
            <label for="change-vehicle" class="form-label">Pilih Kendaraan</label>
            <select class="form-select" id="change-vehicle" name="change-vehicle">
              <option value="" disabled selected>Pilih Kendaraan</option>
              <option value="heavy_duty_xz_5678_def">Heavy Duty XZ 5678 DEF</option>
              <option value="light_truck_a_9012_ghi">Light Truck A 9012 GHI</option>
              <option value="double_xt">Double XT</option>
              <option value="pickup_truck_3456_jkl">Pickup Truck 3456 JKL</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="change-driver" class="form-label">Pilih Driver</label>
            <select class="form-select" id="change-driver" name="change-driver">
              <option value="" disabled selected>Pilih Driver</option>
              <option value="budi">Budi</option>
              <option value="cindy">Cindy</option>
              <option value="andi">Andi</option>
              <option value="joko">Joko</option>
            </select>
          </div>
          

          <div class="mb-3">
            <label for="change-kernet" class="form-label">Pilih Kernet</label>
            <select class="form-select" id="change-kernet" name="change-kernet">
              <option value="" disabled selected>Pilih Kernet</option>
              <option value="rio">Rio</option>
              <option value="sari">Sari</option>
              <option value="dina">Dina</option>
              <option value="novi">Novi</option>
            </select>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" style="background-color: #004d00; color: white; border: none; padding: 10px 20px;">Save Changes</button>
      </div>
    </div>
  </div>
</div>


// <!-- Modal Change Driver & Kernet -->
// <div class="modal fade" id="changeDriver" tabindex="3" aria-labelledby="changeDriverModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-lg">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="changeDriverModalLabel">Route-001</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <form id="change-vehicle-form">
//           <div class="mb-2">
//           <label for="current-driver-kernet" class="col-md-4 col-form-label">Driver & Kernet: Andi & Ibnu</label>
//         </div>
//         <div class="mb-2">
//           <label for="current-vehicle" class="col-md-4 col-form-label">Kendaraan: Double XT F 1234 ABC</label>
//         </div>
//           <div class="mb-3">
//             <label for="driver-select" class="form-label">Select Driver</label>
//             <select class="form-select" id="driver-select" name="driver-select">
//               <option value="" disabled selected>Select a Driver</option>
//               <option value="andi">Andi</option>
//               <option value="budi">Budi</option>
//               <option value="cindy">Cindy</option>
//             </select>
//           </div>
//           <div class="mb-3">
//             <label for="kernet-select" class="form-label">Select Kernet</label>
//             <select class="form-select" id="kernet-select" name="kernet-select">
//               <option value="" disabled selected>Select a Kernet</option>
//               <option value="kernet1">Kernet 1</option>
//               <option value="kernet2">Kernet 2</option>
//               <option value="kernet3">Kernet 3</option>
//             </select>
//           </div>
//         </form>
//       </div>
//       <div class="modal-footer">
//         <button type="submit" form="change-vehicle-form" style="background-color: #004d00; color: white; border: none; padding: 10px 20px;">Save Changes</button>
//       </div>
//     </div>
//   </div>
// </div>

<!-- Modal Route -->
<div class="modal fade" id="mapsModal" tabindex="-1" aria-labelledby="mapsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" style="max-width: 35%; width: auto; max-height: 150vh;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mapsModalLabel">Route - 001</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <!-- Gambar Peta -->
        <img src="assets/img/petaG.png" alt="Peta Route" class="img-fluid">
      </div>
    </div>
  </div>
</div>


<!-- Modal Cancel Route -->
<div class="modal fade" id="cancelRoute" tabindex="4" aria-labelledby="cancelRouteModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Warning Icon -->
        <div class="text-danger mb-3">
          <i class="bi bi-exclamation-circle" style="font-size: 3rem;"></i>
        </div>
        <!-- Warning Message -->
        <h5 class="text-danger">Apakah Anda yakin untuk Membatalkan rute ini?</h5>
        <p>Data yang Anda hapus akan kembali ke menu Outstanding Order.</p>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-danger" id="confirmDeleteRoute">Ya, Batalkan Rute</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Cancel Order -->
<div class="modal fade" id="cancelOrder" tabindex="4" aria-labelledby="cancelOrderModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Warning Icon -->
        <div class="text-danger mb-3">
          <i class="bi bi-exclamation-circle" style="font-size: 3rem;"></i>
        </div>
        <!-- Warning Message -->
        <h5 class="text-danger">Apakah Anda yakin untuk Membatalkan pesanan ini?</h5>
        <p>Data yang Anda hapus akan kembali ke menu Outstanding Order.</p>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-danger" id="confirmCancelOrder">Ya, Batalkan Pesanan</button>
      </div>
    </div>
  </div>
</div>


`);

  // Initialize DataTable
  if ($('.datatables-users').length) {
    dt_User = $('.datatables-users').DataTable({
      ajax: assetsPath + 'json/order-approval.json',
      columns: [
        { data: 'route_id' }, // Route ID
        { data: 'driver_vehicle' }, // Driver - Vehicle
        { data: 'capacity_percent' }, // % Capacity
        { data: 'total_value' }, // Total Value
        { data: 'total_trip_time' }, // Total Trip Time
        { data: 'seq' }, // Seq
        { data: 'location_name' },
        { data: 'do_number' }, // Faktur ID
        { data: 'faktur_qty' }, // Faktur Qty
        { data: 'wms_qty' },
        { data: 'value' }, // Value
        { data: 'start_time' }, // Start Time
        { data: 'end_time' }, // End Time
        { data: 'trip_time' }, // Trip Time
        { data: 'notes' }, // Notes
        { data: 'action' } // Action
      ],
      order: [[5, 'asc']], // Default sorting: based on column 5 in ascending order
      rowCallback: function (row, data, index) {
        var groupSize = 3; // Number of rows to group together for R004

        // If route_id is 'R004', group the next rows with null route_id
        if (data.route_id === 'R004') {
          // First row of the group: Display all relevant columns
          if (index % groupSize === 0) {
            ['td:eq(0)', 'td:eq(1)', 'td:eq(2)', 'td:eq(3)', 'td:eq(4)', 'td:eq(15)'].forEach(function (selector) {
              $(selector, row).attr('rowspan', groupSize).css({
                'vertical-align': 'middle',
                'text-align': 'center'
              });
            });

            // Show all columns for the first row in the group
            $(row).find('td:lt(5)').show();
            $(row).find('td:eq(15)').show();
          } else {
            // Hide columns for subsequent rows within the group
            $(row).find('td:lt(15').hide();
            $(row).find('td:eq(16)').hide();
          }
        } else if (data.route_id === null) {
          // For rows where route_id is null (below R004), we combine them into one column
          $(row).find('td:lt(5)').hide(); // Hide the unnecessary columns
          $(row).find('td:eq(15)').hide(); // Hide the unnecessary column

          // Find the specific row of R004 (previous row) and append these rows as a single value
          var previousRow = $('#example')
            .DataTable()
            .row(index - 1)
            .node();
          var combinedCell = $('td:eq(4)', previousRow); // Select column 5 of R004's row

          // Combine the location names of the following rows with null route_id
          combinedCell.text(function (_, currentText) {
            return currentText + ' / ' + data.location_name;
          });
        } else {
          // For other route_ids (not R004 or null), treat them normally
          ['td:eq(0)', 'td:eq(1)', 'td:eq(2)', 'td:eq(3)', 'td:eq(4)', 'td:eq(15)'].forEach(function (selector) {
            $(selector, row).attr('rowspan', 1).css({
              'vertical-align': 'middle',
              'text-align': 'center'
            });
          });

          // Show all columns for non-'R004' rows
          $(row).find('td:lt(5)').show();
          $(row).find('td:eq(15)').show();
        }

        // Create the DO Number button for column 9 (adjust as needed)
        var doNumberCell = $('td:eq(8)', row); // Assume DO number is in column 9
        var doNumberButton = $('<button/>', {
          class: 'do-number-button',
          text: 'DO ' + data.do_number
        });
        doNumberCell.append(doNumberButton);

        // If DO number is '2', apply special formatting
        if (data.do_number == 2) {
          doNumberButton = $(`
              <button class="do-number-button view" style="background-color: green; color: white; border: none; padding: 5px 10px; border-radius: 5px;" 
                      onclick="view">
                ${data.do_number}
              </button>`);
        } else {
          doNumberButton = $(`
              <button class="do-number-button liat" style="background-color: green; color: white; border: none; padding: 5px 10px; border-radius: 5px;">
                ${data.do_number}
              </button>`);
        }

        doNumberCell.empty().append(doNumberButton);
      },

      columnDefs: [
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
                  <li><a class="dropdown-item changeKendaraan" href="#">Change Vehicle</a></li>
                  <li><a class="dropdown-item " onclick="openRoute(event)" href="#">Batalkan Route</a></li>
                </ul>
              </div>
            `;
          }
        }
      ],
      searching: false, // Disables the search bar
      lengthChange: false, // Disables the "Show entries" dropdown
      dom: '<"top"i>rt<"bottom"flp><"clear">' // Custom DOM structure to remove certain elements
    });
  }

  // Show the modal
  $('.datatables-users tbody').on('click', '.view', function () {
    $('#view').modal('show');
  });
  $('.datatables-users tbody').on('click', '.liat', function () {
    $('#liat').modal('show');
  });
  $('.datatables-users tbody').on('click', '.mapsModal', function () {
    $('#mapsModal').modal('show');
  });

  $(document).ready(function () {
    // Initialize DataTable (assuming dt_User is your DataTable instance)
    var dt_User = $('.datatables-users').DataTable();

    // Show Modal with data
    $('.datatables-users tbody').on('click', '.editFaktur', function () {
      const tr = $(this).closest('tr');
      const row = dt_User.row(tr).data();

      // Show the modal
      $('#editFaktur').modal('show');
    });
  });
  $(document).ready(function () {
    // Initialize DataTable (assuming dt_User is your DataTable instance)
    var dt_User = $('.datatables-users').DataTable();

    // Show Modal with data
    $('.datatables-users tbody').on('click', '.changeKendaraan', function () {
      const tr = $(this).closest('tr');
      const row = dt_User.row(tr).data();

      // Show the modal
      $('#changeKendaraan').modal('show');
    });

    // Handle form submission
    $('#change-vehicle-form').on('submit', function (event) {
      event.preventDefault();

      // Extract updated data
      const updatedData = {
        driver: $('#changeKendaraan #driver').text(),
        vehicle: $('#changeKendaraan #vehicle').text(),
        plate: $('#changeKendaraan #plate').text(),
        changeTo: $('#changeKendaraan #change-to').val() // Get selected value
      };

      // Find the row that was edited
      const tr = $('.datatables-users tbody tr.selected'); // Ensure you have a way to identify the row

      // Update DataTable with new data
      dt_User
        .row(tr)
        .data({
          ...dt_User.row(tr).data(),
          driver: updatedData.driver,
          vehicle: updatedData.vehicle,
          plate: updatedData.plate,
          changeTo: updatedData.changeTo
        })
        .draw();

      // Close the modal
      $('#changeKendaraan').modal('hide');
    });

    $(document).ready(function () {
      // Show Modal when "Cancel Route" is clicked
      $('.cancelRoute').on('click', function (e) {
        e.preventDefault();
        $('#cancelRoute').modal('show');
      });

      // Handle "Ya, Hapus Rute" button click
      $('#confirmDeleteRoute').on('click', function () {
        // Perform the route cancellation logic here
        // For example, you might want to remove the route from a list, send an AJAX request, etc.

        // Log message for demonstration
        console.log('Rute berhasil dihapus. Data akan kembali ke menu Outstanding Order.');

        // Hide the modal
        $('#cancelRoute').modal('hide');
      });
    });

    $(document).ready(function () {
      // Show Modal when "Cancel Order" is clicked
      $('.cancelOrder').on('click', function (e) {
        e.preventDefault();

        // Get Route ID from the clicked element or the corresponding table row
        const tr = $(this).closest('tr');
        const routeId = tr.find('.route-id-cell').text(); // Assume there is a cell with the class .route-id-cell containing the Route ID

        // Set Route ID in the modal
        $('#cancelOrder #route-id').text(routeId);

        // Show the modal
        $('#cancelOrder').modal('show');
      });

      $('.cancelOrder').on('click', function (e) {
        e.preventDefault();

        // Get Route ID from the clicked element or the corresponding table row
        const tr = $(this).closest('tr');
        const routeId = tr.find('.route-id-cell').text(); // Assume there is a cell with the class .route-id-cell containing the Route ID

        // Set Route ID in the modal
        $('#changeDriver #route-id').text(routeId);

        // Show the modal
        $('#changeDriver').modal('show');
      });

      // Handle form submission
      $('#edit-route-form').on('submit', function (e) {
        e.preventDefault();

        // Collect data from the form
        const routeId = $('#cancelOrder #route-id').text();
        const isCancelChecked = $('#sequence-checkbox').is(':checked');
        const deliveryType = $('#delivery').text();
        const location = $('#location').text();
        const fakturId = $('#faktur-id').text();

        // Log or send the data (replace with actual logic)
        console.log({
          routeId: routeId,
          cancelOrder: isCancelChecked,
          deliveryType: deliveryType,
          location: location,
          fakturId: fakturId
        });

        // Close the modal
        $('#cancelOrder').modal('hide');
      });
    });
  });
});

function openModals(e) {
  e.preventDefault();

  // Get Route ID from the clicked element or the corresponding table row
  const tr = $(this).closest('tr');
  const routeId = tr.find('.route-id-cell').text(); // Assume there is a cell with the class .route-id-cell containing the Route ID

  // Set Route ID in the modal
  $('#cancelOrder #route-id').text(routeId);

  // Show the modal
  $('#cancelOrder').modal('show');
}
function openRoute(e) {
  e.preventDefault();

  // Get Route ID from the clicked element or the corresponding table row
  const tr = $(this).closest('tr');
  const routeId = tr.find('.route-id-cell').text(); // Assume there is a cell with the class .route-id-cell containing the Route ID

  // Set Route ID in the modal
  $('#cancelRoute #route-id').text(routeId);

  // Show the modal
  $('#cancelRoute').modal('show');
}
function changeDriver(e) {
  e.preventDefault();

  // Get Route ID from the clicked element or the corresponding table row
  const tr = $(this).closest('tr');
  const routeId = tr.find('.route-id-cell').text(); // Assume there is a cell with the class .route-id-cell containing the Route ID

  // Set Route ID in the modal
  $('#changeDriver #route-id').text(routeId);

  // Show the modal
  $('#changeDriver').modal('show');
}
