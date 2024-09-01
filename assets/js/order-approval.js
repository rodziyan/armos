// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Initialize DataTable
  if ($('.datatables-users').length) {
    dt_User = $('.datatables-users').DataTable({
      ajax: assetsPath + 'json/order-approval.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'no_order' },
        { data: 'tanggal' },
        { data: 'batch' },
        { data: 'file_name' },
        { data: 'dibuat_oleh' },
        { data: 'status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function () {
            return '';
          }
        },
        {
          targets: 1,
          orderable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
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
          render: function (data) {
            const statusObj = {
              1: { title: 'Approved', class: 'bg-label-success' },
              2: { title: 'Waiting', class: 'bg-label-warning' },
              3: { title: 'Hold', class: 'bg-label-info' },
              4: { title: 'Cancel', class: 'bg-label-danger' }
            };
            return (
              '<span class="badge ' +
              (statusObj[data]?.class || 'bg-label-secondary') +
              '">' +
              (statusObj[data]?.title || 'Unknown') +
              '</span>'
            );
          }
        },
        {
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full) {
            var $tanggal = full['tanggal'] || 'N/A';
            var $batch = full['batch'] || 'N/A';
            var $fileName = full['file_name'] || 'N/A';
            var $dibuatOleh = full['dibuat_oleh'] || 'N/A';
            var $status = full['status'];

            const statusObj = {
              1: { title: 'Approved', class: 'bg-label-success' },
              2: { title: 'Waiting', class: 'bg-label-warning' },
              3: { title: 'Hold', class: 'bg-label-info' },
              4: { title: 'Cancel', class: 'bg-label-danger' }
            };
            var $statusText = statusObj[$status] || 'Unknown';

            return `
                <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" 
                        onclick="window.location.href='form-order-approval.html'">
                        <i class="ri-eye-line ri-20px"></i>
                </button>
            `;
          }
        }
      ]
    });

    // Delete Record
    $('.datatables-users tbody').on('click', '.delete-record', function () {
      dt_User.row($(this).parents('tr')).remove().draw();
    });
  }
  // Load the JSON data using AJAX
  $.ajax({
    url: assetsPath + 'json/order-approval.json',
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      // Assuming the JSON response has the same structure as orderApprovalData
      const orderApprovalData = response;
      const driverVehicleSelect = document.getElementById('driver-vehicle');

      if (driverVehicleSelect) {
        // Populate the dropdown with driver_vehicle data
        orderApprovalData.data.forEach(item => {
          if (item.driver_vehicle) {
            const option = document.createElement('option');
            option.value = item.driver_vehicle;
            option.textContent = item.driver_vehicle;
            driverVehicleSelect.appendChild(option);
          }
        });
      } else {
        console.error('Element with id="driver-vehicle" not found.');
      }
    },
    error: function (xhr, status, error) {
      console.error('Failed to load order-approval.json:', error);
    }
  });
});
