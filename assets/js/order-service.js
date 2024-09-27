// Function to create and append the modal to the DOM
function createModals() {
  // Define the modals HTML as a string
  var modalsHTML = `
    <!-- Modal for Status 1 -->
<div class="modal fade" id="status1Modal" tabindex="-1" aria-labelledby="status1ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Driver Information -->
        <div class="mb-3">
          <h6 id="status1-driver-info">Driver Name - Driver Status</h6>
        </div>
        <!-- Table -->
        <table class="table">
            <thead>
                <tr>
                    <th style="background-color: #004d00; color: white;">Sequence</th>
                    <th style="background-color: #004d00; color: white;">Delivery Type</th>
                    <th style="background-color: #004d00; color: white;">Location</th>
                    <th style="background-color: #004d00; color: white;">Faktur ID</th>
                    <th style="background-color: #004d00; color: white;">Faktur Qty</th>
                    <th style="background-color: #004d00; color: white;">WMS Qty</th>
                    <th style="background-color: #004d00; color: white;">Delivery Qty</th>
                </tr>
            </thead>
            <tbody id="modal-table-body">
                <tr>
                    <td>1</td>
                    <td>Delivery</td>
                    <td>Toko A</td>
                    <td>F001</td>
                    <td>20</td>
                    <td>18</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Delivery</td>
                    <td>Toko B</td>
                    <td>F002</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Delivery</td>
                    <td>Toko C</td>
                    <td>F003</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal for Status 1 -->
<div class="modal fade" id="status2Modal" tabindex="-1" aria-labelledby="status2ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Driver Information -->
        <div class="mb-3">
          <h6 id="status1-driver-info">Driver Name - Driver Status</h6>
        </div>
        <!-- Table -->
        <table class="table">
          <thead>
            <tr>
              <th style="background-color: #004d00; color: white;">Sequence</th>
              <th style="background-color: #004d00; color: white;">Location</th>
              <th style="background-color: #004d00; color: white;">Faktur Id</th>
              <th style="background-color: #004d00; color: white;">Status</th>
            </tr>
          </thead>
          <tbody id="modal-table-body">
            <tr>
              <td>1</td>
              <td>Jakarta</td>
              <td>F12345</td>
              <td style="color: green; font-weight: bold;">Completed</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bandung</td>
              <td>F12346</td>
              <td style="color: red; font-weight: bold;">Skip</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bogor</td>
              <td>F1563</td>
              <td style="color: orange; font-weight: bold;">In Delivery</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<style>
  .modal-dialog.custom-size {
    max-width: 90%; /* Adjust the percentage as needed */
  }
</style>

<div class="modal fade" id="status3Modal" tabindex="-1" aria-labelledby="status3ModalLabel" aria-hidden="true">
  <div class="modal-dialog custom-size"> <!-- Use custom class for size -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Driver Information -->
        <div class="mb-3">
          <h6 id="status1-driver-info">Driver Name - Driver Status</h6>
        </div>
        <!-- Table -->
        <table class="table">
          <thead>
            <tr>
              <th style="background-color: #004d00; color: white;">Location</th>
              <th style="background-color: #004d00; color: white;">Faktur ID</th>
              <th style="background-color: #004d00; color: white;">Product Name</th>
              <th style="background-color: #004d00; color: white;">Faktur QTY</th>
              <th style="background-color: #004d00; color: white;">Scan-out QTY</th>
              <th style="background-color: #004d00; color: white;">Delivery QTY</th>
              <th style="background-color: #004d00; color: white;">Retur QTY</th>
              <th style="background-color: #004d00; color: white;">Truck QTY</th>
              <th style="background-color: #004d00; color: white;">Delivery Status</th>
              <th style="background-color: #004d00; color: white;">Additional Note</th>
            </tr>
          </thead>
          <tbody id="modal-table-body">
            <tr>
              <td>Jakarta</td>
              <td>F12345</td>
              <td>Product A</td>
              <td>10</td>
              <td>5</td>
              <td>7</td>
              <td>2</td>
              <td>8</td>
              <td style="color: green; font-weight: bold;">Completed</td>
              <td>Delivered on time</td>
            </tr>
            <tr>
              <td>Bandung</td>
              <td>F12346</td>
              <td>Product B</td>
              <td>15</td>
              <td>3</td>
              <td>10</td>
              <td>1</td>
              <td>4</td>
              <td style="color: red; font-weight: bold;">Skip</td>
              <td>Not delivered</td>
            </tr>
            <tr>
              <td>Bogor</td>
              <td>F1563</td>
              <td>Product C</td>
              <td>20</td>
              <td>7</td>
              <td>12</td>
              <td>0</td>
              <td>5</td>
              <td style="color: orange; font-weight: bold;">In Delivery</td>
              <td>Delayed by 1 day</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal for Status 1 -->
<div class="modal fade" id="status4Modal" tabindex="-1" aria-labelledby="status4ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Driver Information -->
        <div class="mb-3">
          <h6 id="status1-driver-info">Driver Name - Driver Status</h6>
        </div>
        <!-- Table -->
        <table class="table">
          <thead>
            <tr>
              <th style="background-color: #004d00; color: white;">Location</th>
              <th style="background-color: #004d00; color: white;">Faktur ID</th>
              <th style="background-color: #004d00; color: white;">Product Name</th>
              <th style="background-color: #004d00; color: white;">Faktur QTY</th>
              <th style="background-color: #004d00; color: white;">Scan-out QTY</th>
              <th style="background-color: #004d00; color: white;">Status</th>
            </tr>
          </thead>
          <tbody id="modal-table-body">
            <!-- Table rows will go here -->
            <tr>
              <td>Jakarta</td>
              <td>F12345</td>
              <td>Product A</td>
              <td>10</td>
              <td>5</td>
              <td style="color: green; font-weight: bold;">Completed</td>
            </tr>
            <tr>
              <td>Bandung</td>
              <td>F12346</td>
              <td>Product B</td>
              <td>15</td>
              <td>3</td>
              <td style="color: red; font-weight: bold;">Skip</td>
            </tr>
            <tr>
              <td>Bogor</td>
              <td>F1563</td>
              <td>Product C</td>
              <td>20</td>
              <td>7</td>
              <td style="color: orange; font-weight: bold;">In Delivery</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="approvalModal" tabindex="-1" role="dialog" aria-labelledby="approvalModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
              <h5 class="modal-title text-center" style="flex: 1;">
                  <i class="ri-truck-line" style="color: #2C3E50; font-size: 45px;"></i>
              </h5>
          </div>
          <div class="modal-body text-center" style="color: #2C3E50;">
              <h5 style="color: #28a745;">Apakah Anda yakin untuk memberikan approval pengantaran ini?</h5>
          </div>
          <div class="modal-footer justify-content-end">
              <button type="button" class="btn btn-success" style="background-color: #28a745; border-color: #28a745;">Ya, Approval Start Delivery</button>
          </div>
      </div>
    </div>
</div>
  `;

  // Append the modals HTML to the body
  document.body.insertAdjacentHTML('beforeend', modalsHTML);
}

// Call the function to create the modals when needed
createModals();

$(document).ready(function () {
  var dt_payout_table = $('.datatables-payout');
  if (dt_payout_table.length) {
    dt_payout_table.DataTable({
      ajax: assetsPath + 'json/order-service.json',
      columns: [
        { data: null }, // Ensure data corresponds to your data source
        { data: 'driver_name' },
        { data: 'driver_status' },
        { data: 'route_id' },
        { data: 'total_drop' },
        { data: 'jumlah_faktur' },
        { data: 'jumlah_qty' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          targets: 0,
          render: function () {
            return ''; // Empty column
          }
        },
        {
          targets: 1,
          render: function (data, type, full) {
            return '<span>' + full['driver_name'] + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Ready to Pick Up', class: 'bg-label-success' },
              2: { title: 'In Delivery', class: 'bg-label-primary' },
              3: { title: 'Delivery Reconciliation', class: 'bg-label-warning' },
              4: { title: 'Loading', class: 'bg-label-info' }
            };
            return (
              '<span class="badge rounded-pill ' +
              statusObj[full['driver_status']].class +
              '">' +
              statusObj[full['driver_status']].title +
              '</span>'
            );
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            return '<span>' + full['route_id'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            return '<span>' + full['total_drop'] + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            return '<span>' + full['jumlah_faktur'] + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data, type, full) {
            return '<span>' + full['jumlah_qty'] + '</span>';
          }
        },
        {
          targets: -1,
          render: function (data, type, full) {
            var modalId;
            switch (full['driver_status']) {
              case 1:
                modalId = '#status1Modal';
                break;
              case 2:
                modalId = '#status2Modal';
                break;
              case 3:
                modalId = '#status3Modal';
                break;
              case 4:
                modalId = '#status4Modal';
                break;
              default:
                return ''; // Return empty string if status does not match
            }
            console.log('Modal ID:', modalId);
            var deliveries = full['deliveries'] ? JSON.stringify(full['deliveries']) : '[]'; // Ensure deliveries is a JSON string

            return `
            <div class="text-center">
              <button class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect helpdesk-btn"
                style="border: 1px solid #007bff;"
                data-driver-name="${full['driver_name']}"
                data-driver-status="${full['driver_status']}"
                data-deliveries='${deliveries}'
                data-bs-toggle="modal" data-bs-target="${modalId}">
                <i class="ri-eye-line ri-20px" style="color: #007bff;"></i>
              </button>
              <button class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect approvalModal" style="border: 1px solid #28a745; margin-left: 5px;" data-toggle="modal" data-target="#approvalModal">
                  <i class="ri-check-line ri-20px" style="color: #28a745;"></i>
              </button>
            </div>
          `;
          }
        }
      ],
      searching: false
    });
  }
  // Event untuk membuka modal
  $(document).on('click', '.approvalModal', function () {
    $('#approvalModal').modal('show');
  });

  // Event untuk menutup modal
  $(document).on('click', '#closeModalBtn, #closeModalBtn2', function () {
    $('#approvalModal').modal('hide');
  });

  // Event untuk menyetujui pengantaran
  $(document).on('click', '#approveBtn', function () {
    alert('Pengantaran disetujui!');
    $('#approvalModal').modal('hide');
  });
});
