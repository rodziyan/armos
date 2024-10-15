function createModals() {
  // Define the modals HTML as a string
  var modalsHTML = `
    <!-- Modal for Status 1 -->
<div class="modal fade" id="status1Modal" tabindex="-1" aria-labelledby="status1ModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%;"> <!-- Adjusted width and centered -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: JNE</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toko A</td>
                <td>F001</td>
                <td>40</td> 
                <td>40</td> 
                <td></td> 
                <td></td> 
                <td></td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td>Manual Routing</td>
                <td></td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                      
      </div>
    </div>
  </div>
</div>


<!-- Modal for Status 2 -->
<div class="modal fade" id="status2Modal" tabindex="-1" aria-labelledby="status2ModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%; margin: auto;"> <!-- Adjusted width and centered -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: Sales Putra</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toko A</td>
                <td>F002</td>
                <td>30</td> 
                <td>30</td> 
                <td></td> 
                <td></td> 
                <td></td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td>Manual Routing</td>
                <td></td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                    
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="status3Modal" tabindex="-1" aria-labelledby="status3ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%; margin: auto;"> <!-- Adjusted width and centered -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: Charlie</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toko G</td>
                <td>F003</td>
                <td>15</td> 
                <td>15</td> 
                <td>15</td> 
                <td>13</td> 
                <td></td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                     
      </div>
    </div>
  </div>
</div>


<!-- Modal for Status 1 -->
<div class="modal fade" id="status4Modal" tabindex="-1" aria-labelledby="status4ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%; margin: auto;"> <!-- Adjusted width and centered -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: Dedi</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">Toko G</td>
                <td>F001</td>
                <td>25</td> 
                <td>25</td> 
                <td>25</td> 
                <td>25</td> 
                <td></td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>F006</td>
                <td>10</td> 
                <td>10</td> 
                <td>10</td> 
                <td>10</td> 
                <td></td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                     
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="status5Modal" tabindex="-1" aria-labelledby="status5ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%; margin: auto;"> <!-- Adjusted width and centering -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: Eva</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Truk QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">Toko B</td>
                <td>F002</td>
                <td>12</td> 
                <td>12</td> 
                <td>12</td> 
                <td>12</td> 
                <td>0</td> 
                <td>0</td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>F001</td>
                <td>-</td> 
                <td>-</td> 
                <td>-</td> 
                <td>-</td> 
                <td>5</td> 
                <td>5</td>  
                <td style="color: green; font-weight: bold;">Completed</td> <!-- Delivery status in green -->
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                     
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="status6Modal" tabindex="-1" aria-labelledby="status6ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width: 90%; width: 90%; margin: auto;"> <!-- Adjusted width and centered -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="change-vehicle-form">
          <div class="mb-2">
            <label for="driver" class="col-md-4 col-form-label">Driver: Fauzi</label>
          </div>
          <div class="mb-2">
            <label for="vehicle" class="col-md-4 col-form-label">Kendaraan: -</label>
          </div>
          <div class="mb-2">
            <label for="plate" class="col-md-4 col-form-label">Plat Kendaraan: -</label>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Document ID</th>
                <th>Faktur QTY</th>
                <th>WMS QTY</th>
                <th>Delivery QTY</th>
                <th>Received QTY</th>
                <th>Retur QTY</th>
                <th>Truk QTY</th>
                <th>Delivery Status</th>
                <th>Additional Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toko C</td>
                <td>F002</td>
                <td>40</td> 
                <td>40</td> 
                <td>40</td> 
                <td>40</td> 
                <td>0</td> 
                <td>0</td>  
                <td style="color: green; font-weight: bold;">Completed</td>
                <td></td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Toko D</td>
                <td>R001</td>
                <td>25</td> 
                <td>25</td> 
                <td>25</td>
                <td>0</td> 
                <td>0</td> 
                <td>25</td>  
                <td style="color: red; font-weight: bold;">Skip</td>
                <td>1x Skip</td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Toko E</td>
                <td>R001</td>
                <td>17</td> 
                <td>17</td> 
                <td>17</td>
                <td>0</td> 
                <td>0</td> 
                <td>17</td>  
                <td style="color: red; font-weight: bold;">Skip</td>
                <td>2x Skip</td>
                <td>
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalView">
                    <i class="ri-eye-line"></i>
                  </button>
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#returnModal">
                    <i class="ri-home-2-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#confirmationModal" style="background-color: #006400; color: white; border: none;">
          Reconciliation completed
        </button>                     
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

// Function to create and append the modal to the DOM
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    var dt_payout_table = $('.datatables-payout');
    if (dt_payout_table.length) {
      dt_payout_table.DataTable({
        ajax: assetsPath + 'json/delivery-recon.json',
        columns: [
          { data: null }, // Ensure data corresponds to your data source
          { data: 'driver_name' },
          { data: 'driver_status' },
          { data: 'route_id' },
          { data: 'drop_completion' },
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
                1: { title: 'Delivery Completed', class: 'bg-label-success' },
                2: { title: 'Delivery Success', class: 'bg-label-success' }
              };

              // Menambahkan tanda seru kuning saat status adalah 2, di dalam label
              var indicator =
                full['driver_status'] == 2
                  ? '<i class="ri-error-warning-line text-warning me-2" title="Partial Trip Indicator" style="font-size: 15px; background-color: yellow; color: black; padding: 5px; border-radius: 50%;"></i>'
                  : '';

              return (
                '<span class="badge rounded-pill ' +
                statusObj[full['driver_status']].class +
                '">' +
                indicator +
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
              var driverName = full['driver_name'];
              var style = '';

              // Cek jika driver_name Fauzi, beri style warna merah
              if (driverName === 'Fauzi') {
                style = ' style="color: red;"';
              }

              return '<span' + style + '>' + full['drop_completion'] + '</span>';
            }
          },
          {
            targets: 5,
            render: function (data, type, full) {
              var driverName = full['driver_name'];
              var style = '';

              // Cek jika driver_name Fauzi, beri style warna merah
              if (driverName === 'Fauzi') {
                style = ' style="color: red;"';
              }

              return '<span' + style + '>' + full['jumlah_faktur'] + '</span>';
            }
          },
          {
            targets: 6,
            render: function (data, type, full) {
              var qty = full['jumlah_qty'];
              var driverName = full['driver_name'];
              var style = '';
              if (driverName === 'Charlie' || driverName === 'Fauzi' || driverName === 'Gina') {
                style = ' style="color: red;"'; // Berikan gaya warna merah
              }

              return '<span' + style + '>' + qty + '</span>';
            }
          },
          {
            targets: -1,
            render: function (data, type, full) {
              var modalId;
              switch (full['id']) {
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
                case 5:
                  modalId = '#status5Modal';
                  break;
                case 6:
                  modalId = '#status6Modal';
                  break;
                case 7:
                  modalId = '#status7Modal';
                  break;
                default:
                  return '';
              }

              return `
                <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect" data-bs-toggle="modal" data-bs-target="${modalId}">
                  <i class="ri-eye-line"></i>
                </button>
              `;
            }
          }
        ],
        searching: false
      });
    }
  });
});
