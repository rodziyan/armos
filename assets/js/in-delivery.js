// Declare dt_User variable
let dt_User;

$('body').append(`
<!-- Modal Change Vehicle -->
<div class="modal fade" id="orderTransfer" tabindex="3" aria-labelledby="orderTransfer" aria-hidden="true">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="changeVehicleModalLabel">Change Vehicle</h5>
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
      <button type="submit" class="btn" id="saveChanges" style="background-color: green; color: white; border: none;">Transfer Order</button>
    </div>
  </div>
</div>
</div>

<!-- Modal Approval -->
<div class="modal fade" id="approval" tabindex="4" aria-labelledby="approval" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <!-- Approval Icon -->
        <div class="text-success d-flex justify-content-center w-100 mb-3">
          <i class="ri-checkbox-circle-line" style="font-size: 4rem; color: #004d00;"></i> <!-- Dark Green Icon -->
        </div>
        <!-- Approval Message -->
        <h5 style="color: #004d00;">Apakah Anda yakin untuk memberikan persetujuan bahwa pengantaran rute ini telah selesai?</h5>
        <p>Data approval akan terkirim ke menu Driver Reconciliation.</p>
      </div>
      <div class="modal-footer justify-content-center">
       <button type="button" class="btn" style="background-color: #004d00; color: white;" id="confirmApproval">Ya, Approval Delivery</button>
      </div>
    </div>
  </div>
</div>
`);

$(document).ready(function () {
  dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/in-delivery.json',
    columns: [
      { data: 'route_id' }, // Route ID
      { data: 'driver_vehicle' }, // Driver Vehicle
      { data: 'capacity_percent' }, // % Capacity
      { data: 'total_value' }, // Total Value
      { data: 'total_trip_time' }, // Total Trip Time
      { data: 'seq' }, // Seq
      { data: 'delivery_type' }, // Delivery Type
      { data: 'location_name' }, // Location Name
      { data: 'location_type' }, // Location Type
      { data: 'do_number' }, // DO Number
      { data: 'faktur_id' }, // Faktur ID
      { data: 'qty' }, // Quantity
      { data: 'value' }, // Value
      { data: 'planned_start_time' }, // Planned Start Time
      { data: 'planned_end_time' }, // Planned End Time
      { data: 'planned_trip_time' }, // Planned Trip Time
      { data: 'actual_start_time' }, // Actual Start Time
      { data: 'actual_end_time' }, // Actual End Time
      { data: 'actual_trip_time' }, // Actual Trip Time
      { data: 'delivery_status' }, // Delivery Status
      { data: 'action' } // Action
    ],
    order: [[5, 'asc']],
    rowCallback: function (row, data, index) {
      // Calculate group size (e.g., 3 rows per group)
      var groupSize = 3;

      // Check if this is the first row of the group
      if (index % groupSize === 0) {
        // Apply rowspan to Route ID, Driver - Vehicle, % Capacity, Total Value, Total Trip Time, and Action columns
        ['td:eq(0)', 'td:eq(1)', 'td:eq(2)', 'td:eq(3)', 'td:eq(4)', 'td:eq(20)'].forEach(function (selector) {
          $(selector, row).attr('rowspan', groupSize).css({
            'vertical-align': 'middle',
            'text-align': 'center'
          });
        });
      } else {
        // Hide the cells for rows 2 and 3 of the group
        $(row).find('td:lt(5)').hide(); // Hide first five columns (route_id, driver_vehicle, etc.)
        $(row).find('td:eq(20)').hide(); // Hide action column
      }
    },
    columnDefs: [
      // Your existing columnDefs here, with render functions
      {
        targets: 19,
        render: function (data, type, full) {
          var statusObj = {
            1: { title: 'Completed', class: 'bg-label-success' },
            2: { title: 'Skip', class: 'bg-label-warning' },
            3: { title: 'In Delivery', class: 'bg-label-primary' }
          };
          return (
            '<span class="badge rounded-pill ' +
            statusObj[full['delivery_status']].class +
            '">' +
            statusObj[full['delivery_status']].title +
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
                  <li><a class="dropdown-item orderTransfer" href="#">Order Transfer</a></li>
                  <li><a class="dropdown-item approval" href="#">Approval</a></li>
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
          // Logic to switch to list view
          window.location.href = 'in-delivery.html';
        }
      },
      {
        text: 'Maps View',
        className: 'btn btn-secondary me-2',
        action: function (e, dt, node, config) {
          // Logic to switch to maps view
          window.location.href = 'in-delivery-maps.html';
        }
      },
      {
        text: 'Milestone',
        className: 'btn btn-success',
        action: function (e, dt, node, config) {
          // Logic for milestone action
          window.location.href = 'in-delivery-milestone.html';
        }
      }
    ]
  });
  // Show Modal with data
  $('.datatables-users tbody').on('click', '.orderTransfer', function () {
    const tr = $(this).closest('tr');
    const row = dt_User.row(tr).data();
    $('#orderTransfer').modal('show');
    $('#driver').text(row['driver']);
    $('#vehicle').text(row['vehicle']);
    $('#plate').text(row['plate']);
  });

  // Show Cancel Route Modal
  $('.datatables-users tbody').on('click', '.approval', function () {
    $('#approval').modal('show');
  });
});