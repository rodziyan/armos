// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Create and append the modal HTML
  $('body').append(`
    <div class="modal fade" id="view" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
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
                        <p>Sequence : <strong>1</strong></p>
                        <p>DO Number : <strong>DO001-1</strong></p>
                        <p>Delivery Type : <strong>Delivery</strong></p>
                    </div>
                    <div>
                        <p>Location : <strong>Toko A</strong></p>
                        <p>Faktur ID : <strong>F001</strong></p>
                        <p>Total Value : <strong>Rp80.000</strong></p>
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
                        <p>Sequence : <strong>2</strong></p>
                        <p>DO Number : <strong>DO001-2</strong></p>
                        <p>Delivery Type : <strong>Delivery</strong></p>
                    </div>
                    <div>
                        <p>Location : <strong>Toko B</strong></p>
                        <p>Faktur ID : <strong>F002</strong></p>
                        <p>Total Value : <strong>Rp100.000</strong></p>
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
        </div>
    </div>
</div>

  
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
           <div class="mb-2">
                  <label for="driver" class="col-md-4 col-form-label">Driver: Andi</label>
                </div>
                <div class="mb-2">
                  <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: Double XT</label>
                </div>
                <div class="mb-2">
                  <label for="plate" class="col-md-4 col-form-label">Plat Nomor: F 1234 ABC</label>
                </div>
          <div class="mb-3">
            <label for="change-to" class="form-label">Diubah ke</label>
             <select class="form-select" id="change-to" name="change-to">
              <option value="" disabled selected>Select Driver & Vehicle</option>
              <option value="budi_heavy_duty_xz_5678_def">Budi Heavy Duty XZ 5678 DEF</option>
              <option value="cindy_light_truck_a_9012_ghi">Cindy Light Truck A 9012 GHI</option>
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

<!-- Modal Change Driver & Kernet -->
<div class="modal fade" id="changeDriver" tabindex="3" aria-labelledby="changeDriverModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="changeDriverModalLabel">Route-001</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
          <label for="current-driver-kernet" class="col-md-4 col-form-label">Driver & Kernet: Andi & Ibnu</label>
        </div>
        <div class="mb-2">
          <label for="current-vehicle" class="col-md-4 col-form-label">Kendaraan: Double XT F 1234 ABC</label>
        </div>
          <div class="mb-3">
            <label for="driver-select" class="form-label">Select Driver</label>
            <select class="form-select" id="driver-select" name="driver-select">
              <option value="" disabled selected>Select a Driver</option>
              <option value="andi">Andi</option>
              <option value="budi">Budi</option>
              <option value="cindy">Cindy</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="kernet-select" class="form-label">Select Kernet</label>
            <select class="form-select" id="kernet-select" name="kernet-select">
              <option value="" disabled selected>Select a Kernet</option>
              <option value="kernet1">Kernet 1</option>
              <option value="kernet2">Kernet 2</option>
              <option value="kernet3">Kernet 3</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" form="change-vehicle-form" style="background-color: #004d00; color: white; border: none; padding: 10px 20px;">Save Changes</button>
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
        <h5 class="text-danger">Apakah Anda yakin untuk menghapus rute ini?</h5>
        <p>Data yang Anda hapus akan kembali ke menu Outstanding Order.</p>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-danger" id="confirmDeleteRoute">Ya, Hapus Rute</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Cancel Order -->
  <div class="modal fade" id="cancelOrder" tabindex="5" aria-labelledby="editRouteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
       <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Route ID -->
                <div class="mb-3">
                    <h5 class="modal-title" id="cancelOrderModalLabel">Route 001</h5>
                </div>
        <div class="modal-body">
          <!-- Form Edit Route -->
          <form id="edit-route-form">
            <div class="row mb-3">
              <div class="col-md-12">
                <h6 class="mb-2">Route Details</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="background-color: red; color: white;">Cancel Order</th>
                      <th style="background-color: #004d00; color: white;">Delivery Type</th>
                      <th style="background-color: #004d00; color: white;">Location</th>
                      <th style="background-color: #004d00; color: white;">Faktur Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <!-- Checkbox for Sequence -->
                        <input type="checkbox" id="sequence-checkbox" name="sequence-checkbox">
                      </td>
                          <td>
                        <span>Delivery</span> <!-- delivery_type -->
                      </td>
                      <td>
                        <span>Toko A</span> <!-- location_name -->
                      </td>
                      <td>
                        <span>F001</span> <!-- faktur_id -->
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <!-- Checkbox for Sequence -->
                        <input type="checkbox" id="sequence-checkbox" name="sequence-checkbox">
                      </td>
                          <td>
                        <span>Delivery</span> <!-- delivery_type -->
                      </td>
                      <td>
                        <span>Toko B</span> <!-- location_name -->
                      </td>
                      <td>
                        <span>F002</span> <!-- faktur_id -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Footer with Save and Cancel Buttons -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" id="confirmDeleteRoute">Cancel Order</button>
            </div>
          </form>
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
        { data: 'delivery_type' }, // Delivery Type
        { data: 'location_name' }, // Location Name
        { data: 'do_number' }, // DO Number
        { data: 'faktur_id' }, // Faktur ID
        { data: 'faktur_qty' }, // Faktur Qty
        { data: 'wms_qty' }, // WMS Qty
        { data: 'delivery_qty' }, // Delivery Qty
        { data: 'value' }, // Value
        { data: 'start_time' }, // Start Time
        { data: 'end_time' }, // End Time
        { data: 'trip_time' }, // Trip Time
        { data: 'notes' }, // Notes
        { data: 'action' } // Action
      ],
      order: [[5, 'asc']],
      rowCallback: function (row, data, index) {
        // Calculate group size (e.g., 2 rows per group)
        var groupSize = 2;

        // Check if this is the first row of the group
        if (index % groupSize === 0) {
          // Apply rowspan to Route ID, Driver - Vehicle, % Capacity, Total Value, Total Trip Time, and Action columns
          ['td:eq(0)', 'td:eq(1)', 'td:eq(2)', 'td:eq(3)', 'td:eq(4)', 'td:eq(18)'].forEach(function (selector) {
            $(selector, row).attr('rowspan', groupSize).css({
              'vertical-align': 'middle',
              'text-align': 'center'
            });
          });
        } else {
          // Hide the cells for rows 2 and 3 of the group
          $(row).find('td:lt(5)').hide(); // Hide first five columns (route_id, driver_vehicle, etc.)
          $(row).find('td:eq(18)').hide(); // Hide action column
        }
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
                  <li><a class="dropdown-item view" href="#">View</a></li>
                  <li><a class="dropdown-item editFaktur" href="#">Edit Faktur</a></li>
                  <li><a class="dropdown-item changeKendaraan" href="#">Change Vehicle</a></li>
                  <li><a class="dropdown-item " onclick="changeDriver(event)" href="#">Change Driver & Kernet</a></li>
                  <li><a class="dropdown-item " onclick="openRoute(event)" href="#">Cancel Route</a></li>
                  <li><a class="dropdown-item " onclick="openModals(event)" href="#">Cancel Order</a></li>
                </ul>
              </div>
            `;
          }
        }
      ],
      // Remove the default search box
      dom: '<"d-flex justify-content-end align-items-end mt-2 mb-2 me-4"B>t',
      // Add custom buttons
      buttons: [
        {
          text: 'List View',
          className: 'btn btn-primary me-2',
          action: function (e, dt, node, config) {
            // Add your logic to switch to list view
            window.location.href = 'order-approval.html';
          }
        },
        {
          text: 'Maps View',
          className: 'btn btn-secondary',
          action: function (e, dt, node, config) {
            // Add your logic to switch to maps view
            window.location.href = 'order-approval-maps.html';
          }
        }
      ]
    });
  }

  // Show the modal
  $('.datatables-users tbody').on('click', '.view', function () {
    $('#view').modal('show');
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
