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
                          <td>
                          <button id="editFaktur" class="btn btn-sm btn-primary rounded-pill waves-effect" data-bs-toggle="modal" data-bs-target="#editFakur">
    <i class="ri-file-text-line"></i> Document Reconciliation
</button>

                          <button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button></td>
                      </tr>
                      <tr>
                          <td>Delivery</td>
                          <td>F002</td>
                          <td>30</td>
                          <td>28</td>
                          <td>
                          <button id="editFaktur" class="btn btn-sm btn-primary rounded-pill waves-effect" data-bs-toggle="modal" data-bs-target="#editFakur">
    <i class="ri-file-text-line"></i> Document Reconciliation
</button>

                          <button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button>
                    </td>
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
                          <td>
                          <button id="editFaktur" class="btn btn-sm btn-primary rounded-pill waves-effect" data-bs-toggle="modal" data-bs-target="#editFakur">
                              <i class="ri-file-text-line"></i> Document Reconciliation
                          </button>
                          <button class="btn btn-sm btn-danger rounded-pill waves-effect" onclick="openModals(event)">
                        <i class="ri-close-line"></i> Batalkan Order
                    </button>
                    </td>
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

<!-- Modal -->
<div class="modal fade" id="approvalModal" tabindex="-1" role="dialog" aria-labelledby="approvalModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn-close mt-3 me-3" aria-label="Close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-header justify-content-center">
                <h5 class="modal-title text-center" style="flex: 1;">
                    <i class="ri-truck-line" style="color: #2C3E50; font-size: 45px;"></i>
                </h5>
            </div>
            <div class="modal-body text-center" style="color: #2C3E50;">
                <h5 style="color: #28a745;">Apakah Anda yakin untuk memberikan approval pengantaran ini?</h5>
            </div>
            <div class="modal-footer justify-content-end">
                <button type="button" class="btn btn-danger" style="background-color: #dc3545; border-color: #dc3545;" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success" style="background-color: #28a745; border-color: #28a745;">Ya, Approval Start Delivery</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="editFakur" tabindex="-1" aria-labelledby="editFakurLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editFakurLabel">Revisi Faktur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Form Edit -->
        <form id="editForm">
          <div class="row">
            <!-- Left Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <label for="documentID" class="form-label">Document ID</label>
                <input type="text" class="form-control" id="documentID" placeholder="Masukkan Document ID" value="F000">
              </div>
              <div class="mb-3">
                <label for="documentType" class="form-label">Tipe Dokumen</label>
                <input type="text" class="form-control" id="documentType" placeholder="Masukkan Tipe Dokumen" value="Faktur Revisi">
              </div>
              <div class="mb-3">
                <label for="documentRef" class="form-label">Document Ref</label>
                <input type="text" class="form-control" id="documentRef" placeholder="Masukkan Document Ref" value="Delivery">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Deskripsi</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Masukkan Deskripsi">Faktur revisi untuk penyesuaian quantity.</textarea>
              </div>
            </div>

            <!-- Right Column -->
            <div class="col-md-6">
              <div class="mb-3">
                <div class="item">
                  <img src="assets/img/KFaktur.png" alt="Foto Dokumen Revisi Faktur" class="img-fluid" style="max-height: 400px; object-fit: cover; border-radius: 10px;"> 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

`);

  if ($('.datatables-users').length) {
    dt_User = $('.datatables-users').DataTable({
      ajax: {
        url: assetsPath + 'json/order-approval.json',
        dataSrc: function (json) {
          let flattenedData = [];

          json.data.forEach(route => {
            if (route.deliveries && route.deliveries.length > 0) {
              route.deliveries.forEach((delivery, index) => {
                flattenedData.push({
                  ...route,
                  delivery_count: route.deliveries.length,
                  location_name: delivery.location_name,
                  do_number: delivery.do_number,
                  faktur_qty: delivery.faktur_qty,
                  wms_qty: delivery.wms_qty,
                  delivery_qty: delivery.delivery_qty,
                  value: delivery.value,
                  start_time: delivery.start_time,
                  end_time: delivery.end_time,
                  trip_time: delivery.trip_time,
                  notes: delivery.notes,
                  seq: delivery.seq,
                  is_first: index === 0
                });
              });
            } else {
              flattenedData.push({
                ...route,
                delivery_count: 0,
                location_name: '',
                do_number: '',
                faktur_qty: '',
                wms_qty: '',
                delivery_qty: '',
                value: '',
                start_time: '',
                end_time: '',
                trip_time: '',
                notes: '',
                seq: ''
              });
            }
          });

          return flattenedData;
        }
      },
      columns: [
        { data: 'route_id' },
        { data: 'driver_vehicle' },
        { data: 'driver_status' },
        { data: 'capacity_percent' },
        { data: 'total_value' },
        { data: 'total_trip_time' },
        { data: 'seq' },
        { data: 'location_name' },
        { data: 'do_number' },
        { data: 'faktur_qty' },
        { data: 'wms_qty' },
        { data: 'delivery_qty' },
        { data: 'value' },
        { data: 'start_time' },
        { data: 'end_time' },
        { data: 'trip_time' },
        { data: 'notes' },
        { data: 'action' }
      ],
      order: [
        [0, 'asc'],
        [6, 'asc']
      ],
      rowCallback: function (row, data) {
        var statusObj = {
          1: { title: 'Ready to Deliver', class: 'bg-label-success' },
          2: { title: 'Loading', class: 'bg-label-info' }
        };
        if (data.driver_status) {
          var deliveryStatusBadge = statusObj[data.driver_status]
            ? `<span class="badge rounded-pill ${statusObj[data.driver_status].class}">${statusObj[data.driver_status].title}</span>`
            : '<span class="badge rounded-pill bg-label-secondary">Unknown</span>';
          $('td:eq(2)', row).html(deliveryStatusBadge);
        }

        // Add the button with map icon in the second cell (td:eq(1))
        let iconHtml = '';
        if (data.route_id === 'R004') {
          iconHtml = `
            <span class="badge bg-warning" style="color: black; display: flex; align-items: center; 
                justify-content: center; padding: 1px 3px; font-size: 1rem; border-radius: 50%; width: 20px; height: 20px;">
                <i class="ri-error-warning-line" style="font-size: 1rem;"></i>
            </span>
          `;
        }

        const mapButtonHtml = `
        <div class="d-flex align-items-center">
          <span class="me-3">${iconHtml}</span>
          <span>${data.route_id}</span>
        </div>
      `;

        // Update the first cell (td:eq(0)) with the button or leave it empty if route_id is null
        if (data.route_id === null) {
          $('td:eq(0)', row).html(''); // Leave it empty if route_id is null
        } else {
          $('td:eq(0)', row).html(iconHtml); // Display the button if route_id is not null
        }

        // Handling grouping for R004
        if (data.route_id === 'R004') {
          if (data.is_first) {
            const rowspanColumns = [0, 1, 2, 3, 4, 5, 17];
            const rowspan = data.delivery_count;

            rowspanColumns.forEach(colIndex => {
              $(`td:eq(${colIndex})`, row).attr('rowspan', rowspan);
            });

            $('td:eq(0)', row).html(mapButtonHtml);
          } else {
            // If not the first row, hide specified columns
            const columnsToHide = [0, 1, 2, 3, 4, 5, 17];
            columnsToHide.forEach(colIndex => {
              $(`td:eq(${colIndex})`, row).css('display', 'none'); // Hide the columns
            });

            // Looping through deliveries for subsequent rows
            data.deliveries.forEach(delivery => {
              const deliveryRow = $('<tr></tr>'); // Create a new row for each delivery

              // Populate the row with delivery data
              deliveryRow.append(`<td>${delivery.seq}</td>`);
              deliveryRow.append(`<td>${delivery.delivery_type}</td>`);
              deliveryRow.append(`<td>${delivery.location_name}</td>`);
              deliveryRow.append(`<td>${delivery.do_number}</td>`);
              deliveryRow.append(`<td>${delivery.faktur_id}</td>`);
              deliveryRow.append(`<td>${delivery.faktur_qty}</td>`);
              deliveryRow.append(`<td>${delivery.wms_qty}</td>`);
              deliveryRow.append(`<td>${delivery.delivery_qty}</td>`);
              deliveryRow.append(`<td>${delivery.value}</td>`);
              deliveryRow.append(`<td>${delivery.start_time}</td>`);
              deliveryRow.append(`<td>${delivery.end_time}</td>`);
              deliveryRow.append(`<td>${delivery.trip_time}</td>`);
              deliveryRow.append(`<td>${delivery.notes ? delivery.notes : ''}</td>`);

              // Append the delivery row to the table
              $(row).after(deliveryRow);
            });
          }
        } else if (data.route_id) {
          $('td:eq(0)', row).html(mapButtonHtml);
        }
      },
      drawCallback: function (settings) {},

      columnDefs: [
        {
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full) {
            console.log('Rendering data:', data, type, full);

            let buttons = ''; // Initialize buttons variable
            const driverStatus = full['driver_status'] || 'N/A';
            const doNumber = full['do_number'] || 'N/A';

            // Determine view item based on doNumber
            if (doNumber === 1) {
              buttons += `<li><a class="dropdown-item liat" href="#">View</a></li>`;
            } else {
              buttons += `<li><a class="dropdown-item view" href="#view">View</a></li>`;
            }

            // Determine change vehicle item based on driver status
            if (driverStatus === 1) {
              buttons += `<li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Change Vehicle</a></li>`;
            } else {
              buttons += `<li><a class="dropdown-item changeKendaraan" href="#">Change Vehicle</a></li>`;
            }

            // Determine change vehicle item based on driver status
            if (driverStatus === 1) {
              buttons += `<li><a class="dropdown-item approvalModal" href="#">Approval</a></li>`;
            }

            return `
              <div class="dropdown">
                <button 
                  class="btn btn-sm btn-icon rounded-pill waves-effect dropdown-toggle d-flex align-items-center justify-content-center" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  aria-label="Actions"
                  style="border: 2px solid blue; background-color: blue; padding: 0; color: white;">
                  <i class="ri-more-2-fill" style="font-size: 20px;"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  ${buttons}  <!-- Use the buttons variable here -->
                  <li><a class="dropdown-item" onclick="openRoute(event)" href="#">Cancel Route</a></li>
                </ul>
              </div>
            `;
          }
        }
      ],
      searching: false,
      lengthChange: false,
      dom: '<"top"i>rt<"bottom"flp><"clear">'
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

  // Event listener for the "view" button
  $('.datatables-users tbody').on('click', '.view', function (event) {
    event.preventDefault(); // Prevent default action
    showModal('#view');
  });

  // Event listener for the "liat" button
  $('.datatables-users tbody').on('click', '.liat', function (event) {
    event.preventDefault(); // Prevent default action
    showModal('#liat');
  });

  // Function to open modals (ensure this is defined)
  function showModal(modalId) {
    $(modalId).modal('show');
  }

  // Function to handle cancellation (ensure this is defined)
  function openModals(event) {
    // Your logic for handling the button click
    // For example, show a confirmation modal or perform an action
    alert('Order has been cancelled!'); // Example action
  }
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
