// Declare dt_User variable
let dt_User;

// Create and append the modal when the document is ready
$(document).ready(function () {
  // Initialize DataTable
  if ($('.datatables-users').length) {
    dt_User = $('.datatables-users').DataTable({
      ajax: assetsPath + 'json/form-order-approval.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'faktur_no' },
        { data: 'nama_customer' },
        { data: 'lokasi_customer' },
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
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function () {
            return `
               <button type="button" class="btn btn-sm btn-icon waves-effect">
                  <i class="ri-arrow-up-fill ri-20px"></i>
                  <i class="ri-arrow-down-fill ri-20px"></i>
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
    url: assetsPath + 'json/form-order-approval.json',
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
