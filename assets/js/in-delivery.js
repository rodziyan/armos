// Declare dt_User variable
let dt_User;

$('body').append(`
<!-- Modal Change Vehicle -->
<div class="modal fade" id="orderTransfer" tabindex="3" aria-labelledby="orderTransfer" aria-hidden="true">
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
`);

$(document).ready(function () {
  const dt_User = $('.datatables-users').DataTable({
    ajax: assetsPath + 'json/in-delivery.json',
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          // Render progress bar dengan ID unik untuk tiap row
          var progressContainer = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span></span>
              <progress value="0" max="100" id="progressDelivered${meta.row}" style="width: 80%;"></progress>
              <span id="progressLabel${meta.row}" style="margin-left: 10px;"></span> <!-- Tempat untuk persentase -->
            </div>`;
          return progressContainer;
        },
        createdCell: function (cell, cellData, rowData, rowIndex, colIndex) {
          // Ambil elemen progress bar berdasarkan row index
          var deliveredProgress = $(cell).find(`#progressDelivered${rowIndex}`);

          // Ambil elemen label untuk persentase
          var progressLabel = $(cell).find(`#progressLabel${rowIndex}`);

          // Ambil route_id dari rowData
          var routeId = rowData.route_id;

          // Tentukan delivered sesuai dengan route_id menggunakan if
          var delivered = 0;

          if (routeId === 'R001') {
            delivered = 75; // Progress untuk R001
          } else if (routeId === 'R002') {
            delivered = 50; // Progress untuk R002
          } else if (routeId === 'R003') {
            delivered = 90; // Progress untuk R003
          } else if (routeId === 'R004') {
            delivered = 30; // Progress untuk R004
          } else {
            delivered = 20; // Progress default untuk route_id lain
          }

          // Tentukan persentase progress bar berdasarkan delivered
          var deliveredPercentage = delivered;

          // Update nilai progress bar
          deliveredProgress.val(deliveredPercentage);

          // Update label persentase di belakang progress bar
          progressLabel.text(deliveredPercentage + '%');
        }
      },
      { data: 'route_id' },
      { data: 'driver_vehicle' },
      { data: 'total_trip_time' },
      { data: 'seq' },
      { data: 'location_name' },
      { data: 'do_number' },
      { data: 'faktur_qty' },
      { data: 'delivery_qty' },
      { data: 'received_qty' },
      { data: 'planned_start_time' },
      { data: 'actual_start_time' },
      { data: 'delivery_status' },
      { data: 'action' }
    ],
    rowCallback: function (row, data, index) {
      if (!data) return;
      const groupSize = 3;

      // Grouping logic based on route_id
      if (data.route_id === 'R004') {
        if (index % groupSize === 0) {
          ['td:eq(0)', 'td:eq(1)', 'td:eq(2)', 'td:eq(3)', 'td:eq(13)'].forEach(function (selector) {
            $(selector, row).attr('rowspan', groupSize).css({
              'vertical-align': 'middle',
              'text-align': 'center'
            });
          });

          $(row).find('td:lt(4)').show();
          $(row).find('td:eq(13)').show();
        } else {
          $(row).find('td:lt(4)').hide();
          $(row).find('td:eq(13)').hide();
        }
      } else if (data.route_id === null) {
        $(row).find('td:lt(4)').hide();
        $(row).find('td:eq(13)').hide();

        const previousRow = dt_User.row(index - 1).node();
        const combinedCell = $('td:eq(3)', previousRow);
        combinedCell.text(function (_, currentText) {
          return currentText;
        });
      } else {
        $(row).find('td:lt(4)').show();
        $(row).find('td:eq(13)').show();
      }

      // Add the button with map icon in the second cell (td:eq(1))
      const mapButtonHtml = `
      <div class="d-flex flex-column align-items-center">
        <button type="button" class="btn btn-success btn-sm map-btn d-flex align-items-center justify-content-center rounded-circle" style="width: 35px; height: 35px; padding: 0;" data-route-id="${data.route_id}" data-bs-toggle="modal" data-bs-target="#mapsModal">
          <i class="ri-map-pin-line" style="color: black; font-size: 18px;"></i>
        </button>
        <div class="mt-2">${data.route_id}</div> <!-- Route ID text below the button -->
      </div>`;

      // Update the second cell (td:eq(1)) with both button and route_id
      $('td:eq(1)', row).html(mapButtonHtml);
    },

    columnDefs: [
      {
        targets: 12,
        render: function (data, type, full) {
          var statusObj = {
            1: { title: 'Completed', class: 'bg-label-success' },
            2: { title: 'In Delivery', class: 'bg-label-primary' },
            3: { title: 'Skip', class: 'bg-label-warning' }
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
          return `
            <div class="dropdown">
              <button class="btn btn-sm btn-icon rounded-pill waves-effect dropdown-toggle d-flex align-items-center justify-content-center" 
                      type="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      style="border: 2px solid blue; background-color: blue; padding: 0; color: white;">
                <i class="ri-more-2-fill" style="font-size: 20px;"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item orderTransfer" href="#">Order Transfer</a></li>
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

  // Map Modal interaction
  $('.datatables-users tbody').on('click', '.mapsModal', function () {
    $('#mapsModal').modal('show');
  });

  // Order Transfer modal interaction
  $('.datatables-users tbody').on('click', '.orderTransfer', function () {
    const tr = $(this).closest('tr');
    const row = dt_User.row(tr).data();
    $('#orderTransfer').modal('show');
    $('#driver').text(row['driver']);
    $('#vehicle').text(row['vehicle']);
    $('#plate').text(row['plate']);
  });

  // Approval modal interaction
  $('.datatables-users tbody').on('click', '.approval', function () {
    $('#approval').modal('show');
  });
});
